import React from 'react';
import cl from '../styles/CategoryPage.module.scss';
import { Link } from 'react-router-dom';
import Article from './Article';
import uniqid from 'uniqid';

const CategoryPage = ({ categoryName, uniqKey, uniqKeyPost, news }) => {
  return (
    <div className={cl.categoryPage} key={uniqKey}>
      <div className={cl.categoryHeader}>
        <p className={cl.categoryPageText}>
          {categoryName} News Around The World
        </p>
      </div>
      <div className={cl.gridContainer}>
        {news.length &&
          news.map((item) => {
            const id = uniqid();
            return (
              <Link to={'/' + item.link} key={id}>
                <Article title={item.title} image={item.imageUrl} key={id} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPage;
