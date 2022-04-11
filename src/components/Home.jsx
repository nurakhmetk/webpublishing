import React from 'react';

import cl from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={cl.home}>
      <div className={cl.container}>
        <div className={cl.body}>
          <h1 className={cl.title}>Welcome to Webpublishing</h1>
          <h2 className={cl.subtitle}>
            Go to News section if you want to read the news.{' '}
          </h2>
          <h3 className={cl.h3}>Lorem ipsum dolor sit amet.</h3>
          <div className={cl.imagecontainer}>
            <img
              src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FlLK'
              alt='our team'
              className={cl.image}
            />
            <img
              src='https://www.mvpskill.com/wp-content/uploads/2018/02/TEAMS.png'
              alt='our team'
              className={cl.image}
            />
          </div>

          <h2 className={cl.subtitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            deleniti doloremque quas?
          </h2>
          <p className={cl.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a
            sequi sint. Sapiente maxime iure tempora veritatis sequi? Amet
            necessitatibus sed voluptatibus, molestiae laborum animi quisquam
            officiis aut neque obcaecati aspernatur impedit architecto incidunt
            quas. Ipsam, ea sunt. Vel ipsam saepe dolores error! Voluptates rem
          </p>
          <br />
          <p className={cl.text}>
            Quidem nemo voluptatum itaque officia quam. Pariatur, officiis
            voluptates vero explicabo quas quisquam consequuntur sed accusantium
            expedita natus! Odit iure voluptas accusamus optio cupiditate
            ducimus numquam facilis excepturi doloremque mollitia aperiam ab
            itaque, enim molestiae deserunt! Pariatur nihil nostrum voluptatem
            est reprehenderit, expedita iusto eligendi sequi quaerat corporis
            veniam earum, minus ratione quo aut odio?
          </p>
          <br />
          <p className={cl.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            vitae. Officiis ducimus sapiente incidunt in.
          </p>
          <br />
          <p className={cl.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            incidunt praesentium vel, placeat possimus blanditiis ratione dolore
            quos tenetur, labore doloribus consectetur eligendi architecto
            recusandae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
