import type { Chain } from "thirdweb";
import { polygon, avalanche, ethereum } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};
/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x2f2aFB8C3b471D62FC78da89955Df0c94122aB46",
    chain: polygon,
  },
  {
    address: "0x2D3c13Def788F089BEFa840EF6C6c94616A973C8",
    chain: avalanche,
  },
];
