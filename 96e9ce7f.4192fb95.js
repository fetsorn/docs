(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),i=(n(0),n(102)),a={id:"bugBounty",title:"Bug Bounty \ud83d\udcb0",sidebar_label:"Bug Bounty \ud83d\udcb0"},c={unversionedId:"bugBounty",id:"bugBounty",isDocsHomePage:!1,title:"Bug Bounty \ud83d\udcb0",description:"The DODO team has implemented a bug bounty program and invites bug bounty hunters to participate.",source:"@site/docs/bugBounty.md",slug:"/bugBounty",permalink:"/docs/docs/next/bugBounty",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/bugBounty.md",version:"current",sidebar_label:"Bug Bounty \ud83d\udcb0",sidebar:"someSidebar",previous:{title:"Deployment Information",permalink:"/docs/docs/next/deployedInfo"},next:{title:"Audit",permalink:"/docs/docs/next/audit"}},l=[{value:"Scope",id:"scope",children:[]},{value:"Rewards",id:"rewards",children:[]},{value:"Disclosure",id:"disclosure",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The DODO team has implemented a bug bounty program and invites bug bounty hunters to participate."),Object(i.b)("h2",{id:"scope"},"Scope"),Object(i.b)("p",null,"The scope of the bug bounty program is all contracts in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/DODOEX/dodo-smart-contract"}),"DODO smart contracts repository"),"."),Object(i.b)("p",null,"The probability of finding a bug and winning a reward for the three parts of DODO is: ",Object(i.b)("inlineCode",{parentName:"p"},"Helper")," > ",Object(i.b)("inlineCode",{parentName:"p"},"Entrance")," > ",Object(i.b)("inlineCode",{parentName:"p"},"Core"),"."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_framework.jpeg",alt:null}))),Object(i.b)("h2",{id:"rewards"},"Rewards"),Object(i.b)("p",null,"Severity of bugs will be triaged and assessed under the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.first.org/cvss/calculator/3.0"}),"CVSS Risk Rating")," scale. The rewards corresponding to the severities are as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Critical (9.0-10.0): Up to ","$","50,000"),Object(i.b)("li",{parentName:"ul"},"High (7.0-8.9): Up to ","$","10,000"),Object(i.b)("li",{parentName:"ul"},"Medium (4.0-6.9): Up to ","$","2,000"),Object(i.b)("li",{parentName:"ul"},"Low (0.1-3.9): Up to ","$","1,000")),Object(i.b)("p",null,"In addition to bug severity, rewards will be paid out based on the impact of the discovered vulnerabilities, as well as the level of difficulty in discovering these vulnerabilities."),Object(i.b)("h2",{id:"disclosure"},"Disclosure"),Object(i.b)("p",null,"Any vulnerability or bug discovered must be reported ",Object(i.b)("em",{parentName:"p"},"only")," to the DODO team at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:contact@dodoex.io."}),"contact@dodoex.io.")," Bounty hunters must not disclose the vulnerability or bug publicly or to another person or entity prior to contacting the DODO team. In addition, disclosure to the DODO team must be made promptly following the discovery of the vulnerability. Please include as much information about the vulnerability as possible in your email, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The conditions on which reproducing the bug is contingent"),Object(i.b)("li",{parentName:"ul"},"The steps needed to reproduce the bug or, preferably, a proof of concept"),Object(i.b)("li",{parentName:"ul"},"The potential implications of the vulnerability being abused")),Object(i.b)("p",null,"A detailed vulnerability report increases the likelihood of receiving a reward and may increase the monetary amount of the reward."),Object(i.b)("p",null,"Anyone who reports a unique, previously unreported vulnerability that results in a change to the code or a configuration change and who keeps such vulnerability confidential until it has been resolved by our engineers will be recognized publicly for their contribution, if agreed."))}b.isMDXComponent=!0}}]);