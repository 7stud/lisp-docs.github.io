"use strict";(self.webpackChunklisp_docs_github_io=self.webpackChunklisp_docs_github_io||[]).push([[3608],{3169:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});t(7294);var r=t(9960),a=t(5999),i=t(1944),c=t(7961),l=t(2503),n=t(5893);function h(e){let{year:s,posts:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{as:"h3",id:s,children:s}),(0,n.jsx)("ul",{children:t.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:s}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},s)))})})})}function o(e){let{archive:s}=e;const t=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const s=e.reduce(((e,s)=>{const t=s.metadata.date.split("-")[0],r=e.get(t)??[];return e.set(t,[s,...r])}),new Map);return Array.from(s,(e=>{let[s,t]=e;return{year:s,posts:t}}))}(s.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.d,{title:t,description:r}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.Z,{as:"h1",className:"hero__title",children:t}),(0,n.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(d,{years:h})})]})]})}}}]);