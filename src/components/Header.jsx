import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import cl from '../styles/Header.module.scss';
import arrow from '../image/icons/arrownew.svg';
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
            <Link to='/' className={cl.navText}>
              Home
            </Link>
            <div className={cl.navText} onClick={(e) => setIsActive(!isActive)}>
              News
              <img
                src={arrow}
                alt=''
                className={isActive ? cl.iconActive : cl.iconNotActive}
              />
            </div>
            <Dropdown isActive={isActive} setIsActive={setIsActive} />
            {/* selected={selected} setSelected={setSelected}  */}
            {/* <Link to='/contacts' className={cl.navText}>
              Contacts
            </Link> */}
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
