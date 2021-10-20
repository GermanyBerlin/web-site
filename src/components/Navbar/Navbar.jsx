import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className = {s.navbar}>
      <div className = {s.item}>
        <NavLink to = "/content" activeClassName={s.active}>Моя страница</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to = "/dialogs" activeClassName={s.active}>Сообщения</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to = "/news" activeClassName={s.active}>Новости</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to = "/music" activeClassName={s.active}>Музыка</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to = "settings" activeClassName={s.active}>Настройки</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;