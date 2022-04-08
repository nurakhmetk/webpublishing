import postsApi from '../apis/postsApi';
import {
  FETCH_GENERAL_NEWS,
  FETCH_TECH_NEWS,
  FETCH_SPORTS_NEWS,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  FETCH_NEWS,
} from './types';

export const fetchNews = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const generalNewsResponse = await postsApi.get(
        '/top-headlines/category/general/us.json'
      );
      const techNewsResponse = await postsApi.get(
        '/top-headlines/category/technology/us.json'
      );
      const sportsNewsResponse = await postsApi.get(
        '/top-headlines/category/sports/us.json'
      );

      const generalNewsData = generalNewsResponse.data.articles;
      const techNewsData = techNewsResponse.data.articles;
      const sportsNewsData = sportsNewsResponse.data.articles;

      // dispatch({
      //   type: FETCH_GENERAL_NEWS,
      //   data: generalNewsData,
      // });

      // dispatch({
      //   type: FETCH_TECH_NEWS,
      //   data: techNewsData,
      // });

      // dispatch({
      //   type: FETCH_SPORTS_NEWS,
      //   data: sportsNewsData,
      // });

      dispatch({
        type: FETCH_NEWS,
        data: [
          generalNewsData.slice(),
          techNewsData.slice(),
          sportsNewsData.slice(),
        ],
      });

      dispatch(loaderOff());
    } catch (error) {
      throw error;
    }
  };
};

export const loaderOn = () => {
  return {
    type: LOADER_DISPLAY_ON,
  };
};

export const loaderOff = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  };
};
