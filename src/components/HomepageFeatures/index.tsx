import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hosting',
    Svg: require('@site/static/img/hosting.svg').default,
    description: (
      <>
        State of the art hosting and operational capabilities; storage and processing services for your organization
      </>
    ),
  },
  {
    title: 'Infrastructure',
    Svg: require('@site/static/img/infrastructure.svg').default,
    description: (
      <>
        Development and deployment of layer 1 or layer 2 technologies; off-the-shelf components or custom to your configuration
      </>
    ),
  },
  {
    title: 'Vendor Management',
    Svg: require('@site/static/img/vendor-management.svg').default,
    description: (
      <>
        Integrations and network services, configuration management, and tactical support services
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
