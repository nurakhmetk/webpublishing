import React from 'react';
import cl from './Footer.module.scss';
import email from '../../image/email.png';
import facebook from '../../image/facebook.png';
import twitter from '../../image/twitter.png';

function Footer() {
  const firstList = [
    { value: 'HOME', href: '' },
    { value: 'ABOUT', href: '' },
    { value: 'SERVICES', href: '' },
    { value: 'PROJECTS', href: '' },
    { value: 'CONTACT US', href: '' },
  ];

  const secondList = [
    { value: 'FAQ', href: '' },
    { value: 'TERMS', href: '' },
    { value: 'CAREERS', href: '' },
  ];

  const thirdList = [
    { value: 'BLOG', href: '' },
    { value: 'PARTNER', href: '' },
    { value: 'NEWS', href: '' },
  ];
  return (
    <footer className={cl.footer}>
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
                  <a className={cl.linkItem} href={firstList.href}>
                    {firstList.value}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              {secondList.map((secondList) => (
                <li key={secondList.value}>
                  <a className={cl.linkItem} href={secondList.href}>
                    {secondList.value}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              {thirdList.map((thirdList) => (
                <li key={thirdList.value}>
                  <a className={cl.linkItem} href={thirdList.href}>
                    {thirdList.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cl.contact}>
          <h4 className={cl.title}>CONTACT US</h4>
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
            <a href=''>
              <img src={email} alt='' />
            </a>
            <a href=''>
              <img src={facebook} alt='' />
            </a>
            <a href=''>
              <img src={twitter} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className={cl.copyright}>
        <p className={cl.copyText}>
          This site was created for educational material. It is not a commercial
          application. All coincidences are coincidental. Designed and Made by
          Nurakhmet Kairat
        </p>
      </div>
    </footer>
  );
}

export default Footer;
