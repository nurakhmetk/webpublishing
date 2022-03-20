import React from 'react';
import cl from './Header.module.scss';

function Header() {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <p className={cl.title}>
          WEB|PUBLISHI<span>N</span>G
        </p>
        <nav className={cl.navigation}>
          <ul>
            <li className={cl.navText}>Home</li>
            <li className={cl.navText}>News</li>
            <li className={cl.navText}>About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
