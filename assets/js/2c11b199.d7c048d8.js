"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[6139],{3755:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var i=s(5893),r=s(1151);const d={id:"lease-agreement-database",title:"Lease Agreement Database",sidebar_position:3},l=void 0,c={id:"rwa-use-cases/lease-agreement-database",title:"Lease Agreement Database",description:"User",source:"@site/docs/rwa-use-cases/data-model.md",sourceDirName:"rwa-use-cases",slug:"/rwa-use-cases/lease-agreement-database",permalink:"/documentation/docs/rwa-use-cases/lease-agreement-database",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/rwa-use-cases/data-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"lease-agreement-database",title:"Lease Agreement Database",sidebar_position:3},sidebar:"docSidebar",previous:{title:"Lease Agreement API Endpoints",permalink:"/documentation/docs/rwa-use-cases/lease-agreement-api"}},t={},a=[{value:"User",id:"user",level:2},{value:"Lease Agreement",id:"lease-agreement",level:2},{value:"Payment",id:"payment",level:2}];function o(e){const n={code:"code",h2:"h2",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"user",children:"User"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"username"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"passwordHash"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"email"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"role"}),": String"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lease-agreement",children:"Lease Agreement"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"leaseId"}),": ObjectId"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lesseeDetails"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"address"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contactInfo"}),": String"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vehicleDetails"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"make"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"year"}),": Number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"color"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vin"}),": String"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"leaseTerms"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"duration"}),": Number (months)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"monthlyRate"}),": Number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mileageAllowance"}),": Number"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paymentInfo"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initialPayment"}),": Number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"monthlyPayments"}),": [Number]"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"status"}),': String (e.g., "active", "completed", "terminated")']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"payment",children:"Payment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paymentId"}),": ObjectId"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"leaseId"}),": ObjectId (Reference to Lease Agreement)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"amount"}),": Number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dueDate"}),": Date"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paidDate"}),": Date"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"status"}),': String (e.g., "pending", "paid", "overdue")']}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var i=s(7294);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);