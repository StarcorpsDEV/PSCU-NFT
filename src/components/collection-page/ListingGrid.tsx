import { client } from "@/consts/client";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { MediaRenderer } from "thirdweb/react";
import {
  type DirectListing,
  type EnglishAuction
} from "thirdweb/extensions/marketplace";


export function ListingGrid( prop:any ) {
  let symbol = prop
  const { listingsInSelectedCollection, nftContract } = useMarketplaceContext();
  const len = listingsInSelectedCollection.length;
  const columns = useBreakpointValue({
    base: 1,
    sm: Math.min(len, 2),
    md: Math.min(len, 4),
    lg: Math.min(len, 4),
    xl: Math.min(len, 5),
  });
  if (!listingsInSelectedCollection || !len) return <></>;
  var listings = new Array<DirectListing>()
  
  listingsInSelectedCollection.map((item) => {
  if( item.currencyValuePerToken.symbol == symbol.prop){
    listings.push(item);
  }
  })

  listings.sort((a, b) => parseFloat(a.currencyValuePerToken.displayValue) - parseFloat(b.currencyValuePerToken.displayValue));


  return (
    <SimpleGrid columns={columns} spacing={4} p={4} mx="auto" mt="20px">
      {listings.map((item) => (
        <Box
          key={item.id}
          rounded="12px"
          as={Link}
          href={`/collection/${nftContract.chain.id}/${
            nftContract.address
          }/token/${item.asset.id.toString()}`}

          _hover={{textDecoration: "none", border:"1px" }}
          w={250}
          padding="24px"
          margin="6px"
          >
          <Flex direction="column">
            <MediaRenderer client={client} src={item.asset.metadata.image} />
            <Text>{item.asset?.metadata?.name + " #"+item.asset?.id.toString() ?? "Unknown item"}</Text>
            <Text>
              {item.currencyValuePerToken.displayValue}{" "}
              {item.currencyValuePerToken.symbol}
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}
