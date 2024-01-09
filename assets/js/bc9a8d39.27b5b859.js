"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3301],{3110:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=s(5893),i=s(1151);const c={id:"smart-contract-staking-technical-aspects",title:"Technical Aspects",sidebar_position:1,tags:["Technical Aspects"]},a=void 0,r={id:"smart-contracts/staking-contract/smart-contract-staking-technical-aspects",title:"Technical Aspects",description:"Overview",source:"@site/docs/smart-contracts/staking-contract/technical_aspects.md",sourceDirName:"smart-contracts/staking-contract",slug:"/smart-contracts/staking-contract/smart-contract-staking-technical-aspects",permalink:"/docs/smart-contracts/staking-contract/smart-contract-staking-technical-aspects",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/smart-contracts/staking-contract/technical_aspects.md",tags:[{label:"Technical Aspects",permalink:"/docs/tags/technical-aspects"}],version:"current",sidebarPosition:1,frontMatter:{id:"smart-contract-staking-technical-aspects",title:"Technical Aspects",sidebar_position:1,tags:["Technical Aspects"]},sidebar:"docSidebar",previous:{title:"Staking Contract",permalink:"/docs/category/staking-contract"},next:{title:"Back End API",permalink:"/docs/category/back-end-api"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Contract: Staking",id:"contract-staking",level:2},{value:"Constants",id:"constants",level:3},{value:"Functions",id:"functions",level:3},{value:"Events",id:"events",level:3},{value:"Custom Errors",id:"custom-errors",level:3},{value:"Notes",id:"notes",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Staking.sol"})," is a smart contract for staking tokens in a DeFi environment. It allows users to stake tokens in different plans with various lock durations and APYs (Annual Percentage Yields)."]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OpenZeppelin Contracts (Upgradeable)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Staking.storage.sol"})," for storage operations"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contract-staking",children:"Contract: Staking"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Inherits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StakingStorage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AccessControlUpgradeable"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"PausableUpgradeable"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Uses ",(0,t.jsx)(n.code,{children:"SafeERC20Upgradeable"})," for safe ERC20 token operations."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PERCENTAGE_MULTIPLIER"}),": Used for APY calculations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MIN_STAKE_AMOUNT"}),": Minimum staking amount required."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"__Staking_init"}),": Initializes the contract with token, staking, and rewards end time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"stake"}),": Allows users to stake tokens in a specific plan."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"unstake"}),": Unstakes tokens and claims rewards."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"restake"}),": Restakes tokens with earned rewards into a new plan."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"claimRewards"}),": Claims rewards for a specific stake."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"balanceOf"}),": Returns the total balance (staked amount + rewards) of a user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getUserStakes"}),": Retrieves all stakes of a user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getPlans"}),": Returns all available staking plans."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"addPlan"}),": Allows admin to add a new staking plan."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pause"}),": Pauses the contract (admin only)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"unpause"}),": Unpauses the contract (admin only)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withdraw"}),": Withdraws a specified ERC20 token to a given address (admin only)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setDates"}),": Sets staking and rewards end times (admin only)."]}),"\n",(0,t.jsx)(n.li,{children:"Private helper functions for stake retrieval and reward calculation."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Staked"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Unstaked"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Claimed"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"custom-errors",children:"Custom Errors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StakingCantBeLessThanRewardsEnd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StakeAlreadyUnstaked"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"InvalidStakeIndex"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StakeAmountTooLow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StakingHasEnded"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StakeIsLocked"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"InvalidPlan"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The contract uses OpenZeppelin's upgradeable contracts for future compatibility."}),"\n",(0,t.jsx)(n.li,{children:"It provides flexibility in staking with different plans and lock periods."}),"\n",(0,t.jsx)(n.li,{children:"The contract ensures safe handling of staking, unstaking, and claiming rewards."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(7294);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);