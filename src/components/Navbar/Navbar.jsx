import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={`${s.item} ${s.active}`}>
        <a href="/content">Моя страница</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs">Сообщения</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/news">Новости</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/music">Музыка</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="settings">Настройки</a>
      </div>
    </div>
  );
}

export default Navbar;