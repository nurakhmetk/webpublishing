import postsApi from '../apis/postsApi';
import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  FETCH_AND_SORT_NEWS,
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

      dispatch({
        type: FETCH_AND_SORT_NEWS,
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
