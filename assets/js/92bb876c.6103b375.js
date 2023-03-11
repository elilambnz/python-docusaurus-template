"use strict";(self.webpackChunkpython_docusaurus_template=self.webpackChunkpython_docusaurus_template||[]).push([[347],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,a({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:200},i="Getting Started",s={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Read the Docusaurus documentation for information",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/docs/getting_started",draft:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Python Docusaurus Template",permalink:"/docs/intro"},next:{title:"Python Code Blocks",permalink:"/docs/overview/python"}},l={},u=[{value:"Config",id:"config",level:2},{value:"Pages",id:"pages",level:2},{value:"Styles",id:"styles",level:2},{value:"Other Changes",id:"other-changes",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.mdx)(c,(0,r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started"},"Getting Started"),(0,o.mdx)("p",null,"Read the ",(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," documentation for information\non how Docusaurus works. The following sections only outline the ",(0,o.mdx)("em",{parentName:"p"},"minimum\nsetup")," needed to set this template up for your own site."),(0,o.mdx)("h2",{id:"config"},"Config"),(0,o.mdx)("p",null,"After cloning this template repo, you will need to replace all the\nplaceholder values in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"docusaurus.config.js"),' folder. The main fields\nthat you will definitely need to replace are commented with "',(0,o.mdx)("inlineCode",{parentName:"p"},"set this"),'".'),(0,o.mdx)("p",null,"Have a look at the\n",(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/docusaurus-config"},"Docusauraus configuration docs"),"\nto see if there are any other additional configuration options you would\nneed for your purpose."),(0,o.mdx)("h2",{id:"pages"},"Pages"),(0,o.mdx)("p",null,"The main index page will need to be modified. This can be found at\n",(0,o.mdx)("inlineCode",{parentName:"p"},"src/pages/index.js"),"."),(0,o.mdx)("p",null,"You can then delete all the files in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"docs/")," directory and start writing\nyour own pages."),(0,o.mdx)("h2",{id:"styles"},"Styles"),(0,o.mdx)("p",null,"Change the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--ifm-color")," css variables for light and dark mode in\n",(0,o.mdx)("inlineCode",{parentName:"p"},"src/css/custom.scss")," using\nthe ",(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima"},"Docusaurus theme colour picker")),(0,o.mdx)("h2",{id:"other-changes"},"Other Changes"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Change the ",(0,o.mdx)("inlineCode",{parentName:"li"},"name")," field in ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json")," to the name of your project."),(0,o.mdx)("li",{parentName:"ul"},"Change the logo and favicon in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"static/img")," directory to your own logo\nand favicon. If you change the names of these files, update them\nin ",(0,o.mdx)("inlineCode",{parentName:"li"},"docusaurus.config.js"),".")))}p.isMDXComponent=!0}}]);