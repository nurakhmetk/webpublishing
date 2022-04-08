import { SORT_NEWS } from '../types';
import uniqid from 'uniqid';

const initalState = {
  newsByCategory: [
    {
      name: 'General',
      id: 1,
      link: 'generalnews',
      allNews: [],
      twoNews: [],
    },
    {
      name: 'Technologies',
      id: 2,
      link: 'technews',
      allNews: [],
      twoNews: [],
    },
    {
      name: 'Sports',
      id: 3,
      link: 'sportsnews',
      allNews: [],
      twoNews: [],
    },
  ],
};

export const newsReducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case SORT_NEWS:
      const ArrayOfObjects = action.data.map((item) => {
        const allNews = item.map((res) => {
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
        return allNews;
      });

      const arrFromObj = [...Object.values(state.newsByCategory ?? {})];

      const twoNews = ArrayOfObjects.map((item) => item.slice(0, 2));

      const structuredData = arrFromObj.map((item, index) => {
        return {
          name: item.name,
          id: item.id,
          link: item.link,
          allNews: ArrayOfObjects[index],
          twoNews: twoNews[index],
        };
      });

      return { ...state, newsByCategory: structuredData };
    default:
      return state;
  }
};
