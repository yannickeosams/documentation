"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[788],{5139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var l=t(5893),o=t(1151);const a={id:"smart-contract-erc20-collateral-pool-example",title:"Example",sidebar_position:3,tags:["Borrow","Lend"]},r=void 0,i={id:"smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-example",title:"Example",description:"In-depth Actions",source:"@site/docs/smart-contracts/ERC20CollateralPool/example.md",sourceDirName:"smart-contracts/ERC20CollateralPool",slug:"/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-example",permalink:"/documentation/docs/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-example",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/smart-contracts/ERC20CollateralPool/example.md",tags:[{label:"Borrow",permalink:"/documentation/docs/tags/borrow"},{label:"Lend",permalink:"/documentation/docs/tags/lend"}],version:"current",sidebarPosition:3,frontMatter:{id:"smart-contract-erc20-collateral-pool-example",title:"Example",sidebar_position:3,tags:["Borrow","Lend"]},sidebar:"docSidebar",previous:{title:"Technical Aspects",permalink:"/documentation/docs/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-technical-aspects"}},s={},d=[{value:"In-depth Actions",id:"in-depth-actions",level:2},{value:"Pool lifecycle",id:"pool-lifecycle",level:2},{value:"Event #1 (contract initialization)",id:"event-1-contract-initialization",level:3},{value:"Event #2 (lending)",id:"event-2-lending",level:3},{value:"Event #3 (borrowing)",id:"event-3-borrowing",level:3},{value:"Event #4 (repaying)",id:"event-4-repaying",level:3},{value:"Event #5 (claiming)",id:"event-5-claiming",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"in-depth-actions",children:"In-depth Actions"}),"\n",(0,l.jsx)(n.p,{children:"The happy path for this Smart Contract begins with the initialization of a pool and then a lender engages with the contract to lend money to the pool to allow a borrower interacts with the contract by borrowing according to the amount of money they need from the pool. A question that may arise in this point is what happen if the borrower decide to steal the loan (do not repay it), to avoid this scenario the borrower must provide collateral tokens that support the loan they are taking."}),"\n",(0,l.jsx)(n.p,{children:"The borrower is required to repay the loan with interest before the pool's term concludes to avoid liquidation. If the borrower fails to repay the loan, the pool will utilize the collateral to cover the outstanding amount, and the surplus will be liquidated. Any remaining funds can be claimed by the borrower based on the value of their collateral token."}),"\n",(0,l.jsx)(n.p,{children:"Once the pool reaches the end of its active period, the lenders can claim their rewards."}),"\n",(0,l.jsx)(n.p,{children:"Every time someone lends, a function runs in the background to update some variables values of the contract that matter to the lenders."}),"\n",(0,l.jsxs)(n.p,{children:["This function is responsible for updating the following variables: ",(0,l.jsx)(n.code,{children:"rewardPerToken"}),", ",(0,l.jsx)(n.code,{children:"rewardRate"}),", and ",(0,l.jsx)(n.code,{children:"lastUpdated"}),". All of them are used to calculate the rewards for the lenders. This is how this function looks:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"pool.rewardPerToken += ((block.timestamp - pool.lastUpdated) *\n            pool.rewardRate);\npool.rewardRate =\n    ((pool.borrowed - pool.repaid) * pool.interest * 1e18) /\n    (pool.lended * ONE_YEAR * HOUNDRED);\npool.lastUpdated = uint48(block.timestamp);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["As an example, the first time someone lends to the pool, the ",(0,l.jsx)(n.code,{children:"rewardPerToken"})," will be ",(0,l.jsx)(n.code,{children:"0"}),", the ",(0,l.jsx)(n.code,{children:"rewardRate"})," will be the interest rate of the pool, and the ",(0,l.jsx)(n.code,{children:"lastUpdated"})," will be the timestamp of the block when the first lender lends to the pool. The next time someone lends to the pool, the ",(0,l.jsx)(n.code,{children:"rewardPerToken"})," will be updated based on the time passed since the last time someone lent to the pool, the ",(0,l.jsx)(n.code,{children:"rewardRate"})," will be updated based on the amount of money borrowed, and the ",(0,l.jsx)(n.code,{children:"lastUpdated"})," will be updated to the timestamp of the block when the last lender lends to the pool, and so forth until the pool finishes its active time."]}),"\n",(0,l.jsx)(n.p,{children:"Lets consider the following example to better understand how this flow works:"}),"\n",(0,l.jsx)(n.h2,{id:"pool-lifecycle",children:"Pool lifecycle"}),"\n",(0,l.jsxs)(n.p,{children:["Event #1 -> ",(0,l.jsx)(n.em,{children:"Contract is initialized with one pool having gold as collateral and USDC as the lending token"}),".\nEvent #2 -> Alice lends $100k to the pool.\nEvent #3 -> Bob borrows $10k from the pool.\nEvent #4 -> After 10 days, Bob repays the loan.\nEvent #5 -> After 30 days, Alice can claims her rewards."]}),"\n",(0,l.jsx)(n.p,{children:"In this example, the information is focus on how the contract behaves in the previous events."}),"\n",(0,l.jsx)(n.h3,{id:"event-1-contract-initialization",children:"Event #1 (contract initialization)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The contract is initialized by setting the admin, the USDC token, and the pools."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"event-2-lending",children:"Event #2 (lending)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Only existing and active pools will allow the process to go through the rest of the flow."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The contract will ask for USDC token approval to transfer the USDC tokens from the user's wallet to the pool."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The update reward method is called."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A lending record is added to save the lending information."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["An event ",(0,l.jsx)(n.code,{children:"LendEvent"})," is emitted."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["This is how it looks before and after the ",(0,l.jsx)(n.code,{children:"lend"})," function call."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Pool before lending:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "lended": 0,\n  "borrowed": 0,\n  "repaid": 0,\n  "rewards": 0,\n  "collateralTokenAmount": 0,\n  "liquidatedCollateral": 0,\n  "collateralTokenAmountAtLiquidation": 0,\n  "rewardPerToken": 0,\n  "rewardRate": 0,\n  "lastUpdated": 0,\n  "endTime": 1704920451,\n  "collateralDetails": {\n    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",\n    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",\n    "collateralTokenFactor": 115,\n    "collateralTokenPercentage": 60\n  },\n  "interest": 10,\n  "liquidated": false\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"Pool after lending:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "lended": 100000000000,\n  "borrowed": 0,\n  "repaid": 0,\n  "rewards": 0,\n  "collateralTokenAmount": 0,\n  "liquidatedCollateral": 0,\n  "collateralTokenAmountAtLiquidation": 0,\n  "rewardPerToken": 0,\n  "rewardRate": 0,\n  "lastUpdated": 1702328455,\n  "endTime": 1704920451,\n  "collateralDetails": {\n    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",\n    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",\n    "collateralTokenFactor": 115,\n    "collateralTokenPercentage": 60\n  },\n  "interest": 10,\n  "liquidated": false\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["There are some attributes to track like ",(0,l.jsx)(n.code,{children:"lended"})," and ",(0,l.jsx)(n.code,{children:"lastUpdated"})," that are updated but not only them were updated the variables ",(0,l.jsx)(n.code,{children:"rewardPerToken"})," and ",(0,l.jsx)(n.code,{children:"rewardRate"})," were also updated, what happened is that in the first call when someone lends, the current values of the pool are making them to have a value of 0 which seems like there were no update on them."]}),"\n",(0,l.jsx)(n.h3,{id:"event-3-borrowing",children:"Event #3 (borrowing)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Only existing and active pools will allow the process to go through the rest of the flow."}),"\n",(0,l.jsxs)(n.p,{children:["To be able to borrow, the pool should have enough funds to cover the loan which should be ",(0,l.jsx)(n.code,{children:"lended + repaid + rewards - borrowed) < amount_to_borrow"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The contract will calculate the collateral based on the amount to borrow and the collateral price using the ",(0,l.jsx)(n.code,{children:"chainlink"})," price feed (oracle), once all values are calculated, the contract will ask of token transfer from the collateral address, for this example it can be GOLD and SILVER but the contract allows any contract that follows the ERC20 standard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When the collateral tokens are transferred to the contract, a borrowing record is added to save the borrowing information and some pool values updates will occur like the amount the pool has lended and the new total collateral token amount the pool has."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A last safe USDC token transfer is made to the borrower which represent the amount the pool is lending to the borrower."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The update reward method is called."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["An event ",(0,l.jsx)(n.code,{children:"BorrowEvent"})," is emitted."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["This is how it looks after the ",(0,l.jsx)(n.code,{children:"borrow"})," function call."]}),"\n",(0,l.jsx)(n.p,{children:"The before pool state is the same as the last object."}),"\n",(0,l.jsx)(n.p,{children:"Pool after borrowing:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "lended": "100000000000",\n  "borrowed": "10000000000",\n  "repaid": "0",\n  "rewards": "0",\n  "collateralTokenAmount": "310005811536712244302",\n  "liquidatedCollateral": "0",\n  "collateralTokenAmountAtLiquidation": "0",\n  "rewardPerToken": "0",\n  "rewardRate": "317097919",\n  "lastUpdated": 1702329114,\n  "endTime": 1704921108,\n  "collateralDetails": {\n    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",\n    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",\n    "collateralTokenFactor": 115,\n    "collateralTokenPercentage": 60\n  },\n  "interest": 10,\n  "liquidated": false\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"event-4-repaying",children:"Event #4 (repaying)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Only existing and active pools will allow the process to go through the rest of the flow."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To repay a loan there are two main criteria the contract will check to allow the borrower to repay it, the first one is to check if the pool is still in its active period, if not, then the pool will use the collateral token to covert any outstanding amount, the second validation is if the loan has not been already paid."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Once the validations are passed, the contract will calculate the interest for the lent amount the borrow will need to pay."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The contract will ask for USDC token approval to transfer the USDC tokens from the user's wallet to the pool once it's finished the contract will return the collateral tokens to the borrower."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The update reward method is called."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["An event ",(0,l.jsx)(n.code,{children:"RepayEvent"})," is emitted."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The before pool state is the same as the last object."}),"\n",(0,l.jsx)(n.p,{children:"Pool after repaying:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "lended": "100000000000",\n  "borrowed": "10000000000",\n  "repaid": "10000000000",\n  "rewards": "27397355",\n  "collateralTokenAmount": "0",\n  "liquidatedCollateral": "0",\n  "collateralTokenAmountAtLiquidation": "0",\n  "rewardPerToken": "273973553309757",\n  "rewardRate": "0",\n  "lastUpdated": 1703196299,\n  "endTime": 1704924290,\n  "collateralDetails": {\n    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",\n    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",\n    "collateralTokenFactor": 115,\n    "collateralTokenPercentage": 60\n  },\n  "interest": 10,\n  "liquidated": false\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"Now the repaid total amount is updated after the user repays the loan leaving the pool with the full lended amount available to lend."}),"\n",(0,l.jsx)(n.h3,{id:"event-5-claiming",children:"Event #5 (claiming)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Only existing and active pools will allow the process to go through the rest of the flow."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"In order to claim the rewards, the pool active period should be over and not completed (liquidated collateral equal to cero and collateral token amount different from 0 and not liquidated)."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Once the validations are done, then the contract will pay the rewards that belongs to the lender. This is calculated with the following formula:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"lent amount + ( ( reward per token - reward per token ignored ) * lent amount ) / 1e18 )\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["An event ",(0,l.jsx)(n.code,{children:"ClaimRewardsEvent"})," is emitted."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The before pool state is the same as the last object."}),"\n",(0,l.jsx)(n.p,{children:"Pool after claiming:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "lended": "100000000000",\n  "borrowed": "10000000000",\n  "repaid": "10000000000",\n  "rewards": "27397355",\n  "collateralTokenAmount": "0",\n  "liquidatedCollateral": "0",\n  "collateralTokenAmountAtLiquidation": "0",\n  "rewardPerToken": "273973553309757",\n  "rewardRate": "0",\n  "lastUpdated": 1703199699,\n  "endTime": 1704927690,\n  "collateralDetails": {\n    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",\n    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",\n    "collateralTokenFactor": 115,\n    "collateralTokenPercentage": 60\n  },\n  "interest": 10,\n  "liquidated": false\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"It's the same, that's because the only data that is updated is the lending information and after claim, this object looks like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "amount": "100000000000",\n  "rewardPerTokenIgnored": "0",\n  "claimed": true\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Since no other user lent money to the pool the ",(0,l.jsx)(n.code,{children:"rewardPerTokenIgnored"})," for Alice is 0 allowing her to claim the full reward."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var l=t(7294);const o={},a=l.createContext(o);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);