import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import cl from '../../styles/Layout.module.scss';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
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
    <>
      <ScrollToTop>
        <div className={cl.wrapper}>
          <Header />
          <div className={cl.container}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </>
  );
};

export default Layout;
