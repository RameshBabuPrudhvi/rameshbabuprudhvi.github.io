import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
       <span style={{ color: 'var(--ifm-color-primary)' }}>Hello! I am </span>{siteConfig.title}</h1>
       <p className="hero__subtitle"> <span>Being lazy by nature, I tend to automate everything which I need to do manually. This thinking keeps me motivated to learn new testing tools, new technologies and best practices. I keep challenging myself to push my limits and move out of my comfort zone and upgrade my skills.</span>
                                             <br/>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Selcukes Java
          </Link>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <div className="container">
        <img src={useBaseUrl("img/programmer.svg")}/>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
