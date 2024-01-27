"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3629],{8223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(5893),i=t(1151);const a={},r="Bumping Minimum MacOS version to 10.13",s={permalink:"/news/2023/08/24/bumping-minimum-macos-version-to-1013",source:"@site/news/2023-08-24-bumping-minimum-macos-version-to-1013.md",title:"Bumping Minimum MacOS version to 10.13",description:"We will bump the minimum MacOS version from 10.9 (released in Oct. 2013,",date:"2023-08-24T00:00:00.000Z",formattedDate:"August 24, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Python 3.12 migration and Python 3.11 by default",permalink:"/news/2023/09/25/python-312-migration-and-python-311-by-default"},nextItem:{title:"End-of-life for CentOS 6",permalink:"/news/2023/07/12/end-of-life-for-centos-6"}},c={authorsImageUrls:[]},l=[];function d(e){const n={a:"a",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We will bump the minimum MacOS version from 10.9 (released in Oct. 2013,\nend-of-life since Dec. 2016) to 10.13 (released Sept. 2017, end-of-life\nsince Dec. 2020). The main reason we managed to support 10.9 this long\nat all, is that conda-forge is able to ship an up-to-date C++ standard\nlibrary for OSX, ",(0,o.jsx)(n.code,{children:"libcxx"}),", superseding the old one present in the MacOS\nSDK on the system (at least from the point-of-view of the respective\nconda environments)."]}),"\n",(0,o.jsxs)(n.p,{children:["However, several core packages in the ecosystem now require at least\n10.13 (or will very soon), in a way that we cannot be circumvent. These\npackages include ",(0,o.jsx)(n.code,{children:"libcxx"}),",\n",(0,o.jsx)(n.a,{href:"https://discourse.llvm.org/t/libc-bumping-minimal-deployment-target-for-building-the-dylib-static-library-on-macos/68912",children:"starting"}),"\nwith version 17.0. This change will not affect already published\nartifacts, but in the near future, all new builds for OSX will require\nat least 10.13. This constraint will be implemented through the ",(0,o.jsx)(n.code,{children:"__osx"}),"\nvirtual package, but the details of how we will achieve this are still\nbeing worked out. Only ",(0,o.jsx)(n.code,{children:"conda"})," versions 4.8.0 or newer have this virtual\npackage. If you are using a system with MacOS older than 10.13 and are\nusing ",(0,o.jsx)(n.code,{children:"conda"})," older than 4.8.0, you will need to either upgrade ",(0,o.jsx)(n.code,{children:"conda"}),"\nto at least 4.8.0 or upgrade your system to at least MacOS 10.13."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(7294);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);