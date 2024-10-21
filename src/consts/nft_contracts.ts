import type { Chain } from "thirdweb";
import { polygon, avalanche, ethereum, bsc } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  iconUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 */

export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x77B7e9909502a1D5F0B35Ea4B59b62406A1364e4",
    chain: avalanche,
    title: "Pulsar - Avalanche C-Chain",
    thumbnailUrl:
    "https://pulsar.game/images/items/Genesis/Mothership.png",
    type: "ERC721",
    iconUrl:"native-token-icons/avax.png"
  },
  {
    address: "0x0B07b13513a77647b453FDe69A299176455be023",
    chain: polygon,
    title: "Pulsar - Polygon POS",
    thumbnailUrl:
    "https://pulsar.game/images/items/Genesis/Miner.png",
    type: "ERC721",
    iconUrl:"native-token-icons/pol.png"
},
{
  address: "0x45560C12Cb7e85f4333CB4C144d6ab702c20C10D",
  chain: bsc,
  title: "Pulsar - BNB Smart Chain",
  thumbnailUrl:
  "https://pulsar.game/images/items/Genesis/SiegeTank.png",
  type: "ERC721",
  iconUrl:"native-token-icons/bsc.png"
}
];
