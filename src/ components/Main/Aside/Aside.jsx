import React from 'react';
import cl from './Aside.module.scss';
import adv from '../../../image/advert/adv.jpg';

function Aside() {
  return (
    <aside className={cl.aside}>
      <div className={cl.body}>
        <img src={adv} alt='' className={cl.adv} draggable='false' />
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
