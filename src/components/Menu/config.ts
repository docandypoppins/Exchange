import { MenuEntry, menuStatus } from '@pancakeswap-libs/uikit'

// const baseurl="https://app.tnoxswap.exchange";
// const swap="https://swap.tnoxswap.exchange";

const baseurl="https://candypoppins.finance";
const swap="https://paircut.candypoppins.finance";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    calloutClass: 'menulink',
    href: baseurl.concat('/'),
  },
  // {
  //   label: 'Swap',
  //   icon: 'SwapIcon',
  //   calloutClass: 'menulink',
  //   href:  swap.concat('/#/swap'),
  // },
  // {
  //   label: 'Add Pool',
  //   icon: 'AddPoolIcon',
  //   calloutClass: 'menulink',
  //   href: swap.concat('/#/pool'),
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'Exchange',
        href: swap.concat('/#/swap'),
      },
      {
        label: 'Liquidity',
        href: swap.concat('/#/pool'),
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    calloutClass: 'menulink',
    href:  baseurl.concat('/Farms'),
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    calloutClass: 'menulink',
    href:  baseurl.concat('/Pools'),
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: baseurl.concat('/comingsoon'),
    calloutClass: 'menulink comingsoon'
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: baseurl.concat('/comingsoon'),
    calloutClass: 'menulink comingsoon'
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: baseurl.concat('/comingsoon'),
    calloutClass: 'menulink comingsoon'
  },

  // {
  //   label: 'GBPS',
  //   icon: 'InfoIcon',
  //   href: baseurl.concat('/comingsoon'),
  //   calloutClass: 'menulink'
  // }
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
   
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href:  baseurl.concat('/teams'),
  //     },
  //     {
  //       label: 'Task Center',
  //       href:  baseurl.concat('/profile/tasks'),
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: baseurl.concat('/profile'),
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: '#',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: '#',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   calloutClass: 'menulink',
  //   items: [     
  //     {
  //       label: 'Blog',
  //       href: baseurl,
  //     },
  //   ],
  // }, 
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: '#',
  //     },
  //     {
  //       label: 'Github',
  //       href: '#',
  //     },
  //     {
  //       label: 'Docs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Blog',
  //       href: '#',
  //     },
  //   ],
  // },
]

export default config
