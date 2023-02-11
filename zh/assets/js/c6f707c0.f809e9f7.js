"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[1547],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||h[m]||c;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<c;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=r(3117),n=(r(7294),r(4137));const c={},a="\u591a\u94fe\u7ed3\u7b97\u534f\u8bae",l={unversionedId:"technology/modular-blockchain-architecture/multi-chain-settlement-protocol",id:"technology/modular-blockchain-architecture/multi-chain-settlement-protocol",title:"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae",description:"\u591a\u94fe\u7ed3\u7b97\u662f Rooch \u7684\u6700\u5173\u952e\u7279\u6027\uff0c\u672c\u7ae0\u6587\u6863\u5c06\u8be6\u7ec6\u9610\u8ff0\u591a\u94fe\u7ed3\u7b97\u7684\u534f\u8bae\u4ee5\u53ca\u8981\u89e3\u51b3\u7684\u96be\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md",sourceDirName:"04-technology/01-modular-blockchain-architecture",slug:"/technology/modular-blockchain-architecture/multi-chain-settlement-protocol",permalink:"/zh/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5757\u5316\u67b6\u6784",permalink:"/zh/docs/technology/modular-blockchain-architecture/"},next:{title:"\u6b3a\u8bc8\u8bc1\u660e\uff08Fraud Proofs\uff09",permalink:"/zh/docs/technology/fraud-proofs"}},i={},u=[{value:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23",id:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23",level:2},{value:"\u591a\u4e2a\u7ed3\u7b97\u5c42\u548c\u4ef2\u88c1\u5c42\u4e4b\u95f4\u7684\u901a\u8baf\u534f\u8bae",id:"\u591a\u4e2a\u7ed3\u7b97\u5c42\u548c\u4ef2\u88c1\u5c42\u4e4b\u95f4\u7684\u901a\u8baf\u534f\u8bae",level:2},{value:"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b",id:"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b",level:2}],p={toc:u};function h(e){let{components:t,...c}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae"},"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae"),(0,n.kt)("p",null,"\u591a\u94fe\u7ed3\u7b97\u662f Rooch \u7684\u6700\u5173\u952e\u7279\u6027\uff0c\u672c\u7ae0\u6587\u6863\u5c06\u8be6\u7ec6\u9610\u8ff0\u591a\u94fe\u7ed3\u7b97\u7684\u534f\u8bae\u4ee5\u53ca\u8981\u89e3\u51b3\u7684\u96be\u9898\u3002"),(0,n.kt)("h2",{id:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23"},"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/technology/modular-blockchain-architecture/"},"\u6a21\u5757\u5316\u533a\u5757\u94fe\u67b6\u6784"),"\u4e2d\u6211\u4eec\u660e\u786e\u4e86\u7ed3\u7b97\u5c42\u7684\u804c\u8d23\u662f\u5b9e\u73b0 Layer1 \u548c\u6267\u884c\u5c42\u4e4b\u95f4\u7684\u72b6\u6001\u8fc1\u79fb\u4ee5\u53ca\u8d44\u4ea7\u7ed3\u7b97\u3002"),(0,n.kt)("p",null,"Rooch \u5728\u6bcf\u4e2a\u7ed3\u7b97\u5c42\u7684 Layer1 \u4e2d\u90e8\u7f72\u7ed3\u7b97\u667a\u80fd\u5408\u7ea6\uff0c\u5408\u7ea6\u4e2d\u7ef4\u62a4\u4e86\u4e00\u4e2a\u94fe\u4e0b\u72b6\u6001\u6811\uff0c\u94fe\u4e0a\u53ea\u8bb0\u5f55\u72b6\u6001\u6811\u7684\u6839\uff0c\u7528\u6237\u901a\u8fc7\u8fd9\u9897\u6811\u5b9e\u73b0\u72b6\u6001\u5728 Layer1 \u548c Rooch \u4e4b\u95f4\u8fc1\u79fb\u3002\u5177\u4f53\u8fc1\u79fb\u7684\u534f\u8bae\u53c2\u770b\uff1a",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/technology/state-scaling"},"\u72b6\u6001\u6269\u5bb9"),"\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5f53\u7528\u6237\u5c06\u72b6\u6001\u4ece Layer1 \u8fc1\u79fb\u5230 Rooch \u65f6\uff0c\u72b6\u6001\u4f1a\u5728 Layer1 \u7684\u4ea4\u6613\u6700\u7ec8\u786e\u5b9a\u540e\uff0c\u51fa\u73b0\u5728 Rooch \u7684\u72b6\u6001\u6811\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5f53\u7528\u6237\u5c06\u72b6\u6001\u4ece Rooch \u8fc1\u79fb\u5230 Layer1 \u65f6\uff0c\u72b6\u6001\u4f1a\u5148\u9501\u5b9a\uff0c\u7b49\u5f85\u6311\u6218\u5468\u671f\u8fc7\u540e\uff0c\u518d\u4ece\u72b6\u6001\u6811\u4e2d\u79fb\u51fa\uff0c\u8fdb\u884c\u7ed3\u7b97\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5f53\u7ed3\u7b97\u5c42\u6536\u5230\u4ef2\u88c1\u5c42\u7684\u53d1\u751f\u6b3a\u8bc8\u7684\u901a\u77e5\u540e\uff0c\u4f1a\u5c06\u94fe\u4e0b\u72b6\u6001\u6811\u7684\u6839\u56de\u6eda\u5230\u6b3a\u8bc8\u53d1\u751f\u4e4b\u524d\uff0c\u4e22\u5f03\u8be5\u671f\u95f4\u5185\u7684\u72b6\u6001\u6811\u53d8\u66f4\u3002")),(0,n.kt)("h2",{id:"\u591a\u4e2a\u7ed3\u7b97\u5c42\u548c\u4ef2\u88c1\u5c42\u4e4b\u95f4\u7684\u901a\u8baf\u534f\u8bae"},"\u591a\u4e2a\u7ed3\u7b97\u5c42\u548c\u4ef2\u88c1\u5c42\u4e4b\u95f4\u7684\u901a\u8baf\u534f\u8bae"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multi chain settlement",src:r(2081).Z,width:"721",height:"237"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"TODO \u9700\u8981\u5b8c\u5584")),(0,n.kt)("h2",{id:"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b"},"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b"),(0,n.kt)("p",null,"\u5047\u5982\u4e00\u4e2a\u5355\u94fe\u7684 Layer2\uff0c\u901a\u8fc7\u8de8\u94fe\u65b9\u5f0f\u8fde\u63a5\u591a\u4e2a Layer1\uff0c\u5b83\u548c\u591a\u94fe\u7ed3\u7b97\u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u591a\u94fe\u7ed3\u7b97\u66f4\u5b89\u5168\u3002\u591a\u94fe\u7ed3\u7b97\u65b9\u6848\u4e2d\u7684\u8de8\u5c42\u6865\u7684\u5b89\u5168\u53d7\u5230\u4ef2\u88c1\u5c42\u7684\u4fdd\u62a4\uff0c\u6267\u884c\u5c42\u53ef\u4ee5\u7ee7\u627f\u4ef2\u88c1\u5c42\u7684\u5b89\u5168\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u901a\u7528\u7684\u8de8\u5c42\u65b9\u6848\u3002Rooch \u7684\u591a\u94fe\u7ed3\u7b97\u65b9\u6848\u4e2d\uff0c\u8de8\u5c42\u901a\u8fc7\u901a\u7528\u7684\u72b6\u6001\u8fc1\u79fb\u6a21\u5f0f\u5b9e\u73b0\uff0c\u72b6\u6001\u53ef\u4ee5\u7528\u6765\u4ee3\u8868 Token\uff0cNFT\uff0c\u6570\u5b57\u5408\u540c\u4ee5\u53ca\u5176\u4ed6\u672a\u6765\u7684\u5e94\u7528\u72b6\u6001\uff0c\u4e0d\u9700\u8981\u4e3a\u65b0\u7684\u72b6\u6001\u7c7b\u578b\u8bbe\u8ba1\u4e13\u95e8\u7684\u534f\u8bae\u3002")))}h.isMDXComponent=!0},2081:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/rooch-multi-chain-settlement-2bcfe2fb4f4b28b0e9a73e1890767ee6.svg"}}]);