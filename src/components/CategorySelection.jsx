import React from 'react';
import { Link } from 'react-router-dom';

import cl from '../styles/CategorySelection.module.scss';

import Article from './Article';

import uniqid from 'uniqid';

const CategorySelection = ({ item }) => {
  const uniqID = uniqid();
  return (
    <div className={cl.flexContainer} key={uniqID}>
      {item.twoNews.map((res) => {
        const id = uniqid();
        return (
          <Link to={`${item.link}/${res.id}`} key={id}>
            <Article title={res.title} image={res.imageUrl} />
          </Link>
        );
      })}
    </div>
  );
};

export default CategorySelection;
