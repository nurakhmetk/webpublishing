import React from 'react';
import { Link } from 'react-router-dom';
import cl from '../styles/NoMatch.module.scss';

const NoMatch = () => {
  return (
    <div className={cl.nomatch}>
      <div className={cl.container}>
        This page doesn't exist. Go - <Link to='/'> Home</Link>
      </div>
    </div>
  );
};

export default NoMatch;
