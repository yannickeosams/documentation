"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9074],{6549:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(5893),n=s(1151);const i={sidebar_position:2},r="List Votes",a={id:"api/listVotes",title:"List Votes",description:"Endpoint: /listVotes/",source:"@site/docs/api/listVotes.md",sourceDirName:"api",slug:"/api/listVotes",permalink:"/documentation/docs/api/listVotes",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/api/listVotes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"List Proposals",permalink:"/documentation/docs/api/listProposals"},next:{title:"Get Proposal Details",permalink:"/documentation/docs/api/getProposalDetails"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Response",id:"response",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"list-votes",children:"List Votes"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Endpoint"}),": ",(0,o.jsx)(t.code,{children:"/listVotes/{proposalID}"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"HTTP Method"}),": ",(0,o.jsx)(t.code,{children:"GET"})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"This endpoint makes an HTTP GET request to retrieve a list of votes associated with the provided ID. The request does not include a request body."}),"\n",(0,o.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,o.jsx)(t.p,{children:'The response to the last execution of this request had a status code of 200, and it returned a JSON object containing an array of "votes" along with a "count" of the total number of votes.'}),"\n",(0,o.jsx)(t.p,{children:'The "votes" array includes objects with properties such as "_id", "voting", "wallet", "chain", "vote", "signature", "signedTimestamp", "createdAt", "updatedAt", "__v", and "value".'})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(7294);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);