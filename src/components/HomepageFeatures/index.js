import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '易用性',
    Svg: require('@site/static/img/ease_of_use.svg').default,
    description: (
      <>
          用户只需要专注 FlinkSQL 的口径书写，并且可以实时进行检查与调试，在任务提交的过程则是快速的自动化托管，以实现一个 FlinkSQL 语句可以在所有的执行模式与外部集群上随意切换
      </>
    ),
  },
  {
    title: '易部署',
    Svg: require('@site/static/img/easy_of_deploy.svg').default,
    description: (
      <>
          用户只需要专注 FlinkSQL 的口径书写，并且可以实时进行检查与调试，在任务提交的过程则是快速的自动化托管，以实现一个 FlinkSQL 语句可以在所有的执行模式与外部集群上随意切换
      </>
    ),
  },
  {
    title: '易扩展',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
    {
        title: '沉侵式',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                提供了自动提示与补全、语法高亮、语句美化、语法校验和逻辑检查、调试预览结果、字段级血缘分析等专业的功能，使 FlinkSQL 的开发如同 SQL 开发一样舒适与简单
            </>
        ),
    },
    {
        title: '一站式',
        Svg: require('@site/static/img/one_stop.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: '无侵入',
        Svg: require('@site/static/img/no_invasion.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
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
        <h1 style={{textAlign:"center"}}> Dinky  Core Features </h1><br/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
