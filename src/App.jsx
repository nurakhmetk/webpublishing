import React, { useEffect } from 'react';
import News from './components/News';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchNews } from './redux/actions';

import Spin from './components/Spin';
import Layout from './components/Layout/Layout';
import About from './components/About';
import NoMatch from './components/NoMatch';
import CategoryPage from './components/CategoryPage';
import { SingleArticlePage } from './components/SingleArticlePage';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='news/:category' element={<CategoryPage />} />
          <Route
            path='news/:category/:articlelink'
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
