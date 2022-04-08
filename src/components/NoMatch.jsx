import React from 'react';
import { Link } from 'react-router-dom';
import cl from '../styles/NoMatch.module.scss';

const NoMatch = () => {
  return (
    <div className={cl.nomatch}>
      <div className={cl.container}>
        <p className={cl.text}>
          Ooops! This page doesn't exist. Go to&nbsp;
          <Link to='/' className={cl.link}>
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
