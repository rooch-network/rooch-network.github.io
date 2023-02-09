import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const PartnersList = [
  {
    title: 'https://user-images.githubusercontent.com/99104408/217434466-c5670401-0094-4386-b0de-699e25f31650.png',
    icon: '',
    link: 'https://github.com/movefuns',
    description: (
      <>
        MoveFunsDAO has gathered more than 250 Move developers for the purpose of collective action and learning within the broader Move ecosystem, including Aptos, Starcoin, and Sui.
      </>
    ),
  },
];


function Feature({ icon, title, link, description }) {
  return (
    <div className={clsx('col', 'col--4', styles.featureDiv)}>
      <div className={styles.cardDiv}>
      <a href={link}>
        <div className={styles.cardHeadDiv}>
          {
            icon != "" ? <img src='https://user-images.githubusercontent.com/99104408/217434466-c5670401-0094-4386-b0de-699e25f31650.png' className={styles.icon} />:<></>
          }
          {
            title.indexOf("http") === 0 ?
            <img src='https://user-images.githubusercontent.com/99104408/217434466-c5670401-0094-4386-b0de-699e25f31650.png' />:
            <h3 className={styles.cardTitle}>{title}</h3>
          }
        </div>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <h1 className={styles.title}>Partnership</h1>
      <section className={styles.partners}>

        <div className="container">
          <div className="row">
            {PartnersList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
