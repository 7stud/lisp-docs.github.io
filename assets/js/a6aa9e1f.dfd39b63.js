"use strict";(self.webpackChunklisp_docs_github_io=self.webpackChunklisp_docs_github_io||[]).push([[3089],{46:(n,t,e)=>{e.r(t),e.d(t,{default:()=>h});e(7294);var r=e(6010),i=e(2263),l=e(833),s=e(5281),u=e(1460),o=e(9703),a=e(197),c=e(9985),d=e(5893);function g(n){const{metadata:t}=n,{siteConfig:{title:e}}=(0,i.Z)(),{blogDescription:r,blogTitle:s,permalink:u}=t,o="/"===u?e:s;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.d,{title:o,description:r}),(0,d.jsx)(a.Z,{tag:"blog_posts_list"})]})}function p(n){const{metadata:t,items:e,sidebar:r}=n;return(0,d.jsxs)(u.Z,{sidebar:r,children:[(0,d.jsx)(c.Z,{items:e}),(0,d.jsx)(o.Z,{metadata:t})]})}function h(n){return(0,d.jsxs)(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage),children:[(0,d.jsx)(g,{...n}),(0,d.jsx)(p,{...n})]})}},9703:(n,t,e)=>{e.d(t,{Z:()=>s});e(7294);var r=e(5999),i=e(2244),l=e(5893);function s(n){const{metadata:t}=n,{previousPage:e,nextPage:s}=t;return(0,l.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[e&&(0,l.jsx)(i.Z,{permalink:e,title:(0,l.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,l.jsx)(i.Z,{permalink:s,title:(0,l.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(n,t,e)=>{e.d(t,{Z:()=>s});e(7294);var r=e(9460),i=e(390),l=e(5893);function s(n){let{items:t,component:e=i.Z}=n;return(0,l.jsx)(l.Fragment,{children:t.map((n=>{let{content:t}=n;return(0,l.jsx)(r.n,{content:t,children:(0,l.jsx)(e,{children:(0,l.jsx)(t,{})})},t.metadata.permalink)}))})}},9199:(n,t,e)=>{e.d(t,{Z:()=>c});e(7294);var r=e(3563),i=e(9960),l=e(6971),s=e(1262),u=(e(8846),e(5893));function o(n){let{children:t,styled:e,term:r}=n;function s(){if(null!=r&&"string"==typeof r){const n=(0,l.uJ)(r);if(null!=n)return n}if("string"==typeof t&&null!==t){if(t.endsWith("s")){const n=t.trim(),e=n.substring(0,n.length-1);return(0,l.uJ)(n)||(0,l.uJ)(e)}{const n=t.trim();return(0,l.uJ)(n)}}return null}function o(){if(null!=r&&"string"==typeof r)return r.trim();if("string"==typeof t&&null!==t){if(t.endsWith("s")){const n=t.trim(),e=n.substring(0,n.length-1);return(0,l.uJ)(n)?n:(0,l.uJ)(e)?e:null}return t.trim()}return null}function a(){const n=o(),e=s();return null===e?(0,u.jsx)("span",{children:t}):(0,u.jsx)(i.Z,{to:e,children:(0,u.jsx)(l.FO,{term:n,children:t})})}return function(){const n=o();return null!=e&&null!==n&&(0,l.mg)(n)?(0,u.jsx)("i",{children:a()}):a()}()}function a(n){let{children:t,styled:e,term:r}=n;function s(){if(null!=r&&"string"==typeof r){const n=(0,l.cp)(r);if(null!=n)return n}if("string"==typeof t&&null!==t){if(t.endsWith("s")){const n=t.trim(),e=n.substring(0,n.length-1);return(0,l.cp)(n)||(0,l.cp)(e)}{const n=t.trim();return(0,l.cp)(n)}}return null}function o(){if(null!=r&&"string"==typeof r)return r.trim();if("string"==typeof t&&null!==t){if(t.endsWith("s")){const n=t.trim(),e=n.substring(0,n.length-1);return(0,l.cp)(n)?n:(0,l.cp)(e)?e:null}return t.trim()}return null}function a(){o();const n=s();return null===n?(0,u.jsx)("span",{children:t}):(0,u.jsx)(i.Z,{to:n,children:t})}return function(){const n=o();return null!=e&&null!==n&&(0,l.F$)(n)?(0,u.jsx)("b",{children:a()}):a()}()}const c={...r.Z,DictionaryLink:function(n){let{children:t,styled:e,term:r}=n;return(0,u.jsx)(s.Z,{fallback:(0,u.jsx)("span",{children:t}),children:()=>(0,u.jsx)(a,{term:r,styled:e,children:t})})},GlossaryTerm:function(n){let{children:t,styled:e,term:r}=n;return(0,u.jsx)(s.Z,{fallback:(0,u.jsx)("span",{children:t}),children:()=>(0,u.jsx)(o,{term:r,styled:e,children:t})})}}}}]);