"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8604],{3929:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=o(5893),l=o(1151);const n={id:"smart-contract-erc20-collateral-pool",title:"Introduction",sidebar_position:1,tags:["ERC20","Collateral Pool"]},r=void 0,i={id:"smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool",title:"Introduction",description:"The ERC20CollateralPool smart contract, designed for EVM based blockchains, manages pools of collateralized loans using ERC20 standard token. It facilitates lending, borrowing, and reward distribution in a decentralized finance (DeFi) ecosystem.",source:"@site/docs/smart-contracts/erc20-collateral-pool-contract/introduction.md",sourceDirName:"smart-contracts/erc20-collateral-pool-contract",slug:"/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool",permalink:"/documentation/docs/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/smart-contracts/erc20-collateral-pool-contract/introduction.md",tags:[{label:"ERC20",permalink:"/documentation/docs/tags/erc-20"},{label:"Collateral Pool",permalink:"/documentation/docs/tags/collateral-pool"}],version:"current",sidebarPosition:1,frontMatter:{id:"smart-contract-erc20-collateral-pool",title:"Introduction",sidebar_position:1,tags:["ERC20","Collateral Pool"]},sidebar:"docSidebar",previous:{title:"ERC20 Collateral Pool Contract",permalink:"/documentation/docs/category/erc20-collateral-pool-contract"},next:{title:"Technical Aspects",permalink:"/documentation/docs/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool-technical-aspects"}},s={},c=[{value:"Pool",id:"pool",level:2},{value:"Roles",id:"roles",level:2},{value:"admin",id:"admin",level:3},{value:"client",id:"client",level:3},{value:"lend",id:"lend",level:4},{value:"borrow",id:"borrow",level:4},{value:"repay",id:"repay",level:4},{value:"claim rewards and claim multiple",id:"claim-rewards-and-claim-multiple",level:4},{value:"claim unliquidated collateral",id:"claim-unliquidated-collateral",level:4}];function d(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"ERC20CollateralPool"})," smart contract, designed for EVM based blockchains, manages pools of collateralized loans using ",(0,a.jsx)(t.code,{children:"ERC20"})," standard token. It facilitates lending, borrowing, and reward distribution in a decentralized finance (DeFi) ecosystem."]}),"\n",(0,a.jsx)(t.h2,{id:"pool",children:"Pool"}),"\n",(0,a.jsx)(t.p,{children:"The pool is a structure that keeps track of lenders, borrowers, and total balance for USDC and collateral tokens."}),"\n",(0,a.jsx)(t.p,{children:"Some important characteristics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["It has an end time, referred to in this document as the ",(0,a.jsx)(t.code,{children:"active period time of the pool"}),". Once this period concludes, neither lending nor borrowing are allowed."]}),"\n",(0,a.jsx)(t.li,{children:"The pool has a variable reward rate that depends on the volume of lending and borrowing transactions during its active period."}),"\n",(0,a.jsxs)(t.li,{children:["This pool is primarily designed to support USDC tokens for lending and borrowing, but it can accommodate any other contract that adheres to the ",(0,a.jsx)(t.code,{children:"ERC20"})," token standard with a ",(0,a.jsx)(t.code,{children:"token precision of 6"}),". It also supports ",(0,a.jsx)(t.code,{children:"ERC20"})," tokens as collateral, regardless of precision."]}),"\n",(0,a.jsxs)(t.li,{children:["The pool has a ",(0,a.jsx)(t.code,{children:"collateral token percentage"})," that is used to calculate the amount of collateral token a borrower will need to provide to borrow from the pool."]}),"\n",(0,a.jsx)(t.li,{children:"A pool can only have one type of collateral token."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"roles",children:"Roles"}),"\n",(0,a.jsxs)(t.p,{children:["The smart contract caters to two types of users: the administrator (",(0,a.jsx)(t.code,{children:"admin"}),"), responsible for managing the contract by pausing it and overseeing pool-related duties; and the pool users (",(0,a.jsx)(t.code,{children:"client"}),"), who can lend, borrow, repay, and claim rewards."]}),"\n",(0,a.jsx)(t.h3,{id:"admin",children:"admin"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The address specified in the contract initialization will be the admin for the contract."}),"\n",(0,a.jsx)(t.li,{children:"Will be responsible for pausing and un-pausing the contract if any risk is detected."}),"\n",(0,a.jsx)(t.li,{children:"Can add new pools after the initialization of the contract, announce a pool edit, commit the edit or cancel the edit."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool Initialize",src:o(3381).Z+"",width:"1792",height:"2240"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool Create Pool",src:o(1208).Z+"",width:"2208",height:"3616"})}),"\n",(0,a.jsx)(t.h3,{id:"client",children:"client"}),"\n",(0,a.jsx)(t.p,{children:"The contract provides a set of actions for clients, enabling them to interact with it. Clients can lend, borrow, repay, claim rewards, and retrieve unliquidated collateral, among other functionalities."}),"\n",(0,a.jsx)(t.h4,{id:"lend",children:"lend"}),"\n",(0,a.jsx)(t.p,{children:"When the user lends their money to the pool, the contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. A registry is added to the pool to represent the amount of USDC tokens the user have lent to the pool."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool Lend",src:o(1775).Z+"",width:"2560",height:"4512"})}),"\n",(0,a.jsx)(t.h4,{id:"borrow",children:"borrow"}),"\n",(0,a.jsx)(t.p,{children:"When the user borrows from a given pool, the contract asks for a certain amount of collateral assets as a safe mechanism to ensure the borrower will come back and pay the loan; otherwise, the pool will use the collateralized amount to pay the loan, and the rest will be liquidated. To avoid getting liquidated, the borrower must pay the loan with interest (due to the time the pool has lent money) before the pool ends."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool Borrow",src:o(2667).Z+"",width:"2564",height:"5516"})}),"\n",(0,a.jsx)(t.h4,{id:"repay",children:"repay"}),"\n",(0,a.jsxs)(t.p,{children:["The borrower can pay the loan anytime before the pool's time ends to avoid getting liquidated. The contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. The interest and the amount of USDC tokens to be paid is calculated by the contract, so the borrower will have to return the exact amount of USDC tokens lent plus an interest of the amount the loan has been taken in terms of time. Every pool has a different interest rate that is calculated based on the pool the user is interacting with. The interest to pay is calculated as ",(0,a.jsx)(t.code,{children:"(pool.interest * borrowObj.amount * (block.timestamp - borrowObj.borrowTime)) / (ONE_YEAR * HOUNDRED)"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"To break this formula down into something easier to read, we can say: the amount to pay is the interest accrued on a borrowed amount over a period of time, considering the interest rate of the pool."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool Repay",src:o(1066).Z+"",width:"2544",height:"6112"})}),"\n",(0,a.jsx)(t.h4,{id:"claim-rewards-and-claim-multiple",children:"claim rewards and claim multiple"}),"\n",(0,a.jsx)(t.p,{children:"The pool allows lenders to claim rewards based on the amount they have lent plus a reward per token, which is calculated based on the lend and borrow activity on the pool. To do so, the pool must have finished the active period."}),"\n",(0,a.jsxs)(t.p,{children:["The other action the user can interact with is ",(0,a.jsx)(t.code,{children:"claim multiple"}),", it's the same as claim rewards with a minor difference. Instead of only claiming the rewards for a lending position, it'll claim the reward for all the lending positions the user has on the specified pool."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool_claim_rewards",src:o(3037).Z+"",width:"2496",height:"5192"})}),"\n",(0,a.jsx)(t.h4,{id:"claim-unliquidated-collateral",children:"claim unliquidated collateral"}),"\n",(0,a.jsx)(t.p,{children:"To mitigate the risk of fund loss for lenders and maintain the health of the pool, collateral tokens are required from every borrower. In the event of a borrower's default on the loan, the pool will utilize the collateral to cover it, and any remaining amount will be liquidated. If there is a surplus after liquidation, the borrower can reclaim it based on the value of their collateral."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"It's important to note that there is always a risk of fund loss associated with market volatility for the collateralized assets."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ERC20CollateralPool Claim Unliquidated Collateral",src:o(6140).Z+"",width:"2708",height:"5558"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2667:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_borrow-9e7af8832c5fea95f86c6b8e6df42716.png"},3037:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_claim_rewards-3a6b1140da3f2c506306676b566982ef.png"},6140:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_claimunliquidatedcollateral-4d667d99148080d11ee93de399af2e21.png"},1208:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_createnewpool-8df564e70069c6b1a24e890d0a945bb3.png"},3381:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_initialize-75b8556378e63d7c7386c1457df2922a.png"},1775:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_lend-9efaad1d0f52af45ee2b8857e80c412e.png"},1066:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ERC20CollateralPool_repay-18a2de81b40241619cb25777dcd4ee8d.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>r});var a=o(7294);const l={},n=a.createContext(l);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);