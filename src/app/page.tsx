"use client";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
  <Card>
    <Flex>
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          <CardHeader>
            <Heading  size="md">
              Pulsar ERC-721 NFTs collections
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex
              direction="row"
              wrap="wrap"
              mt="10px"
              gap="10"
              justifyContent="space-evenly"
            >
              {NFT_CONTRACTS.map((item) => (
                <Link
                  _hover={{ textDecoration: "none" }}
                  w={300}
                  h={400}
                  key={item.address}
                  style={{padding:"24px"}}
                  href={`/collection/${item.chain.id.toString()}/${item.address}`}
                >
                  <Image src={item.thumbnailUrl} />
                  <Text fontSize="large" mt="10px">
                  <Image src={item.iconUrl} w={"24px"} display={"inline-block"} margin={"4px"} marginBottom={"-6px"}/>
                  {item.title} 
                  </Text>
                </Link>
              ))}
            </Flex>
          </CardBody>
        </Flex>
        </Box>
        </Flex>

        <Flex>
        <Box mt="24px" m="auto">
          <CardHeader>
            <Heading  size="md" ml="20px" mt="100px">
              UFCPLSR ERC-20 token drop contract on Avalanche.
            </Heading>
          </CardHeader>
          <CardBody>
              <iframe
              width="100%"
              height="100%"
              style={{minHeight:"640px"}}
              src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0x7A6bF020161dEab23913ccFa5bE43aD37AEB6CA8&chain=%7B%22name%22%3A%22Avalanche+C-Chain%22%2C%22chain%22%3A%22AVAX%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F43114.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Avalanche%22%2C%22symbol%22%3A%22AVAX%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22avax%22%2C%22chainId%22%3A43114%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22avalanche%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Favalanche%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=red"
              ></iframe>
          </CardBody>
          </Box>
          </Flex>
        </Card>
  );
}