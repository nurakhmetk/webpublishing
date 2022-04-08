import { NEWS_CATEGORIES } from '../types';
import uniqid from 'uniqid';

const initalState = {
  categories: [
    {
      name: 'General',
      id: 1,
      link: 'generalnews',
      news: [],
    },
    {
      name: 'Technologies',
      id: 2,
      link: 'technews',
      news: [],
    },
    {
      name: 'Sports',
      id: 3,
      link: 'sportsnews',
      news: [],
    },
  ],
};

export const newsCategoriesReducer = (state = initalState, action) => {
  console.log('newsCategoriesReducer >>>', action);
  switch (action.type) {
    case NEWS_CATEGORIES:
      const ArrayOfObjects = action.data.map((item) => {
        const news = item.map((res) => {
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
            text: res.content,
            publishDate,
            date,
            time,
            link,
            id,
          };
        });
        return news;
      });

      const arrFromObj = [...Object.values(state.categories)];

      const structuredData = arrFromObj.map((item, index) => {
        return {
          name: item.name,
          id: item.id,
          link: item.link,
          news: ArrayOfObjects[index],
        };
      });

      return { ...state, categories: structuredData };
    default:
      return state;
  }
};
