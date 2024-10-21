import type { Chain } from "thirdweb";
import { polygon, avalanche, ethereum, bsc } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: polygon,
    tokens: [
      {
        tokenAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        symbol: "WETH",
        icon: "/erc20-icons/weth.png",
      },
      {
        tokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },      
      {
        tokenAddress: "0x9AC09f74A8A0F430C662AA46FAB9B5265DDe8D30",
        symbol: "UFCC",
        icon: "/erc20-icons/ufcc.png",
      },
      {
        tokenAddress: "0x3764Ada5e5F77d5410e9b104F2a282ECeC524850",
        symbol: "UFCPLSR",
        icon: "/erc20-icons/ufcplsr.png",
      },
      {
        tokenAddress: "0x642EC4619dA65d9Bc467Afd59F0742924D8Adb73",
        symbol: "UFCGAS",
        icon: "/erc20-icons/ufcgas.png",
      },
      {
        tokenAddress: "0xaC1E0c7eA825171016CE2c4743DDAC9d89A84FbF",
        symbol: "UFCMINE",
        icon: "/erc20-icons/ufcmine.png",
      },
      {
        tokenAddress: "0xAAB0984D5517238587eF3048622906271e81C361",
        symbol: "UFCORGA",
        icon: "/erc20-icons/ufcorga.png",
      },
    ],
  },

  {
    chain: avalanche,
    tokens: [
      {
        tokenAddress: "0x8b82A291F83ca07Af22120ABa21632088fC92931",
        symbol: "WETH",
        icon: "/erc20-icons/weth.png",
      },
      {
        tokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
      {
        tokenAddress: "0x952564F369F6cB1BFb26088741cFCB29Fdfaa1CF",
        symbol: "UFCC",
        icon: "/erc20-icons/ufcc.png",
      },  
      {
        tokenAddress: "0x7A6bF020161dEab23913ccFa5bE43aD37AEB6CA8",
        symbol: "UFCPLSR",
        icon: "/erc20-icons/ufcplsr.png",
      },
    ],
  },
  {
    chain: ethereum,
    tokens: [
      {
        tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        symbol: "WETH",
        icon: "/erc20-icons/weth.png",
      },
      {
        tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
      {
        tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        symbol: "DAI",
        icon: "/erc20-icons/dai.png",
      }
    ],
  },
  {
    chain: bsc,
    tokens: [
      {
        tokenAddress: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA",
        symbol: "WETH",
        icon: "/erc20-icons/weth.png",
      },
      {
        tokenAddress: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x524bC91Dc82d6b90EF29F76A3ECAaBAffFD490Bc",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
    ],
  },
]

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  [polygon.id]: "/native-token-icons/pol.png",
  [avalanche.id]: "/native-token-icons/avax.png",
  [ethereum.id]: "/native-token-icons/eth.png",
  [bsc.id]: "/native-token-icons/bsc.png",
};
