import s from './Navbar.module.css';

const Navbar = () => {
  return(
    <div className={s.navbar}>
      <div className={`${s.item} ${s.active}`}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>News</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Music</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Settings</a>
      </div>
    </div>
  );
}

export default Navbar;