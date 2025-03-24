import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Be Your Own Bank',
    Svg: require('@site/static/img/home-bitcoin.svg').default,
    description: (
      <>
        Take full control of your Bitcoin with self-custody—secure, independent, and censorship-resistant.
      </>
    ),
  },
  {
    title: 'Run Your Own Node',
    Svg: require('@site/static/img/home-node.svg').default,
    description: (
      <>
        Secure your sovereignty by verifying your own transactions, enhancing privacy, and taking full control of your Bitcoin custody.
      </>
    ),
  },
  {
    title: 'Secure Your Laptop',
    Svg: require('@site/static/img/home-laptop.svg').default,
    description: (
      <>
        Protect your data, enhance privacy, and defend against threats with strong security practices.
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
        <Heading as="h3">{title}</Heading>
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
