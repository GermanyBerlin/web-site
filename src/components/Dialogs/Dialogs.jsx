import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return(
    <div className={s.dialog}>
      <NavLink to = {path} activeClassName={s.active}>{props.name}</NavLink> 
    </div>
  )
}

const Message = props => {
  return(
    <div className = {s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className = {s.dialogs}>
      <div className = {s.dialogsItem}>
        <DialogItem name = 'Alex' id = '1'/>
        <DialogItem name = 'Freank' id = '2'/>
        <DialogItem name = 'Missa' id = '3'/>

      </div>
      <div className = {s.messages}>
        <Message message = 'Hello 1'/>
        <Message message = 'Hello 2'/>
        <Message message = 'Hello 3'/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Dialogs;