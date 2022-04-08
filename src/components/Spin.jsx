import { useSelector } from 'react-redux';
import cl from '../styles/Spin.module.scss';

const Spin = (props) => {
  return (
    <section className={cl.container}>
      <div className={cl.block}>
        <div className={cl.item}>
          <span className={cl.h6}></span>
          <span className={cl.h3}></span>
        </div>
      </div>

      <div className={cl.block}>
        <div className={cl.item}>
          <span className={cl.h1}></span>
          <span className={cl.h4}></span>
        </div>
      </div>

      <div className={cl.block}>
        <div className={cl.item}>
          <span className={cl.h5}></span>
          <span className={cl.h2}></span>
        </div>
      </div>
    </section>
  );
};

export default Spin;
