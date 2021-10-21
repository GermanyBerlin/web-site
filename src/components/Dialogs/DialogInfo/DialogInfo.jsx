import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <img src="https://static.turbosquid.com/Preview/2014/05/19__17_46_43/tguy1_headrender01+copy.jpgb9da1459-b9d8-4952-bca9-ed5f231c98c6Large.jpg"></img>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;