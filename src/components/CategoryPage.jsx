import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import cl from '../styles/CategoryPage.module.scss';

import Article from './Article';
import { saveSelectedPost } from '../redux/actions';

const CategoryPage = (props) => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news.newsByCategory);

  const categoryName = category.slice(0, -4);

  // const handleSelectedPost = (id, item) => {
  //   dispatch(saveSelectedPost(id, item));
  // };

  return (
    <div className={cl.categoryPage}>
      <div className={cl.categoryHeader}>
        <p className={cl.categoryPageText}>
          {categoryName} News Around The World
        </p>
      </div>
      <div className={cl.gridContainer}>
        {news.map((item) => {
          const posts =
            item.link === category
              ? item.categoryAllNews.map((res) => {
                  const id = uniqid();
                  return (
                    <Link to={`${res.link}`} key={id}>
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
