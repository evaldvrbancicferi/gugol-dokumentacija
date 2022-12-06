import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Preprosta uporaba',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GUGOL je zelo uporabniško prijazen, saj ima enostaven uporabniški vmesnik ter ukaze, ki si jih je lahko zapomniti.
      </>
    ),
  },
  {
    title: 'Prostoročno upravljanje',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Omogoča upravljanje računalnika brez miške in/ali tipkovnice.
      </>
    ),
  },
  {
    title: 'Slovenski jezik',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Narejen z podporo za slovenski jezik.
      </>
    ),
  },
];
// <Svg className={styles.featureSvg} role="img" />
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
