import { client } from "@/consts/client";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Text,
  Button,
  Select,
  Input
} from "@chakra-ui/react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";


import { MediaRenderer } from "thirdweb/react";
import {
  type DirectListing,
  type EnglishAuction
} from "thirdweb/extensions/marketplace";


export function ListingGrid( prop:any ) {
  let symbol = prop
  const { listingsInSelectedCollection, nftContract } = useMarketplaceContext();
  const len = listingsInSelectedCollection.length;
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
 
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

  const totalItems: bigint = listings.length >= 0 ? BigInt(listings.length) : 0n
  const numberOfPages: number = Number(
    (totalItems + BigInt(itemsPerPage) - 1n) / BigInt(itemsPerPage)
  );

  const pages: { start: number; count: number }[] = [];

  for (let i = 0; i < numberOfPages; i++) {
    const currentStartTokenId = 0n + BigInt(i * itemsPerPage);
    const remainingItems = totalItems - BigInt(i * itemsPerPage);
    const count =
      remainingItems < BigInt(itemsPerPage)
        ? Number(remainingItems)
        : itemsPerPage;
    pages.push({ start: Number(currentStartTokenId), count: count });
  }
  return (
    <>
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

<Box
mx="auto"
maxW={{ base: "90vw", lg: "700px" }}
mt="20px"
px="10px"
py="5px"
overflowX="auto"
>
<Flex direction="row" justifyContent="center" gap="3">
  <Button
    onClick={() => setCurrentPageIndex(0)}
    isDisabled={currentPageIndex === 0}
  >
    <MdKeyboardDoubleArrowLeft />
  </Button>
  <Button
    isDisabled={currentPageIndex === 0}
    onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
  >
    <RiArrowLeftSLine />
  </Button>
  <Text my="auto">
    Page {" "}
    
    <Input
    type={"number"}
    min={"0"}
    max={numberOfPages.toString()}
    value = { currentPageIndex }
    w={"80px"}
    onChange={(e) => {
      Number(e.target.value) < numberOfPages ? setCurrentPageIndex(Number(e.target.value)) : setCurrentPageIndex(pages.length - 1)
    }
    } 
    />
    
    {" "}of {pages.length - 1}
  </Text>
  <Button
    isDisabled={currentPageIndex === pages.length - 1}
    onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
  >
    <RiArrowRightSLine />
  </Button>
  <Button
    onClick={() => setCurrentPageIndex(pages.length - 1)}
    isDisabled={currentPageIndex === pages.length - 1}
  >
    <MdKeyboardDoubleArrowRight />
  </Button>
  { <Select
    w="80px"
    onChange={(e) => setItemsPerPage(Number(e.target.value))}
  >
    {[20, 40, 60].map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select> }
</Flex>
</Box>
</>
);
}
