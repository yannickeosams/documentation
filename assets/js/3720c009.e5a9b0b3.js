"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4787],{5163:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});s(6540);var a=s(4164),r=s(9024),l=s(7559),n=s(1312);const c=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=s(8362),o=s(1928);const g={tag:"tag_tbrL"};var u=s(4848);function h(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(i.A,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function d(t){let{tags:e}=t;const s=function(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,u.jsx)(h,{letterEntry:t},t.letter)))})}var j=s(8954);function m(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:e}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function x(t){let{tags:e,title:s}=t;return(0,u.jsx)(r.e3,{className:(0,a.A)(l.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:s}),(0,u.jsx)(d,{tags:e})]})})})})}function p(t){const e=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...t,title:e}),(0,u.jsx)(x,{...t,title:e})]})}},8362:(t,e,s)=>{s.d(e,{A:()=>c});s(6540);var a=s(4164),r=s(8774);const l={tag:"tag_QDqo",tagRegular:"tagRegular_RTiO",tagWithCount:"tagWithCount_mElv"};var n=s(4848);function c(t){let{permalink:e,label:s,count:c}=t;return(0,n.jsxs)(r.A,{href:e,className:(0,a.A)(l.tag,c?l.tagWithCount:l.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}}}]);