"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9445],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(n),m=i,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8241:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={sidebar_position:5,id:"overview",title:"Dinky \u6982\u89c8"},p=void 0,c={unversionedId:"overview",id:"version-0.6/overview",title:"Dinky \u6982\u89c8",description:"\u6982\u8ff0",source:"@site/versioned_docs/version-0.6/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/versioned_docs/version-0.6/overview.md",tags:[],version:"0.6",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"overview",title:"Dinky \u6982\u89c8"},sidebar:"version-0.6/tutorialSidebar",previous:{title:"\u90e8\u7f72",permalink:"/docs/build_deploy/deploy"},next:{title:"\u6982\u8ff0",permalink:"/docs/operation_guide/summary"}},s={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u4e0a\u4e0b\u6e38\u7cfb\u7edf",id:"\u652f\u6301\u4e0a\u4e0b\u6e38\u7cfb\u7edf",level:2},{value:"FlinkSQL Connector",id:"flinksql-connector",level:3},{value:"\u5176\u4ed6\u6570\u636e\u6e90",id:"\u5176\u4ed6\u6570\u636e\u6e90",level:3},{value:"\u7ba1\u7406\u63a7\u5236\u53f0\u4ecb\u7ecd",id:"\u7ba1\u7406\u63a7\u5236\u53f0\u4ecb\u7ecd",level:2},{value:"\u6570\u636e\u5f00\u53d1",id:"\u6570\u636e\u5f00\u53d1",level:3},{value:"\u8fd0\u7ef4\u4e2d\u5fc3",id:"\u8fd0\u7ef4\u4e2d\u5fc3",level:3},{value:"\u6ce8\u518c\u4e2d\u5fc3",id:"\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"\u7cfb\u7edf\u8bbe\u7f6e",id:"\u7cfb\u7edf\u8bbe\u7f6e",level:3}],k={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"Dinky \u4f5c\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/flink"},"Apache Flink")," \u7684 FlinkSQL \u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\uff0c\u5177\u6709\u4ee5\u4e0b\u6838\u5fc3\u7279\u70b9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301 Flink \u539f\u751f\u8bed\u6cd5\u3001\u8fde\u63a5\u5668\u3001UDF \u7b49\uff1a")," \u51e0\u4e4e\u96f6\u6210\u672c\u5c06 Flink \u4f5c\u4e1a\u8fc1\u79fb\u81f3 Dinky\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u589e\u5f3a FlinkSQL \u8bed\u6cd5\uff1a")," \u8868\u503c\u805a\u5408\u51fd\u6570\u3001\u5168\u5c40\u53d8\u91cf\u3001CDC\u591a\u6e90\u5408\u5e76\u3001\u6267\u884c\u73af\u5883\u3001\u8bed\u53e5\u5408\u5e76\u3001\u5171\u4eab\u4f1a\u8bdd\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301 Flink \u591a\u7248\u672c\uff1a")," \u652f\u6301\u4f5c\u4e3a\u591a\u7248\u672c FlinkSQL Server \u7684\u80fd\u529b\u4ee5\u53ca OpenApi\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301\u5916\u90e8\u6570\u636e\u6e90\u7684 DB SQL \u64cd\u4f5c\uff1a")," \u5982 ClickHouse\u3001Doris\u3001Hive\u3001Mysql\u3001Oracle\u3001Phoenix\u3001PostgreSql\u3001SqlServer \u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301\u5b9e\u65f6\u4efb\u52a1\u8fd0\u7ef4\uff1a")," \u4f5c\u4e1a\u4e0a\u7ebf\u4e0b\u7ebf\u3001\u4f5c\u4e1a\u4fe1\u606f\u3001\u96c6\u7fa4\u4fe1\u606f\u3001\u4f5c\u4e1a\u5feb\u7167\u3001\u5f02\u5e38\u4fe1\u606f\u3001\u4f5c\u4e1a\u65e5\u5fd7\u3001\u6570\u636e\u5730\u56fe\u3001\u5373\u5e2d\u67e5\u8be2\u3001\u5386\u53f2\u7248\u672c\u3001\u62a5\u8b66\u8bb0\u5f55\u7b49\u3002")),(0,a.kt)("h2",{id:"\u652f\u6301\u4e0a\u4e0b\u6e38\u7cfb\u7edf"},"\u652f\u6301\u4e0a\u4e0b\u6e38\u7cfb\u7edf"),(0,a.kt)("h3",{id:"flinksql-connector"},"FlinkSQL Connector"),(0,a.kt)("p",null,"Flink SQL \u652f\u6301\u4e30\u5bcc\u7684 Connector\uff0c\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u652f\u6301\u652f\u6301 Flink 1.11\u3001Flink 1.12\u3001Flink 1.13 \u548c Flink 1.14 \u56db\u4e2a\u7248\u672c\uff0c\u5bf9\u5e94\u7684\u7248\u672c\u652f\u6301\u6240\u6709\u5f00\u6e90\u7684\u4e0a\u4e0b\u6e38\u5b58\u50a8\u8be6\u89c1\u5177\u4f53Connector\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1Flink\u5f00\u6e90\u793e\u533a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.11/dev/table/connectors/"},"Flink1.11")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/"},"Flink1.12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/overview/"},"Flink1.13")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/table/overview/"},"Flink1.14"))),(0,a.kt)("p",null,"\u53e6\u5916\u975e Flink \u5b98\u7f51\u652f\u6301\u7684 Connector \u8be6\u89c1 github\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ververica/flink-cdc-connectors/releases/"},"Flink-CDC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/releases"},"Hudi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/iceberg/releases"},"Iceberg")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-doris-flink-connector/tags"},"Doris")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/StarRocks/flink-connector-starrocks/releases"},"Starrocks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/itinycheng/flink-connector-clickhouse"},"ClickHouse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/streamnative/pulsar-flink/releases"},"Pulsar"))),(0,a.kt)("h3",{id:"\u5176\u4ed6\u6570\u636e\u6e90"},"\u5176\u4ed6\u6570\u636e\u6e90"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u652f\u6301\u8be6\u89c1",(0,a.kt)("a",{parentName:"p",href:"../extend/function_expansion/datasource"},"\u6269\u5c55\u6570\u636e\u6e90")),(0,a.kt)("h2",{id:"\u7ba1\u7406\u63a7\u5236\u53f0\u4ecb\u7ecd"},"\u7ba1\u7406\u63a7\u5236\u53f0\u4ecb\u7ecd"),(0,a.kt)("p",null,"Dinky \u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u5f00\u53d1\u6a21\u5757\u5305\u62ec ",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5f00\u53d1"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u8fd0\u7ef4\u4e2d\u5fc3"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u4e2d\u5fc3")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u8bbe\u7f6e")," \u56db\u5927\u6a21\u5757\u3002"),(0,a.kt)("h3",{id:"\u6570\u636e\u5f00\u53d1"},"\u6570\u636e\u5f00\u53d1"),(0,a.kt)("p",null,"\u6570\u636e\u5f00\u53d1\u5305\u62ec\u4f5c\u4e1a\u7ba1\u7406\u3001\u4f5c\u4e1a\u914d\u7f6e\u548c\u8fd0\u7ef4\u7ba1\u7406\u7b49"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/overview/data_ops.png",alt:"data_ops"})),(0,a.kt)("h3",{id:"\u8fd0\u7ef4\u4e2d\u5fc3"},"\u8fd0\u7ef4\u4e2d\u5fc3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/overview/devops_center.png",alt:"devops_center"})),(0,a.kt)("h3",{id:"\u6ce8\u518c\u4e2d\u5fc3"},"\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u5305\u62ec\u96c6\u7fa4\u7ba1\u7406\u3001Jar\u7ba1\u7406\u3001\u6570\u636e\u6e90\u7ba1\u7406\u3001\u62a5\u8b66\u7ba1\u7406\u548c\u6587\u6863\u7ba1\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/overview/register_center.png",alt:"register_center"})),(0,a.kt)("h3",{id:"\u7cfb\u7edf\u8bbe\u7f6e"},"\u7cfb\u7edf\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u7cfb\u7edf\u8bbe\u7f6e\u5305\u62ec\u7528\u6237\u7ba1\u7406\u548cFlink\u8bbe\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/overview/system_settings.png",alt:"system_settings"})))}m.isMDXComponent=!0}}]);