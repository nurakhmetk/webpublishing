import React from 'react';
import { Route, Routes } from 'react-router-dom';
import cl from '../styles/Home.module.scss';

import Aside from './Aside';
import CategorySelection from './CategorySelection';

import ArticlePage from './ArticlePage';
import CategoryPage from './CategoryPage';

import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

const Home = ({ news }) => {
  const categories = useSelector(
    (state) => state.newsCategoriesReducer.categories
  );

  const combinedNews = Object.values(news);

  const renderNewsRoutes =
    !!combinedNews.length &&
    combinedNews.map((item) => {
      const newRoutes = item.map((res) => {
        const id = uniqid();
        return (
          <Route
            path={res.link}
            element={<ArticlePage data={res} key={id} />}
            key={res.id}
          />
        );
      });
      return newRoutes;
    });

  return (
    <main className={cl.home} id='homepage'>
      <div className={cl.container}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className={cl.content}>
                  <CategorySelection categories={categories} />
                </div>
                <Aside />
              </>
            }
          />
          {renderNewsRoutes}

          <Route
            path='/generalnews'
            element={
              <CategoryPage
                categoryName={'General News'}
                news={news.generalNews}
              />
            }
          />
          <Route
            path='/technews'
            element={
              <CategoryPage categoryName={'Tech News'} news={news.techNews} />
            }
          />
          <Route
            path='/sportsnews'
            element={
              <CategoryPage
                categoryName={'Sports News'}
                news={news.sportsNews}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
};

export default Home;
