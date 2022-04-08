import React from 'react';
import cl from '../styles/Aside.module.scss';
import adv from '../image/advert/adv.jpg';

function Aside() {
  return (
    <aside className={cl.aside}>
      <div className={cl.body}>
        <img
          src='https://www.cba-va.org/sites/default/files/styles/medium/public/Your%20Ad%20Here.jpg?itok=dtWoB5st'
          alt=''
          className={cl.adv}
          draggable='false'
        />
        <h3 className={cl.title}>It's Advertising</h3>
        <p className={cl.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint porro
          voluptates optio.
        </p>
      </div>
    </aside>
  );
}

export default Aside;
