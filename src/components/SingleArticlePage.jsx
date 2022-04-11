import React from 'react';

import cl from '../styles/SingleArticlePage.module.scss';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleArticlePage = () => {
  const { category, articlelink } = useParams();
  console.log('category >>', category);
  console.log('articlelink >>', articlelink);

  const news = useSelector((state) => state.news.newsByCategory);

  const checkedNews = news.find((item) => item.link === category);
  const article = checkedNews.categoryAllNews.find(
    (res) => res.link === articlelink
  );

  return (
    <div className={cl.singlePage}>
      <h1 className={cl.title}>{article.title}</h1>
      <address className={cl.author}>
        By: <span>{article.author}</span>
      </address>
      <p className={cl.published}>{article.date + ' ' + article.time}</p>
      <img src={article.imageUrl} alt='' className={cl.image} />
      <h2 className={cl.description}>{article.description}</h2>
      <p className={cl.textContent}>{article.text}</p>
      <address className={cl.urlToOriginal}>
        <a href={article.url} target='_blank' rel='noreferrer'>
          Source
        </a>
      </address>
    </div>
  );
};

export { SingleArticlePage };
