"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9900],{7297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(4848),o=t(8453);const r={title:"Migrating Defactor's Front-end to React",sidebar_position:3},a=void 0,s={id:"pools/front-end-ui/react-migration",title:"Migrating Defactor's Front-end to React",description:"Introduction",source:"@site/docs/pools/front-end-ui/react-migration.md",sourceDirName:"pools/front-end-ui",slug:"/pools/front-end-ui/react-migration",permalink:"/docs/pools/front-end-ui/react-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/pools/front-end-ui/react-migration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Migrating Defactor's Front-end to React",sidebar_position:3},sidebar:"docSidebar",previous:{title:"Examples Sites",permalink:"/docs/pools/front-end-ui/example-sites"},next:{title:"How-To Articles",permalink:"/docs/category/how-to-articles"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Reasons for Choosing React",id:"reasons-for-choosing-react",level:2},{value:"Greater Experience with React",id:"greater-experience-with-react",level:3},{value:"Improved Delivery Times",id:"improved-delivery-times",level:3},{value:"Enhanced Website Performance",id:"enhanced-website-performance",level:3},{value:"Better Management of Framework Updates",id:"better-management-of-framework-updates",level:3},{value:"React&#39;s Growing Popularity",id:"reacts-growing-popularity",level:3},{value:"Utilizing Atomic Components in React",id:"utilizing-atomic-components-in-react",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This section of the Defactor developer documentation explains the rationale behind our decision to migrate the front-end tech stack to React. This transition marks a significant step in our development strategy, aiming to enhance the efficiency and performance of our web applications."}),"\n",(0,i.jsx)(n.h2,{id:"reasons-for-choosing-react",children:"Reasons for Choosing React"}),"\n",(0,i.jsx)(n.h3,{id:"greater-experience-with-react",children:"Greater Experience with React"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Our team possesses extensive experience in working with React, which has been our primary framework for web development."}),"\n",(0,i.jsx)(n.li,{children:"This experience spans across creating solutions from static websites to complex web applications, interacting with our services, blockchain, and third-party APIs."}),"\n",(0,i.jsx)(n.li,{children:"Our proficiency in React enables us to generate more robust and reliable solutions tailored to specific business needs."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"improved-delivery-times",children:"Improved Delivery Times"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Due to our familiarity with React, we can significantly expedite the development process."}),"\n",(0,i.jsx)(n.li,{children:"We have established general templates in React, which serve as a solid starting point for any new project."}),"\n",(0,i.jsx)(n.li,{children:"This approach reduces the time spent on initial configurations, allowing us to concentrate more on the project's unique aspects."}),"\n",(0,i.jsx)(n.li,{children:"For instance, the development of the pools website's dashboard page in React is estimated to take approximately 22 hours, compared to 74 hours in Angular."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhanced-website-performance",children:"Enhanced Website Performance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"React's utilization of a virtual DOM offers better performance compared to Angular's real DOM approach."}),"\n",(0,i.jsx)(n.li,{children:"This leads to faster rendering times and an overall smoother user experience."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"better-management-of-framework-updates",children:"Better Management of Framework Updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"React's backward compatibility ensures that new versions support both the old and new syntax and methods."}),"\n",(0,i.jsx)(n.li,{children:"This compatibility allows for a gradual migration process without the need for immediate and comprehensive codebase changes, unlike Angular."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"reacts-growing-popularity",children:"React's Growing Popularity"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In recent years, React has emerged as one of the most popular frameworks in web application development."}),"\n",(0,i.jsx)(n.li,{children:"This popularity translates to a larger pool of developers and teams proficient in React, along with an abundance of support documentation and libraries."}),"\n",(0,i.jsx)(n.li,{children:"Statistics indicate React's dominance over Angular in terms of developer preference and usage."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"utilizing-atomic-components-in-react",children:"Utilizing Atomic Components in React"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Our approach involves the generation of large and complex components based on smaller, reusable components, each serving specific functions."}),"\n",(0,i.jsx)(n.li,{children:"This method not only reduces the number of components in the code but also standardizes the website's pages."}),"\n",(0,i.jsxs)(n.li,{children:["The objective is to create a ",(0,i.jsx)(n.code,{children:"defactor-ui-kit"}),", a front-end library containing components for use across various Defactor projects."]}),"\n",(0,i.jsxs)(n.li,{children:["This library ensures consistency in user interfaces and interactions, and simplifies maintenance. Any updates to a component in the ",(0,i.jsx)(n.code,{children:"defactor-ui-kit"})," will automatically reflect across all projects utilizing that component, without additional code alterations."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Authored by: Ing. Angelo Castro Gamboa"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);