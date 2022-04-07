import {
  FETCH_GENERAL_NEWS,
  FETCH_TECH_NEWS,
  FETCH_SPORTS_NEWS,
} from '../types';

import uniqid from 'uniqid';

const initialState = {
  news: {},
};

const setNewData = (action) => {
  const structuredData = action.data.map((res) => {
    const id = uniqid();
    const link =
      res.title
        .slice(1, 15)
        .replace(/\s/g, '')
        .replace(/[^a-z]/g, '') +
      '-' +
      res.publishedAt.replace(/:/g, '').replace(/[^0-9]/g, '/');
    const publishDate = res.publishedAt
      .replace('Z', '')
      .replace('T', '')
      .split('-')
      .slice(0, 10);

    const date =
      publishDate[2][0] +
      publishDate[2][1] +
      '/' +
      publishDate[1] +
      '/' +
      publishDate[0];

    const time = publishDate[2].slice(2, 10);

    return {
      author: res.author,
      title: res.title,
      description: res.description,
      url: res.url,
      imageUrl: res.urlToImage,
      publishDate,
      date,
      time,
      text: res.content,
      link: link,
      id,
    };
  });
  return structuredData;
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENERAL_NEWS:
      const generalNews = setNewData(action);
      return {
        ...state,
        news: { ...state.news, generalNews },
      };
    case FETCH_TECH_NEWS:
      const techNews = setNewData(action);
      return {
        ...state,
        news: { ...state.news, techNews },
      };
    case FETCH_SPORTS_NEWS:
      const sportsNews = setNewData(action);
      return {
        ...state,
        news: { ...state.news, sportsNews },
      };

    default:
      return state;
  }
};
