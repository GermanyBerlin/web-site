import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogInfo/DialogInfo';
import Message from './Message/Message';
import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';


const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = state.messages.map(message => <Message message={message.message} />)
  let newMessage = state.newMessage.map;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  let onMessageChange = (e) =>{
    let newMessage = e.target.value;
    props.store.dispatch(updateNewMessageActionCreator(newMessage))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea placeholder='Введите сообщение...' onChange={onMessageChange} value={newMessage}></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Отправить</button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Dialogs;