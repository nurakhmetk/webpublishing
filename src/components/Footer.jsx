import React from 'react';
import cl from '../styles/Footer.module.scss';
import email from '../image/email.png';
import facebook from '../image/facebook.png';
import twitter from '../image/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const firstList = [
    { value: 'HOME', to: '/' },
    { value: 'ABOUT', to: '/about' },
    { value: 'SERVICES', to: '/services' },
    { value: 'PROJECTS', to: '/projects' },
    { value: 'CONTACTS', to: '/contacts' },
  ];

  const secondList = [
    { value: 'FAQ', to: '/faq' },
    { value: 'TERMS', to: '/terms' },
    { value: 'CAREER', to: '/career' },
  ];

  const thirdList = [
    { value: 'BLOG', to: '/blog' },
    { value: 'PARTNERS', to: '/partners' },
    { value: 'NEWS', to: '/' },
  ];
  return (
    <footer className={cl.footer} id='footer'>
      <div className={cl.container}>
        <div className={cl.company}>
          <h4 className={cl.title}>Company</h4>
          <p className={cl.logo}>
            WEB|PUBLISHI<span>N</span>G
          </p>
          <p className={cl.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aspernatur quos est assumenda, quidem earum delectus modi dolorem,
            officia nulla itaque quas fugit.
          </p>
        </div>
        <div className={cl.links}>
          <h4 className={cl.title}>Links</h4>
          <div className={cl.linksBody}>
            <ul>
              {firstList.map((firstList) => (
                <li key={firstList.value}>
                  <Link className={cl.linkItem} to={firstList.to}>
                    {firstList.value}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {secondList.map((secondList) => (
                <li key={secondList.value}>
                  <Link className={cl.linkItem} to={secondList.to}>
                    {secondList.value}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {thirdList.map((thirdList) => (
                <li key={thirdList.value}>
                  <Link className={cl.linkItem} to={thirdList.to}>
                    {thirdList.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cl.contact}>
          <h4 className={cl.title}>CONTACTS</h4>
          <div className={cl.info}>
            <p className={cl.text}>
              Namesti Miru 18 <br /> Praha 200 Vinohrady 12800 <br /> Prague
              City, Czech Republic
            </p>
            <p className={cl.text}>+420 777 111 222</p>
            <p className={cl.text}>web@publish.com</p>
          </div>
        </div>
        <div className={cl.socials}>
          <h4 className={cl.title}>Socials</h4>
          <div className={cl.socialBody}>
            <Link to=''>
              <img src={email} alt='' />
            </Link>
            <Link to=''>
              <img src={facebook} alt='' />
            </Link>
            <Link to=''>
              <img src={twitter} alt='' />
            </Link>
          </div>
        </div>
      </div>
      <div className={cl.copyright}>
        <div className={cl.copyContainer}>
          <p className={cl.copyText}>
            This site was created for educational material. It is not Link
            commercial application. All coincidences are coincidental. Designed
            and Made by Nurakhmet Kairat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
