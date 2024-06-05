"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4744],{520:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=e(4848),a=e(8453);const r={title:"Collateral Pool Contract",sidebar_position:2},s=void 0,i={id:"pools/back-end/sdk/collateral-pool",title:"Collateral Pool Contract",description:"The Defactor SDK provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the Collateral Pool Contract and ERC20CollateralPool class, which implements the fundamental methods to interact with the contract in question.",source:"@site/docs/pools/back-end/sdk/collateral-pool.md",sourceDirName:"pools/back-end/sdk",slug:"/pools/back-end/sdk/collateral-pool",permalink:"/docs/pools/back-end/sdk/collateral-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/pools/back-end/sdk/collateral-pool.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Collateral Pool Contract",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Counterparty Pool Contract",permalink:"/docs/pools/back-end/sdk/counterparty-pool"},next:{title:"Introduction",permalink:"/docs/pools/front-end-ui/"}},l={},c=[{value:"Methods Available",id:"methods-available",level:2},{value:"Examples",id:"examples",level:2},{value:"Lending to a Pool",id:"lending-to-a-pool",level:3},{value:"Borrowing from a Pool",id:"borrowing-from-a-pool",level:3}];function d(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/introduction/software-development-kit",children:"Defactor SDK"})," provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the ",(0,t.jsx)(n.a,{href:"/docs/pools/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool",children:"Collateral Pool Contract"})," and ",(0,t.jsx)(n.code,{children:"ERC20CollateralPool"})," class, which implements the fundamental methods to interact with the contract in question."]}),"\n",(0,t.jsx)(n.h2,{id:"methods-available",children:"Methods Available"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Returns the total USDC fees collected.\nasync USDC_FEES_COLLECTED(): Promise<bigint>                                                                                                \n\n// Returns the USDC contract address.\nasync getUsdc(): Promise<string>                                                                                                    \n\n// Returns the total number of pools.        \nasync getTotalPools(): Promise<bigint>                                                                                                      \n\n// Returns the pool with the given ID.\nasync getPool(poolId: bigint): Promise<Pool>  \n\n// Returns a list of pools within the given range.\nasync getPools(offset: bigint, limit: bigint): Promise<Array<Pool>>          \n\n// Returns the total amount of lending for a given pool and address.\nasync getTotalLending(poolId: bigint, address: string): Promise<bigint>                                    \n\n// Returns a specific loan.\nasync getLoan(poolId: bigint, address: string, lendingId: bigint): Promise<Lend>       \n\n// Adds a new pool.\nasync addPool(pool: PoolInput): Promise<ethers.ContractTransaction | ethers.TransactionResponse>               \n\n// Lends a certain amount to a pool.\nasync lend(poolId: bigint, amount: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>          \n\n// Borrows a certain amount from a pool.\nasync borrow(poolId: bigint, amount: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                 \n\n// Returns a specific borrow.\nasync getBorrow(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<Borrow>                        \n\n// Calculates the amount of collateral tokens for a given amount.\nasync calculateCollateralTokenAmount(poolId: bigint, amount: bigint): Promise<bigint>                      \n\n// Repays a borrow.\nasync repay(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>   \n\n// Returns information about the liquidation of a pool.\nasync getLiquidationInfo(pool: Pool): Promise<PoolLiquidationInfo>                    \n\n// Liquidates a pool.\nasync liquidatePool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                       \n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Import the library and instantiate the ",(0,t.jsx)(n.code,{children:"SelfProvider"})," class with the ",(0,t.jsx)(n.code,{children:"ERC20CollateralPool"})," contract."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { ERC20CollateralPool, SelfProvider } from "@defactor/defactor-sdk";\n\nconst providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(\n  ERC20CollateralPool,\n  contractConfig.contractAddress!, // loaded from config file\n  contractConfig.providerUrl!, // loaded from config file\n  contractConfig.privateKey! // loaded from config file\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"lending-to-a-pool",children:"Lending to a Pool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const poolId = 1;\nconst amount = BigInt(100_000000); // 100 USDC\n\nconst lendTx = await providerInstance.lend(poolId, amount);\nconsole.log(lendTx);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"borrowing-from-a-pool",children:"Borrowing from a Pool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const poolId = 1;\nconst amount = BigInt(10_000000); // 10 USDC\n\nconst borrowTx = await providerInstance.borrow(poolId, amount);\nconsole.log(borrowTx);\n"})})]})}function p(o={}){const{wrapper:n}={...(0,a.R)(),...o.components};return n?(0,t.jsx)(n,{...o,children:(0,t.jsx)(d,{...o})}):d(o)}},8453:(o,n,e)=>{e.d(n,{R:()=>s,x:()=>i});var t=e(6540);const a={},r=t.createContext(a);function s(o){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function i(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(a):o.components||a:s(o.components),t.createElement(r.Provider,{value:n},o.children)}}}]);