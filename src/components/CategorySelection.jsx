import React from 'react';
import Article from './Article';
import cl from '../styles/CategorySelection.module.scss';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

const CategorySelection = ({ categories }) => {
  return (
    <>
      {!!categories.length &&
        categories.map((item) => (
          <section className={cl.category} key={item.id}>
            <p className={cl.categoryText}>
              <Link to={item.link} key={item.id}>
                {item.name}
              </Link>
            </p>
            <div className={cl.flexContainer}>
              {item.news.map((res) => {
                const id = uniqid();
                return (
                  <Link to={'/' + res.link} key={id}>
                    <Article
                      title={res.title}
                      image={res.imageUrl}
                      key={res.id}
                    />
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
    </>
  );
};

export default CategorySelection;
