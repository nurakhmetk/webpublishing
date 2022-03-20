import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
import cl from './Main.module.scss';
import Aside from './Aside/Aside';

function Main() {
  const [generalData, setGeneralData] = useState(null);
  const [politicsData, setPoliticsData] = useState(null);
  const [sportData, setSportData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const generalResponse = await axios.get(
          'https://newsapi.org/v2/everything?' +
            'q=general&' +
            'language=cs&' +
            'pageSize=2&' +
            'apiKey=5455f33023184410a36bf484a70730c4'
        );
        const politicsResponse = await axios.get(
          'https://newsapi.org/v2/top-headlines?' +
            'category=politics&' +
            'country=cz&' +
            'pageSize=2&' +
            'apiKey=5455f33023184410a36bf484a70730c4'
        );
        const sportResponse = await axios.get(
          'https://newsapi.org/v2/top-headlines?' +
            'category=sports&' +
            'country=cz&' +
            'pageSize=2&' +
            'apiKey=5455f33023184410a36bf484a70730c4'
        );
        setGeneralData(generalResponse.data.articles);
        setPoliticsData(politicsResponse.data.articles);
        setSportData(sportResponse.data.articles);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  let copyArray = [];
  let generalArray = [];
  let politicsArray = [];
  let sportArray = [];

  // Promise.all(generalData, politicsData, sportData)
  //   .then(console.log('All Data Retrieved'))
  //   .catch('Waiting All Data');
  if (generalData !== null && politicsData !== null && sportData !== null) {
    (function takeGeneralData(generalData) {
      if (generalData !== null) {
        copyArray = generalData.slice();
        copyArray.forEach((el) => {
          generalArray.push({
            image: el.urlToImage,
            title: el.title,
            desc: el.description,
            author: el.author,
          });
        });
      } else {
        return console.log('Array is empty');
      }
    })(generalData);

    (function takePoliticsData(politicsData) {
      if (politicsData !== null) {
        copyArray = politicsData.slice();
        copyArray.forEach((el) => {
          politicsArray.push({
            image: el.urlToImage,
            title: el.title,
            desc: el.description,
            author: el.author,
          });
        });
      } else {
        return console.log('Array is empty');
      }
    })(politicsData);

    (function takeSportData(sportData) {
      if (sportData !== null) {
        copyArray = sportData.slice();
        copyArray.forEach((el) => {
          sportArray.push({
            image: el.urlToImage,
            title: el.title,
            desc: el.description,
            author: el.author,
          });
        });
      } else {
        return console.log('Array is empty');
      }
    })(sportData);
  }

  console.log('General', generalArray);
  console.log('Politics', politicsArray);
  console.log('Sport', sportArray);

  let sectionsList = [
    {
      sectionClsName: cl.mainNews,
      linkValue: 'General',
      href: '',
    },
    {
      sectionClsName: cl.politics,
      linkValue: 'Politics',
      href: '',
    },
    {
      sectionClsName: cl.sport,
      linkValue: 'Sport',
      href: '',
    },
  ];

  return (
    <main className={cl.main}>
      <div className={cl.container}>
        <div className={cl.content}>
          {sectionsList.map((sectionsList) => (
            <section
              className={sectionsList.sectionClsName}
              key={sectionsList.linkValue}
            >
              <a href={sectionsList.href} className={cl.categoryText}>
                {sectionsList.linkValue}
              </a>
              <div className={cl.gridContainer}>
                <Posts />
                <Posts />
              </div>
            </section>
          ))}
        </div>
        <Aside />
      </div>
    </main>
  );
}

export default Main;
