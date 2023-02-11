"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[4921],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(3117),o=(n(7294),n(4137));const a={},i="Parallel Transaction Execution",c={unversionedId:"technology/parallel-transaction-execution",id:"technology/parallel-transaction-execution",title:"Parallel Transaction Execution",description:"Parallel transaction execution allows transactions to be executed on multiple CPU cores simultaneously, leading to higher single-host throughput, this is a common optimization approach in the Web2 infrastructure area.",source:"@site/docs/04-technology/05-parallel-transaction-execution.md",sourceDirName:"04-technology",slug:"/technology/parallel-transaction-execution",permalink:"/docs/technology/parallel-transaction-execution",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/05-parallel-transaction-execution.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decentralized validator network",permalink:"/docs/technology/decentralized-validator-network"},next:{title:"State Scaling for Layer1",permalink:"/docs/technology/state-scaling"}},l={},s=[{value:"Reference Links",id:"reference-links",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parallel-transaction-execution"},"Parallel Transaction Execution"),(0,o.kt)("p",null,"Parallel transaction execution allows transactions to be executed on multiple CPU cores simultaneously, leading to higher single-host throughput, this is a common optimization approach in the Web2 infrastructure area."),(0,o.kt)("p",null,"Move's state pattern is more advantageous in achieving parallel transaction execution and has been attempted in the industry, such as Aptos, Sui."),(0,o.kt)("p",null,"Rooch's sequencer is deterministic within an Epoch, and its throughput is limited only by the efficiency of single-host transaction execution, making it easier to take advantage of parallel execution."),(0,o.kt)("h3",{id:"reference-links"},"Reference Links"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},"Optimistic concurrency control")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/aptoslabs/block-stm-how-we-execute-over-160k-transactions-per-second-on-the-aptos-blockchain-3b003657e4ba"},"Block-STM: How We Execute Over 160k Transactions Per Second on the Aptos Blockchain")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.sui.io/learn/architecture/consensus"},"Sui consensus"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This document needs further improvement")))}p.isMDXComponent=!0}}]);