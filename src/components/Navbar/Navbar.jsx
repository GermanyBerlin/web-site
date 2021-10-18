import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className = {s.navbar}>
      <div className = {`${s.item} ${s.active}`}>
        <NavLink to = "/content">Моя страница</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to = "/dialogs">Сообщения</NavLink>
      </div>
      <div className = {`${s.item} ${s.active}`}>
        <NavLink to = "/news">Новости</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to = "/music">Музыка</NavLink>
      </div>
      <div className = {`${s.item} ${s.active}`}>
        <NavLink to = "settings">Настройки</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;