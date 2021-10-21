import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogInfo/DialogInfo';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Dialogs;