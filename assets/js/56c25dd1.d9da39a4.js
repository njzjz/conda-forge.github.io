"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[2032],{1302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var a=t(5893),o=t(1151);const c={},s="GCC 10 and clang 12 as default compilers for Linux and macOS",r={permalink:"/news/2021/10/13/gcc-10-and-clang-12-as-default-compilers-for-linux-and-macos",source:"@site/news/2021-10-13-gcc-10-and-clang-12-as-default-compilers-for-linux-and-macos.md",title:"GCC 10 and clang 12 as default compilers for Linux and macOS",description:"These compilers will become the default for building packages in",date:"2021-10-13T00:00:00.000Z",formattedDate:"October 13, 2021",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"conda-forge now uses mambabuild as default",permalink:"/news/2021/10/20/conda-forge-now-uses-mambabuild-as-default"},nextItem:{title:"Python 3.6 is now dropped when building conda-forge packages",permalink:"/news/2021/10/04/python-36-is-now-dropped-when-building-conda-forge-packages"}},d={authorsImageUrls:[]},i=[];function l(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(n.p,{children:["These compilers will become the default for building packages in\nconda-forge. One notable change in gcc 10 is that the ",(0,a.jsx)(n.code,{children:"-fopenmp`` flag in "}),"FFLAGS",(0,a.jsx)(n.code,{children:"is dropped. In clang 12,"}),"-std=c++14",(0,a.jsx)(n.code,{children:"explicit flag has been dropped from"}),"CXXFLAGS",(0,a.jsx)(n.code,{children:", as it is the default compilation mode for clang 12. In gcc 11, the default is "}),"-std=gnu++17`. In clang>=12 and gcc>=11,\nwe will not provide an explicit C++ standard, and will defer to the\ncompiler default."]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(7294);const o={},c=a.createContext(o);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);