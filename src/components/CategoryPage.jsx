import React from 'react';
import cl from '../styles/CategoryPage.module.scss';
import { Link } from 'react-router-dom';
import Article from './Article';
import uniqid from 'uniqid';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryPage = (props) => {
  const { categoryname, articlelink } = useParams();

  const news = useSelector((state) => state.newsReducer.newsByCategory);

  return (
    <div className={cl.categoryPage}>
      <div className={cl.categoryHeader}>
        <p className={cl.categoryPageText}>
          {categoryname} News Around The World
        </p>
      </div>
      <div className={cl.gridContainer}>
        {news.map((item) => {
          const posts =
            item.link === categoryname
              ? item.allNews.map((res) => {
                  const id = uniqid();
                  return (
                    <Link to={`${res.id}`} key={id}>
                      <Article title={res.title} image={res.imageUrl} />
                    </Link>
                  );
                })
              : null;
          return posts;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
