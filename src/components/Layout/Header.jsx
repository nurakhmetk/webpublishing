import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import cl from '../../styles/Header.module.scss';
import arrow from '../../image/icons/arrownew.svg';
import Dropdown from './Dropdown';
import Menu from './Menu';

const ScrollLink = Scroll.Link;

const Header = ({ news }) => {
  const [isActive, setIsActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isActive]);

  const OpenMenu = () => {
    setMenuActive(!menuActive);
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  return (
    <header className={cl.header} id='header'>
      <div className={cl.container}>
        <Link to='/' className={cl.title}>
          WEB|PUBLISHI<span>N</span>G
        </Link>
        <nav className={cl.navigation} ref={ref}>
          <div className={cl.navList}>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? cl.navTextActive : cl.navText
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/news'
              className={({ isActive }) =>
                isActive ? cl.navTextActive : cl.navText
              }
            >
              News
            </NavLink>
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
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? cl.navTextActive : cl.navText
              }
            >
              About
            </NavLink>
          </div>
        </nav>
        <div
          className={menuActive ? cl.burgerMenuActive : cl.burgerMenu}
          onClick={OpenMenu}
        >
          <span className={cl.burgerLine}></span>
          <span className={cl.burgerLine}></span>
          <span className={cl.burgerLine}></span>
        </div>
        <Menu
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </header>
  );
};

export default Header;
