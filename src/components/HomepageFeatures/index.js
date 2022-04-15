import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: '沉侵式',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                提供自动提示与补全、语法高亮、语句美化、语法校验和逻辑检查、调试预览结果、
                字段级血缘分析等功能
            </>
        ),
    },
  {
    title: '易用性',
    Svg: require('@site/static/img/ease_of_use.svg').default,
    description: (
      <>
          多种执行模无感知切换，自动化托管实时任务及恢复点，自定义各种配置
      </>
    ),
  },
    {
          title: '一站式',
          Svg: require('@site/static/img/one_stop.svg').default,
          description: (
              <>
                  提供从 FlinkSQL 开发调试到作业上线下线的运维监控及 OLAP 的即席查询，使数仓建设及数据治理一体化。
              </>
          ),
      },
  {
    title: '易部署',
    Svg: require('@site/static/img/easy_of_deploy.svg').default,
    description: (
      <>
         不绑定任何中间件，Spring Boot 应用快速部署
      </>
    ),
  },
  {
    title: '易扩展',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SPI 插件化机制支持用户自定义扩展新功能，如数据源、报警方式、自定义语法等
      </>
    ),
  },
    {
        title: '无侵入',
        Svg: require('@site/static/img/no_invasion.svg').default,
        description: (
            <>
               不需要在任何 Flink 集群修改源码或添加插件，无感知连接和监控 Flink 集群
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
