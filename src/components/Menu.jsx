import React from 'react';
import { Link } from 'react-router-dom';
import cl from '../styles/Menu.module.scss';

const Menu = ({ menuActive, setMenuActive, isActive, setIsActive }) => {
  return (
    <div
      className={menuActive ? cl.menuActive : cl.menu}
      onClick={() => setMenuActive(false)}
    >
      <div className={cl.blur}></div>
      <div className={cl.menuContent}>
        <Link to='/' className={cl.navText}>
          Home
        </Link>
        <Link to='/generalnews' className={cl.navText}>
          General News
        </Link>
        <Link to='/technews' className={cl.navText}>
          Techno News
        </Link>
        <Link to='/sportsnews' className={cl.navText}>
          Sports News
        </Link>
        <Link to='/contacts' className={cl.navText}>
          Contacts
        </Link>
        <Link to='/about' className={cl.navText}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Menu;
