import React from 'react';
import { Link } from 'react-router-dom';
import cl from '../styles/Dropdown.module.scss';
const Dropdown = ({ isActive, setIsActive }) => {
  const CloseDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={isActive ? cl.dropdownActive : cl.dropdownNotActive}
      onClick={(e) => e.preventDefault()}
    >
      <div className={cl.item}>
        <Link to='/generalnews' onClick={CloseDropdown}>
          General News
        </Link>
      </div>
      <div className={cl.item}>
        <Link to='/technews' onClick={CloseDropdown}>
          Tech News
        </Link>
      </div>
      <div className={cl.item}>
        <Link to='/sportsnews' onClick={CloseDropdown}>
          Sports News
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
