import React from 'react';
import cl from '../styles/Article.module.scss';

const Article = ({ title, image }) => {
  return (
    <article className={cl.articles}>
      <p className={cl.title}>{title}</p>
      <div className={cl.imageLink}>
        <img src={image} alt='' className={cl.image} />
      </div>
    </article>
  );
};

export default Article;
