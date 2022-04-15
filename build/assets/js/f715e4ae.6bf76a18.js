"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4705],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(m,u(u({ref:t},d),{},{components:n})):r.createElement(m,u({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],a={sidebar_position:1,id:"function_introduce",title:"\u529f\u80fd\u4ecb\u7ecd"},c=void 0,l={unversionedId:"administrator_guide/studio/development_control/function_introduce",id:"version-0.6.0/administrator_guide/studio/development_control/function_introduce",title:"\u529f\u80fd\u4ecb\u7ecd",description:"Data Studio \u63d0\u4f9b\u4e86 Apache Flink \u53ca\u5176\u4ed6 DBSQL \u7684\u5f00\u53d1\u3001\u63d0\u4ea4\u548c\u8fd0\u7ef4\u80fd\u529b\u3002",source:"@site/versioned_docs/version-0.6.0/administrator_guide/studio/development_control/function_introduce.md",sourceDirName:"administrator_guide/studio/development_control",slug:"/administrator_guide/studio/development_control/function_introduce",permalink:"/docs/0.6.0/administrator_guide/studio/development_control/function_introduce",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/versioned_docs/version-0.6.0/administrator_guide/studio/development_control/function_introduce.md",tags:[],version:"0.6.0",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"function_introduce",title:"\u529f\u80fd\u4ecb\u7ecd"},sidebar:"version-0.6.0/tutorialSidebar",previous:{title:"\u5f00\u53d1\u6307\u5357\u6982\u8ff0",permalink:"/docs/0.6.0/sql_development_guide/development_guide_overview"},next:{title:"\u65b9\u8a00\u4ecb\u7ecd",permalink:"/docs/0.6.0/administrator_guide/studio/development_control/component_introduce"}},d={},s=[{value:"\u4f5c\u4e1a\u7ba1\u7406",id:"\u4f5c\u4e1a\u7ba1\u7406",level:2},{value:"\u4f5c\u4e1a\u5f00\u53d1",id:"\u4f5c\u4e1a\u5f00\u53d1",level:2},{value:"\u8fd0\u7ef4\u7ba1\u7406",id:"\u8fd0\u7ef4\u7ba1\u7406",level:2},{value:"\u4f5c\u4e1a\u76d1\u63a7",id:"\u4f5c\u4e1a\u76d1\u63a7",level:2}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Data Studio \u63d0\u4f9b\u4e86 Apache Flink \u53ca\u5176\u4ed6 DBSQL \u7684\u5f00\u53d1\u3001\u63d0\u4ea4\u548c\u8fd0\u7ef4\u80fd\u529b\u3002"),(0,i.kt)("h2",{id:"\u4f5c\u4e1a\u7ba1\u7406"},"\u4f5c\u4e1a\u7ba1\u7406"),(0,i.kt)("p",null,"\u521b\u5efa\u76ee\u5f55\u3001\u521b\u5efa\u4f5c\u4e1a\u7b49\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../job_ops/job_manage"},"\u4f5c\u4e1a\u7ba1\u7406")),(0,i.kt)("h2",{id:"\u4f5c\u4e1a\u5f00\u53d1"},"\u4f5c\u4e1a\u5f00\u53d1"),(0,i.kt)("p",null,"\u5f00\u53d1\u4f5c\u4e1a\u3001\u68c0\u67e5\u8bed\u6cd5\u3001\u53d1\u5e03\u4f5c\u4e1a\u7b49\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../job_dev/flinksql_guide/flinksql_job_dev"},"\u4f5c\u4e1a\u5f00\u53d1")),(0,i.kt)("h2",{id:"\u8fd0\u7ef4\u7ba1\u7406"},"\u8fd0\u7ef4\u7ba1\u7406"),(0,i.kt)("p",null,"\u914d\u7f6e\u4f5c\u4e1a\u4fe1\u606f\u3001\u4fdd\u5b58savepoint\u7b49\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003","[\u8fd0\u7ef4\u7ba1\u7406]"),(0,i.kt)("h2",{id:"\u4f5c\u4e1a\u76d1\u63a7"},"\u4f5c\u4e1a\u76d1\u63a7"),(0,i.kt)("p",null,"\u67e5\u770b\u4f5c\u4e1a\u4fe1\u606f\u3001\u4f5c\u4e1a\u8fdb\u7a0b\u3001\u4f5c\u4e1a\u5386\u53f2\u7b49\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003","[\u4f5c\u4e1a\u76d1\u63a7]"))}f.isMDXComponent=!0}}]);