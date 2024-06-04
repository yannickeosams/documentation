"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[2569],{8923:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(4848),a=n(8453);const s={title:"Counterparty Pool Contract",sidebar_position:1},i=void 0,r={id:"pools/back-end-api/sdk/counterparty-pool",title:"Counterparty Pool Contract",description:"The Defactor SDK provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the CounterParty Pool Contract and Pools class, which implements the fundamental methods to interact with the contract in question.",source:"@site/docs/pools/back-end-api/sdk/counterparty-pool.md",sourceDirName:"pools/back-end-api/sdk",slug:"/pools/back-end-api/sdk/counterparty-pool",permalink:"/docs/pools/back-end-api/sdk/counterparty-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/pools/back-end-api/sdk/counterparty-pool.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Counterparty Pool Contract",sidebar_position:1},sidebar:"docSidebar",previous:{title:"SDK",permalink:"/docs/category/sdk"},next:{title:"Collateral Pool Contract",permalink:"/docs/pools/back-end-api/sdk/collateral-pool"}},c={},l=[{value:"Constants",id:"constants",level:2},{value:"Methods Available",id:"methods-available",level:2},{value:"Examples",id:"examples",level:2},{value:"Initialize the SelfProvider",id:"initialize-the-selfprovider",level:3},{value:"Access to constants",id:"access-to-constants",level:3},{value:"Create a pool",id:"create-a-pool",level:3},{value:"Commit to a pool",id:"commit-to-a-pool",level:3},{value:"Get a pool",id:"get-a-pool",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.a,{href:"/docs/introduction/software-development-kit",children:"Defactor SDK"})," provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the ",(0,t.jsx)(o.a,{href:"/docs/pools/smart-contracts/pools-contract/smart-contract-erc20-collateral-pool",children:"CounterParty Pool Contract"})," and ",(0,t.jsx)(o.code,{children:"Pools"})," class, which implements the fundamental methods to interact with the contract in question."]}),"\n",(0,t.jsx)(o.h2,{id:"constants",children:"Constants"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"INTEREST_DECIMAL_PLACES //  Use to adjust the decimals in the interest rate calculation.\nPOOL_FEE                //  The required amount of USDC to create a pool.\nCOLLECT_POOL_MAX_SECS   //  Maximum unix epoch time for collecting funds from a pool.\nCOLLECT_POOL_MAX_DAYS   //  Maximum days for collecting funds from a pool.\nMIN_POOL_CLOSED_SECS    //  Minimum unix epoch time before a pool can be archived\nMIN_POOL_CLOSED_DAYS    //  Minimum days before a pool can be archived\n"})}),"\n",(0,t.jsx)(o.h2,{id:"methods-available",children:"Methods Available"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"// Returns the USDC address configured as the base token.\nasync USD_ADDRESS(): Promise<string> \n\n// Returns if the contract is paused.\nasync isPaused(): Promise<boolean> \n\n// Returns the pool with the given poolId.\nasync getPool(poolId: bigint): Promise<Pool>\n\n// Returns a list of pools within the given range.\nasync getPools(offset: bigint, limit: bigint): Promise<Pagination<Pool>> \n\n// Pause the contract\nasync pause(): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Unpause the contract\nasync unpause(): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Create a new pool\nasync createPool(pool: PoolInput): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Allows the owner of the pool collects the committed amount and active the pool\nasync collectPool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Allows the owner of the pool deposits the rewards\nasync depositRewards(\n  poolId: bigint,\n  amount: bigint\n): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Allows to close the pool\nasync closePool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Allows to archive the pool\nasync archivePool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Allows the lender (investor) to commit the specific amount to the pool\nasync commitToPool(\n  poolId: bigint,\n  amount: bigint\n): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Transfer the committed amount to the pool by the lender (investor)\nasync uncommitFromPool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n\n// Allows to the lender (investor) to claim their rewards\nasync claim(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse> \n"})}),"\n",(0,t.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(o.h3,{id:"initialize-the-selfprovider",children:"Initialize the SelfProvider"}),"\n",(0,t.jsxs)(o.p,{children:["Import the library and instantiate the ",(0,t.jsx)(o.code,{children:"SelfProvider"})," class with the ",(0,t.jsx)(o.code,{children:"Pools"})," contract."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'import { Pools, SelfProvider } from "@defactor/defactor-sdk";\n\nconst provider = new SelfProvider.SelfProvider<Pools>(\n  Pools,\n  contractConfig.contractAddress, // loaded from config file\n  contractConfig.providerUrl, // loaded from config file\n  contractConfig.AlicePrivateKey // loaded from config file\n)\n'})}),"\n",(0,t.jsx)(o.h3,{id:"access-to-constants",children:"Access to constants"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"const poolCreationFee: bigint = provider.contract.POOL_FEE\n"})}),"\n",(0,t.jsx)(o.h3,{id:"create-a-pool",children:"Create a pool"}),"\n",(0,t.jsx)(o.p,{children:"In the following example Alice will create a pool with a soft cap of 100 USDC, a hard cap of 600 USDC, a minimum APR of 50 USDC and as collateral 15 of GOLD."}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"To successfully create the pool, the contract must have the allowance to transfer the fee in USDC and the collateral tokens."})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"await provider.contract.createPool({\n    softCap: BigInt(100_000000),    // 100 USDC\n    hardCap: BigInt(600_000000),    // 600 USDC\n    deadline: BigInt(1734652800),   // 2024-12-20T00:00:00.000Z\n    minimumAPR: BigInt(50_000000),  // 50 USDC\n    collateralTokens: [\n        {\n            contractAddress: contractConfig.goldTokenAddress,  // loaded from config file\n            amount: BigInt(15_000000), // 15 GOLD\n            id: null\n        }\n    ]\n})\n"})}),"\n",(0,t.jsx)(o.h3,{id:"commit-to-a-pool",children:"Commit to a pool"}),"\n",(0,t.jsx)(o.p,{children:"In the following example Bob commits 200 USDC to Alice's pool."}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"To successfully commit to the pool, the contract must have the allowance to transfer the amount of USDC."})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"const poolId = BigInt(0)\nconst amount = BigInt(200_000000)   // 200 USDC\n\nconst provider = new SelfProvider.SelfProvider<Pools>(\n  Pools,\n  contractConfig.contractAddress, // loaded from config file\n  contractConfig.providerUrl,     // loaded from config file\n  contractConfig.BobPrivateKey    // loaded from config file\n);\n\nawait provider.contract.commitToPool(poolId, amount)\n"})}),"\n",(0,t.jsx)(o.h3,{id:"get-a-pool",children:"Get a pool"}),"\n",(0,t.jsx)(o.p,{children:"Get a pool using the sequential id."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"const poolId = BigInt(0)\nconst pool = await provider.contract.getPool(poolId)\n\nconsole.log(pool)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Example output:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"{\n  softCap: 100000000n,\n  hardCap: 600000000n,\n  totalCommitted: 0n,\n  totalRewards: 0n,\n  rewardsPaidOut: 0n,\n  createdAt: 1717372800n,\n  deadline: 1734652800n,\n  minimumAPR: 50000000n,\n  closedTime: 0n,\n  poolOwner: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',\n  poolStatus: 'CREATED',\n  collateralTokens: [\n    {\n      contractAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',\n      amount: 15000000n\n      id: 0n\n    }\n  ]\n}\n"})})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>r});var t=n(6540);const a={},s=t.createContext(a);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);