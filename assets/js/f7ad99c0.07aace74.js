"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[166],{552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(4848),r=n(8453);const i={title:"Open-Source SDK",sidebar_position:4},c=void 0,s={id:"introduction/software-development-kit",title:"Open-Source SDK",description:"The Defactor SDK is a TypeScript-based Node.js library designed to streamline the process of instantiating contracts and enhancing the seamless interaction with Defactor contracts.",source:"@site/docs/introduction/software-development-kit.md",sourceDirName:"introduction",slug:"/introduction/software-development-kit",permalink:"/docs/introduction/software-development-kit",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/introduction/software-development-kit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Open-Source SDK",sidebar_position:4},sidebar:"docSidebar",previous:{title:"Defactor Tech Stack",permalink:"/docs/introduction/tech-stack"},next:{title:"Open Source UI-Kit",permalink:"/docs/introduction/react-components"}},a={},l=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Importing the SDK",id:"importing-the-sdk",level:3},{value:"Instantiating the SDK",id:"instantiating-the-sdk",level:3},{value:"Interacting with the SDK",id:"interacting-with-the-sdk",level:3},{value:"Integrations with the contracts",id:"integrations-with-the-contracts",level:3},{value:"Examples",id:"examples",level:2},{value:"Initialize the ERC20",id:"initialize-the-erc20",level:3},{value:"Approve an amount of ERC20 tokens",id:"approve-an-amount-of-erc20-tokens",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The Defactor SDK is a TypeScript-based Node.js library designed to streamline the process of instantiating contracts and enhancing the seamless interaction with Defactor contracts."}),"\n",(0,o.jsx)(t.p,{children:"Tailored for developers engaged in blockchain or cryptocurrency operations, this SDK offers interfaces for communicating with smart contracts on Ethereum-based networks. By abstracting complexities, developers can concentrate on their application's business logic, free from the intricacies of underlying blockchain technology."}),"\n",(0,o.jsxs)(t.p,{children:["You can find the source code for this repository in ",(0,o.jsx)(t.a,{href:"https://github.com/defactor-com/sdk/",children:"github.com/defactor-com/sdk"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Support for cjs, es, and esm modules."}),"\n",(0,o.jsx)(t.li,{children:"Developed using TypeScript for enhanced type safety and clarity."}),"\n",(0,o.jsxs)(t.li,{children:["Seamless integration with ",(0,o.jsx)(t.a,{href:"/docs/pools/back-end/sdk/collateral-pool",children:(0,o.jsx)(t.code,{children:"ERC20CollateralPool"})})," and ",(0,o.jsx)(t.a,{href:"/docs/pools/back-end/sdk/counterparty-pool",children:(0,o.jsx)(t.code,{children:"Pools"})}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Well-defined interfaces that accurately model the Defactor contracts for easy interaction and integration."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["This library is built on top of ",(0,o.jsx)(t.a,{href:"https://docs.ethers.org/v6/api/contract/",children:(0,o.jsx)(t.code,{children:"ether@6.x.x"})})," to provide a simple and easy to use interface to interact with the Defactor contracts."]}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# yarn\nyarn add @defactor/defactor-sdk\n\n# npm\nnpm install @defactor/defactor-sdk\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.h3,{id:"importing-the-sdk",children:"Importing the SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'import { DefactorSDK } from "@defactor/defactor-sdk";\n'})}),"\n",(0,o.jsx)(t.p,{children:"This library is built to provide a simple and easy to use interface to interact with the Defactor contracts in two different options:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"SelfProvider"}),": For developers who prefer using their own ",(0,o.jsx)(t.strong,{children:"digital signature provider"})," to interact with Defactor contracts. In this mode, developers must furnish the private key of the account intended for blockchain interaction. In order to effectuate this integration, the developer team must conscientiously consider the security protocols implemented to safeguard their private key from exposure or compromise in any manner."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"AssistedProvider"}),": Geared towards developers seeking to interact with Defactor contracts without providing their private key. In this mode, the Defactor library exposes contract methods similar to ",(0,o.jsx)(t.code,{children:"SelfProvider"}),", but instead of signing transactions, it returns the transaction object for developers to sign. Other contract-interaction functions not requiring signature are seamlessly handled by the SDK."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"instantiating-the-sdk",children:"Instantiating the SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"// Collateral Pool Contract\nconst provider = new SelfProvider(\n  DefactorSDK.ERC20CollateralPool, // contract constructor\n  ERC20_COLLATERAL_POOL_ETH_ADDRESS, // contract address\n  providerUrl, // provider url (alchemy, infura, etc)\n  ADMIN_PRIVATE_KEY // private key\n);\n\n// Pools Contract\nconst provider = new SelfProvider(\n  DefactorSDK.Pools, // contract constructor\n  POOLS_ETH_ADDRESS, // contract address\n  providerUrl, // provider url (alchemy, infura, etc)\n  ADMIN_PRIVATE_KEY // private key\n);\n"})}),"\n",(0,o.jsx)(t.h3,{id:"interacting-with-the-sdk",children:"Interacting with the SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'import { ERC20CollateralPool, SelfProvider } from "@defactor/defactor-sdk";\n\nconst providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(\n  ERC20CollateralPool,\n  contractConfig.contractAddress!, // loaded from config file\n  contractConfig.providerUrl!, // loaded from config file\n  contractConfig.adminPrivateKey! // loaded from config file\n);\n\nconst liquidationProtocolFee =\n  providerInstance.contract.LIQUIDATION_PROTOCOL_FEE;\n\nconsole.log(liquidationProtocolFee); // 5n\n'})}),"\n",(0,o.jsx)(t.h3,{id:"integrations-with-the-contracts",children:"Integrations with the contracts"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Pools","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/pools/back-end/sdk/counterparty-pool",children:(0,o.jsx)(t.code,{children:"Counterparty Pool"})}),"."]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/pools/back-end/sdk/collateral-pool",children:(0,o.jsx)(t.code,{children:"Collateral Pool"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.h3,{id:"initialize-the-erc20",children:"Initialize the ERC20"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'import { ERC20 } from "@defactor/defactor-sdk";\n\nconst usdcTokenContract = new Erc20(\n  contractConfig.usdcTokenAddress, // loaded from config file\n  contractConfig.providerUrl, // loaded from config file\n  contractConfig.privateKey // loaded from config file\n);\n'})}),"\n",(0,o.jsx)(t.h3,{id:"approve-an-amount-of-erc20-tokens",children:"Approve an amount of ERC20 tokens"}),"\n",(0,o.jsx)(t.p,{children:"Give to the contract the allowance to spend the indicated amount of USDC by the user."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"const amount = BigInt(200_000000); // 200 USDC\n\nawait usdcTokenContract.approve(\n  providerInstance.contract.address, // the address of the contract\n  amount\n);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(6540);const r={},i=o.createContext(r);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);