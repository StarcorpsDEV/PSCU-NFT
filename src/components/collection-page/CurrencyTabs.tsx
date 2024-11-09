import { client } from "@/consts/client";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Link } from "@chakra-ui/next-js";
import {
  type DirectListing,
  type EnglishAuction
} from "thirdweb/extensions/marketplace";
import { useBreakpointValue, Tab, TabList, Tabs, Flex, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { ListingGrid } from "./ListingGrid";


export function CurrencyTabs(props:any) {
  const chain=props.chain
  const [tabCurrencyIndex, setTabCurrencyIndex] = useState<number>(0);

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
  var listingsAVAX = new Array<DirectListing>()
  var listingsPOL = new Array<DirectListing>()
  var listingsUSDC = new Array<DirectListing>()
  var listingsUSDT = new Array<DirectListing>()
  var listingsWETH = new Array<DirectListing>()
  var listingsBNB = new Array<DirectListing>()
  var listingsUFCC = new Array<DirectListing>()
  var listingsUFCPLSR = new Array<DirectListing>()
  var listingsUFCMINE = new Array<DirectListing>()
  var listingsUFCGAZ = new Array<DirectListing>()
  var listingsUFCORGA = new Array<DirectListing>()
  var currencyCounter : number = 0
  listingsInSelectedCollection.map((item) => {
    if( item.currencyValuePerToken.symbol == "AVAX" ){
      listingsAVAX.push(item);
      currencyCounter=1
    }else if ( item.currencyValuePerToken.symbol == "POL" ){
      listingsPOL.push(item);
      currencyCounter=2
    }else if ( item.currencyValuePerToken.symbol == "BNB" ){
      listingsBNB.push(item);
      currencyCounter=3
    }else if ( item.currencyValuePerToken.symbol == "WETH" ){
      listingsWETH.push(item);
    }else if ( item.currencyValuePerToken.symbol == "UFCC" ){
      listingsUFCC.push(item);
    }else if ( item.currencyValuePerToken.symbol == "UFCPLSR" ){
      listingsUFCPLSR.push(item);
    }else if ( item.currencyValuePerToken.symbol == "UFCMINE" ){
      listingsUFCMINE.push(item);
    }else if ( item.currencyValuePerToken.symbol == "UFCGAZ" ){
      listingsUFCGAZ.push(item);
    }else if ( item.currencyValuePerToken.symbol == "UFCORGA" ){
      listingsUFCORGA.push(item);
    }else if ( item.currencyValuePerToken.symbol == "USDC" ){
      listingsUSDC.push(item);
    }else if ( item.currencyValuePerToken.symbol == "USDt" ){
      listingsUSDT.push(item);
    }
    })

function makeTabs(currencyCounter:number){
return(
<Box>
<Flex direction="column" gap="4">
<Tabs
variant="soft-rounded"
mx="auto"
  mt="20px"
  onChange={(index) => setTabCurrencyIndex(index)}
  isLazy
  >
<TabList>
{ chain == "Avalanche" ?
<Tab>
<Image src={"/native-token-icons/avax.png"} w={"24px"} display={"inline-block"} marginRight={"4px"}/>
AVAX ({listingsAVAX.length || 0})</Tab>
:
""
}

{ chain == "Polygon" ? 
<Tab>
<Image src={"/native-token-icons/pol.png"} w={"24px"} display={"inline-block"} marginRight={"4px"}/>
  POL ({listingsPOL.length || 0})</Tab>
:
""
}

{ chain == "BNB Smart Chain Mainnet" ? 
      <Tab>
          <Image src={"/native-token-icons/bsc.png"} w={"24px"} display={"inline-block"} marginRight={"4px"}/>
        BNB ({listingsBNB.length || 0})</Tab>
  :
""
}

<Tab>                  
  <Image src={"/erc20-icons/weth.png"} w={"24px"} display={"inline-block"} marginRight={"4px"}/>
WETH ({listingsWETH.length || 0})</Tab>
<Tab>
<Image src={"/erc20-icons/usdc.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
  USDC ({listingsUSDC.length || 0})</Tab>
<Tab>
<Image src={"/erc20-icons/usdt.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
  USDt ({listingsUSDT.length || 0})</Tab>
<Tab>
<Image src={"/erc20-icons/ufcc.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
UFCC ({listingsUFCC.length || 0})</Tab>
</TabList>
<TabList>
<Tab>
<Image src={"/erc20-icons/ufcplsr.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
  UFCPLSR ({listingsUFCPLSR.length || 0})</Tab>
<Tab>
<Image src={"/erc20-icons/ufcmine.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
UFCMINE ({listingsUFCMINE.length || 0})</Tab>
<Tab>
<Image src={"/erc20-icons/ufcgas.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
UFCGAS ({listingsUFCGAZ.length || 0})</Tab>
<Tab>
<Image src={"/erc20-icons/ufcorga.png"} w={"24px"} display={"inline-block"}  marginRight={"4px"}/>
UFCORGA ({listingsUFCORGA.length || 0})</Tab>
</TabList>
</Tabs>
</Flex>

<Flex direction="column">
{ chain == "Avalanche" ? 
tabCurrencyIndex === 0 && <ListingGrid prop="AVAX"/>
:
""
}
{ chain == "Polygon" ? 
tabCurrencyIndex === 0 && <ListingGrid prop="POL"/>
:
""
}
{ chain == "BNB Smart Chain Mainnet" ? 
tabCurrencyIndex === 0 && <ListingGrid prop="BNB"/>
:
""
}

{tabCurrencyIndex === 1 && <ListingGrid prop="WETH"/>}
{tabCurrencyIndex === 2 && <ListingGrid prop="USDC"/>}
{tabCurrencyIndex === 3 && <ListingGrid prop="USDt"/>}
{tabCurrencyIndex === 4 && <ListingGrid prop="UFCC"/>}
{tabCurrencyIndex === 5 && <ListingGrid prop="UFCPLSR"/>}
{tabCurrencyIndex === 6 && <ListingGrid prop="UFCMINE"/>}
{tabCurrencyIndex === 7 && <ListingGrid prop="UFCGAZ"/>}
{tabCurrencyIndex === 8 && <ListingGrid prop="UFCORGA"/>}
</Flex>
</Box>
  )
}

return (
<>
  {makeTabs(currencyCounter)}
</> 
  );
}
