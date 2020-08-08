(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(143)),i={id:"briefIntro",title:"Introduction of DODO",sidebar_label:"Introduction of DODO"},c={id:"briefIntro",isDocsHomePage:!0,title:"Introduction of DODO",description:"What is DODO",source:"@site/docs/briefIntroduction.md",permalink:"/docs/docs/",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/briefIntroduction.md",sidebar_label:"Introduction of DODO",sidebar:"someSidebar",next:{title:"DODO's Features",permalink:"/docs/docs/features"}},l=[{value:"What is DODO",id:"what-is-dodo",children:[]},{value:"How does DODO work",id:"how-does-dodo-work",children:[]},{value:"Why DODO",id:"why-dodo",children:[]},{value:"What can I do with DODO",id:"what-can-i-do-with-dodo",children:[{value:"As a trader",id:"as-a-trader",children:[]},{value:"As a LP",id:"as-a-lp",children:[]}]}],d={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-dodo"},"What is DODO"),Object(a.b)("p",null,"DODO is a new generation of on-chain liquidity solutions, which uses the proactive market maker algorithm (PMM) to provide pure on-chain and contract-fillable liquidity."),Object(a.b)("h2",{id:"how-does-dodo-work"},"How does DODO work"),Object(a.b)("p",null,"DODO accepts liquidity providers (LP) assets. It gathers funds near the market price to provide sufficient liquidity. LP may face counterparty risk, so DODO will dynamically adjust the price to encourage arbitrageurs step in to limit the counterparty risk and keep the portfolio of the capital pool unchange."),Object(a.b)("h2",{id:"why-dodo"},"Why DODO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Less slippage"),Object(a.b)("li",{parentName:"ul"},"Single risk exposure"),Object(a.b)("li",{parentName:"ul"},"No impermanent loss")),Object(a.b)("h2",{id:"what-can-i-do-with-dodo"},"What can I do with DODO"),Object(a.b)("h3",{id:"as-a-trader"},"As a trader"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Each and every traders enjoy sufficient liquidity similar to that of centralized exchanges"),Object(a.b)("li",{parentName:"ul"},"Arbitrageurs can make a profit from the price difference between DODO and other exchanges"),Object(a.b)("li",{parentName:"ul"},"Smart contracts can natively use DODO liquidity to complete on-chain transactions such as liquidations, auctions, etc")),Object(a.b)("h3",{id:"as-a-lp"},"As a LP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"There is no limitation on the deposit quantity and asset types"),Object(a.b)("li",{parentName:"ul"},"DODO will charge a commission fee for each transaction and distributed it to LPs"),Object(a.b)("li",{parentName:"ul"},"Create trading pairs of your own tokens. And with even only your own tokens deposited, liquidity can be obtained")))}s.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),O=n,b=u["".concat(i,".").concat(O)]||u[O]||p[O]||a;return r?o.a.createElement(b,c(c({ref:t},d),{},{components:r})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);