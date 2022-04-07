import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import cl from '../styles/App.module.scss';
import ScrollToTop from './ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Spin from './Spin';
import { fetchNews } from '../redux/actions';
import About from './About';

const App = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsReducer.news);
  const isLoading = useSelector((state) => state.appReducer.loading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return (
    <ScrollToTop>
      <div className={cl.wrapper}>
        <Header news={news} />
        {isLoading ? (
          <Spin />
        ) : (
          <>
            <Routes>
              <Route path='*' element={<Home news={news} />} />
              <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </ScrollToTop>
  );
};

export default App;
