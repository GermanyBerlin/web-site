import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = props => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs = [
    { id: '1', name: 'Alex' },
    { id: '2', name: 'Freank' },
    { id: '3', name: 'Missa' }
  ]
  
  let messages = [
    { id: '1', message: 'Hello 1' },
    { id: '2', message: 'Hello 2' },
    { id: '3', message: 'Hello 3' }
  ]

  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messagesElements = messages.map(message => <Message message={message.message} />)

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