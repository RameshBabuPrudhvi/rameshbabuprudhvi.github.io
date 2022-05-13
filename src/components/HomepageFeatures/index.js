import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/icon-open_source.svg').default,
    description: (
      <>
        As an open source company, we're passionately engaged in numerous projects, initiatives and standards where we represent the needs and requirements of our many customers and partners
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/icon_easy_to_use.svg').default,
    description: (
      <>
        All features that we provide- use the same syntax. Once you learn how to write tests for the web, you can start immediately writing for mobile, desktop, or REST
      </>
    ),
  },
  {
    title: 'Test Everything',
    Svg: require('@site/static/img/icon_android_chrome.svg').default,
    description: (
      <>
        Web, including responsive, iOS, Android, Desktop, and REST services.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
