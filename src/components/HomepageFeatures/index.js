import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const FeatureList = [
  {
    title: 'Why Rooch',
    titleZH: '为什么需要 Rooch',
    icon: 'fas fa-angle-double-right',
    link: './docs/why-rooch',
    description: (
      <>
        The multi-chain ecosystem needs an intermediate layer to connect the blockchains and web3 applications.
      </>
    ),
    descriptionZH: (
      <>
        多链生态系统需要一个中间层来连接区块链和web3应用程序。
      </>
    ),
  },
  {
    title: 'What is Rooch',
    titleZH: '什么是 Rooch',
    icon: 'fas fa-code',
    link: './docs/what-is-rooch',
    description: (
      <>
      Rooch is a Move Execution layer that connects Multi-Chains to Web3. It provides scalability for public chains, Move execution environment and settlement protocol for Web3 applications.
      </>
    ),
    descriptionZH: (
      <>
        Rooch是一个移动执行层，连接多链到Web3。它为公共链提供了可伸缩性，为Web3应用程序提供了Move执行环境和结算协议。
      </>
    ),
  },
  {
    title: 'How it works',
    titleZH: '技术架构',
    icon: 'fas fa-layer-group',
    link: './docs/technology',
    description: (
      <>
        Learn how Rooch implements multi-chain settlement, how to ensure decentralization and security, how to support applications on P2P networks, and more.
      </>
    ),
    descriptionZH: (
      <>
        了解Rooch如何实现多链结算，如何确保去中心化和安全性，如何支持P2P网络上的应用程序等等。
      </>
    ),
  },
];


function Feature({icon, link, title, titleZH, description, descriptionZH}, local) {

  const {siteConfig} = useDocusaurusContext();

  const en = siteConfig.baseUrl === "/";

  return (
    <div className={clsx('col', 'col--4', styles.featureDiv)}>
      <div className={clsx('padding-horiz--md')}>
        <h3><span className={clsx(icon, styles.featureIcon)}></span>{' '}{en ? title : titleZH}</h3>
        <p>{en ? description : descriptionZH}</p>
      </div>
      <div className={clsx('padding-horiz--md', styles.learnMore)}>
        <a href={link} className={clsx(styles.learnMoreLink)}>
          <span>{
            en ? "Learn more" : "了解更多"} <i class="fas fa-angle-double-right"></i></span> 
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
