import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import cl from '../../styles/Menu.module.scss';
const ScrollLink = Scroll.Link;

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
        <Link to='/news' className={cl.navText}>
          News
        </Link>
        <ScrollLink
          to='footer'
          spy={true}
          smooth={true}
          offset={-100}
          duration={900}
          className={cl.navText}
        >
          Contacts
        </ScrollLink>
        <Link to='/about' className={cl.navText}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Menu;
