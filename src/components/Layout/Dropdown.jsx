import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from '../../styles/Dropdown.module.scss';

const setActive = ({ isActive }) => (isActive ? cl.textActive : cl.text);

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
        <NavLink to='generalnews' onClick={CloseDropdown} className={setActive}>
          General News
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to='technews' onClick={CloseDropdown} className={setActive}>
          Tech News
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to='sportsnews' onClick={CloseDropdown} className={setActive}>
          Sports News
        </NavLink>
      </div>
    </div>
  );
};

export default Dropdown;
