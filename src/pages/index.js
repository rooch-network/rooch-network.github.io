import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepagePartners from '@site/src/components/HomepagePartners';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const en = siteConfig.baseUrl === "/";

  // let cJ = localStorage.getItem("sysLan");
  // console.log(cJ);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>
          <img src={useBaseUrl('/diagram/rooch-root-branch.svg')} className={styles.heroImage} />
        </p>
        <p className="hero__subtitle">{en ? siteConfig.tagline : "以太坊上具有多链结算能力的模块化 Layer2 网络，由 Move 语言支持"}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            {en ? "Start learning" : "开始学习"} ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepagePartners />
      </main>
    </Layout>
  );
}


