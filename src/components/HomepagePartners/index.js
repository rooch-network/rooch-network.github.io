import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
    descriptionZH: (
      <>
        MoveFunsDAO 是一个针对 Move 开发者的 DAO，其主要目标是团结开发者社区，建立一个跨多个 Move 链的生态系统。
      </>
    ),
  },
  {
    title: 'https://www.movebit.xyz/images/logo-movebit.png',
    icon: '',
    link: 'https://movebit.xyz',
    description: (
      <>
        Founded by experts and professors in security, MoveBit is a blockchain security company focused on Move ecosystem security.<br/><br/>
      </>
    ),
    descriptionZH: (
      <>
        MoveBit由安全专家教授创立，是一家专注于Move生态安全的区块链安全公司。<br/><br/>
      </>
    ),
  },
  {
    title: 'https://www.zkmove.net/assets/img/logo.jpg',
    icon: '',
    link: 'https://www.zkmove.net',
    description: (
      <>
        A zero-knowledge Move language runtime environment. Safe, Efficient, and Privacy-protected.<br/><br/>
      </>
    ),
    descriptionZH: (
      <>
        一个零知识的 Move 语言运行时环境。安全、高效、隐私保护。<br/><br/>
      </>
    ),
  },
];


function Feature({ icon, title, link, description, descriptionZH }) {
  const { siteConfig } = useDocusaurusContext();

  const en = siteConfig.baseUrl === "/";

  return (
    <div className={clsx('col', 'col--4', styles.featureDiv)}>
      <div className={styles.cardDiv}>
        <a href={link}>
          <div className={styles.cardHeadDiv}>
            {
              icon != "" ? <img src={icon} className={styles.icon} /> : <></>
            }
            {
              title.indexOf("http") === 0 ?
                <img src={title} height="110" /> :
                <h3 className={styles.cardTitle}>{title}</h3>
            }
          </div>
        </a>
        <p>{en ? description : descriptionZH}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { siteConfig } = useDocusaurusContext();

  const en = siteConfig.baseUrl === "/";

  return (
    <>
      <h1 className={styles.title}>{en ? "Partnership" : "合作伙伴"}</h1>
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
