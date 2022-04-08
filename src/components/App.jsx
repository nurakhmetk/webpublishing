import React, { useEffect } from 'react';
import News from './News';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchNews } from '../redux/actions';

import Spin from './Spin';
import Layout from './Layout/Layout';
import About from './About';
import NoMatch from './NoMatch';
import CategoryPage from './CategoryPage';
import { SingleArticlePage } from './SingleArticlePage';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.appReducer.loading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='news/:categoryname' element={<CategoryPage />} />
          <Route
            path='news/:categoryname/:articlelink'
            element={<SingleArticlePage />}
          />

          <Route path='about' element={<About />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
