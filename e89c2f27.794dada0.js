(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(102)),o={id:"authority",title:"Authority",sidebar_label:"Authority"},c={unversionedId:"authority",id:"authority",isDocsHomePage:!1,title:"Authority",description:"There are two special roles in each DODO Pair smart contract: admin and supervisor.",source:"@site/docs/authority.md",slug:"/authority",permalink:"/docs/docs/next/authority",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/authority.md",version:"current",sidebar_label:"Authority",sidebar:"someSidebar",previous:{title:"Initial DODO Offering",permalink:"/docs/docs/next/initialDODOOffering"},next:{title:"Decentralization",permalink:"/docs/docs/next/decentralization"}},l=[{value:"Scope",id:"scope",children:[]},{value:"Principle",id:"principle",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two special roles in each ",Object(i.b)("inlineCode",{parentName:"p"},"DODO Pair")," smart contract: ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," and ",Object(i.b)("inlineCode",{parentName:"p"},"supervisor"),"."),Object(i.b)("p",null,"Here I would like to introduce the scope of power of ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," and ",Object(i.b)("inlineCode",{parentName:"p"},"supervisor"),", and the principles of design behind."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may be very concerned about who is the ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"supervisor"),", and will they abuse the power. Please don't worry, in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./decentralization"}),"next section"),", we will introduce the decentralized governance process in detail."))),Object(i.b)("h2",{id:"scope"},"Scope"),Object(i.b)("p",null,"Power of the supervisor is a subset of that of ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),", and both ",Object(i.b)("inlineCode",{parentName:"p"},"supervisor")," and ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," have A-level authority. Level A permissions include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Disable trade"),Object(i.b)("li",{parentName:"ul"},"Disable deposit"),Object(i.b)("li",{parentName:"ul"},"Set gas price limit")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"admin")," is the only one with B-level authority, which includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change admin"),Object(i.b)("li",{parentName:"ul"},"Change supervisor"),Object(i.b)("li",{parentName:"ul"},"Change maintainer"),Object(i.b)("li",{parentName:"ul"},"Change oracle"),Object(i.b)("li",{parentName:"ul"},"Set liquidity provider fee rate"),Object(i.b)("li",{parentName:"ul"},"Set maintainer fee rate"),Object(i.b)("li",{parentName:"ul"},"Set K"),Object(i.b)("li",{parentName:"ul"},"Enable trade"),Object(i.b)("li",{parentName:"ul"},"Enable deposit"),Object(i.b)("li",{parentName:"ul"},"Final settlement")),Object(i.b)("h2",{id:"principle"},"Principle"),Object(i.b)("p",null,'Level-A authority can be summarized as "freeze status" i.e. some functions of the system can be stopped urgently, but the status cannot be changed. In order to limit the power of ',Object(i.b)("inlineCode",{parentName:"p"},"admin"),", often actions taken by ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," have to go through a complex governance process. To be risk resistant, we need a more flexible ",Object(i.b)("inlineCode",{parentName:"p"},"supervisor")," instead of an ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," to take some actions that are not so sensitive but can significantly reduce system risks."),Object(i.b)("p",null,"The B-level authority basically covers all aspects of the ",Object(i.b)("inlineCode",{parentName:"p"},"DODO Pair")," contract. The reason why so many parameters are designed to be variable is to better adapt to the rapidly changing market environment. It also leaves room for governance in the future."),Object(i.b)("p",null,"It is worth pointing out that no one can prohibit users from withdrawing coins. Being non-custodial is the most important principle of Defi."))}s.isMDXComponent=!0}}]);