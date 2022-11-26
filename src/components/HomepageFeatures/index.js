import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Why Rooch',
    icon: 'fas fa-angle-double-right',
    link: './docs/why-rooch',
    description: (
      <>
        The multi-chain ecosystem needs an intermediate layer to connect the blockchains and web3 applications.
      </>
    ),
  },
  {
    title: 'What is Rooch',
    icon: 'fas fa-code',
    link: './docs/what-is-rooch',
    description: (
      <>
      Rooch is a Move Execution layer that connects Multi-Chains to Web3. It provides scalability for public chains, Move execution environment and settlement protocol for Web3 applications.
      </>
    ),
  },
  {
    title: 'How it works',
    icon: 'fas fa-layer-group',
    link: './docs/technology',
    description: (
      <>
        Learn how Rooch implements multi-chain settlement, how to ensures decentralization and security, how to supports applications on P2P networks, and more.
      </>
    ),
  },
];


function Feature({icon, link, title, description}) {
  return (
    <div className={clsx('col', 'col--4', styles.featureDiv)}>
      <div className={clsx('padding-horiz--md')}>
        <h3><span className={clsx(icon, styles.featureIcon)}></span>{' '}{title}</h3>
        <p>{description}</p>
      </div>
      <div className={clsx('padding-horiz--md', styles.learnMore)}>
        <a href={link} className={clsx(styles.learnMoreLink)}>
          <span>Learn more <i class="fas fa-angle-double-right"></i></span> 
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
