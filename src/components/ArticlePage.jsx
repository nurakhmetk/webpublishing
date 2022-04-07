import React from 'react';

import cl from '../styles/ArticlePage.module.scss';

const ArticlePage = ({ data }) => {
  const { title, author, imageUrl, description, text, url, date, time } = data;

  return (
    <div className={cl.singlePage}>
      <h1>{title}</h1>
      <address className={cl.author}>
        By: <span>{author}</span>
      </address>
      <p className={cl.published}>{date + ' ' + time}</p>
      <img src={imageUrl} alt='' className={cl.image} />
      <h2 className={cl.description}>{description}</h2>
      <p className={cl.textContent}>{text}</p>
      <address className={cl.urlToOriginal}>
        <a href={url} target='_blank' rel='noreferrer'>
          Source
        </a>
      </address>
    </div>
  );
};

export default ArticlePage;
