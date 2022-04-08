import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cl from '../styles/News.module.scss';

import Aside from './Aside';
import CategorySelection from './CategorySelection';

import uniqid from 'uniqid';

const News = () => {
  const news = useSelector((state) => state.newsReducer.newsByCategory);

  return (
    <main className={cl.news} id='news'>
      <div className={cl.container}>
        <div className={cl.content}>
          {news.length &&
            news.map((item) => {
              const id = uniqid();
              return (
                <section className={cl.category} key={id}>
                  <Link
                    to={`${item.link}`}
                    key={item.id}
                    className={cl.categoryNameLink}
                  >
                    {item.name}
                  </Link>
                  <CategorySelection item={item} />
                </section>
              );
            })}
        </div>
        <Aside />
      </div>
    </main>
  );
};

export default News;
