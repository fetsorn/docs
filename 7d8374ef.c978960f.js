(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(102)),s={id:"commonQuestions",title:"Frequently Asked Questions (FAQs)",sidebar_label:"Frequently Asked Questions (FAQs)"},a={unversionedId:"commonQuestions",id:"version-1.0.0/commonQuestions",isDocsHomePage:!1,title:"Frequently Asked Questions (FAQs)",description:"How does DODO keep the funding pools balanced?",source:"@site/versioned_docs/version-1.0.0/commonQuestions.md",slug:"/commonQuestions",permalink:"/docs/docs/commonQuestions",editUrl:"https://github.com/DODOEX/docs/edit/master/versioned_docs/version-1.0.0/commonQuestions.md",version:"1.0.0",sidebar_label:"Frequently Asked Questions (FAQs)",sidebar:"version-1.0.0/someSidebar",previous:{title:"Backtest Report",permalink:"/docs/docs/backtest"},next:{title:"Whitepaper",permalink:"/docs/docs/whitepaper"}},c=[{value:"How does DODO keep the funding pools balanced?",id:"how-does-dodo-keep-the-funding-pools-balanced",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-does-dodo-keep-the-funding-pools-balanced"},"How does DODO keep the funding pools balanced?"),Object(i.b)("p",null,"Taking the ETH-USDC trading pair as an example, DODO charges users ETH in transaction fees when they buy ETH, and USDC in transaction fees when they sell ETH. Statistically speaking, given a sufficiently large sample, the buying volume is roughly equal to the selling volume, so the absolute returns of the two asset pools are roughly the same. Therefore, when the size of one asset pool is smaller, its return on investment (ROI) will be higher. This (temporary) higher yield will encourage liquidity providers (LPs) to deposit more assets into the smaller funding pool, until the values of the two funding pools become balanced again."))}u.isMDXComponent=!0}}]);