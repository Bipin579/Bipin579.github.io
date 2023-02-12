import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import orbitz from "../utils/Projects/orbitz.png";
import geekbuying from "../utils/Projects/geekbuying.png";
import paytm_Mall1 from "../utils/Projects/paytm_Mall1.png";
import Airtable from "../utils/Projects/Airtable.png";

const Projects = () => {
  return (
    <Box bg="#2F3847" id="Projects" py={"5%"}>
      <Box maxW={"6xl"} m="auto">
        <Text
          lineHeight={1}
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          // color={"#2892D4"}
          textAlign="center"
          className="text"
          // color="white"
        >
          My Projects
        </Text>
        <Grid gap={6} rowGap={9} maxW={"5xl"} margin="auto" pt={12} px="7">
          <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ sm: "row", md: "row", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bg={"whiteAlpha.300"}
          >
            <Image
              src={orbitz}
              alt="orbitz"
              objectFit="scale-down"
              w={{ base: "30%", md: "50%" }}
              rounded={"md"}
            />
            <Box pl="2%">
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Orbitz.com (clone) :-
              </Heading>

              <Box py="1%">
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  Orbitz is an online travel agency, OTA, or travel booking
                  platform. You can use the Orbitz website or app to search for
                  travel and compare availability and pricing.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Text>TECHSTACK'S :- </Text>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/4726/4726005.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/154/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
                  w={{ base: "5%", md: "8%" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                fontWeight={"bolder"}
                p="1%"
                color={"white"}
                width="40%"
              >
                <Box cursor={"pointer"} rounded="90%">
                  <Link
                    href="https://gilded-dragon-38bf52.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Live Link
                    </Button>
                  </Link>
                </Box>
                <Box cursor={"pointer"} rounded="50%">
                  <Link
                    href="https://github.com/Bipin579/deeply-oven-5153"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Github
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ sm: "row", md: "row", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bg={"whiteAlpha.300"}
          >
            <Image
              src={geekbuying}
              alt="orbitz"
              objectFit="scale-down"
              w={{ base: "30%", md: "50%" }}
              rounded={"md"}
            />
            <Box pl="2%">
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Geekbuying.com (clone) :-
              </Heading>

              <Box py="1%">
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  Geekbuying leading online shop selling a wide range of
                  consumer electronic gadgets. Where users can from all over
                  world.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Text>TECHSTACK'S :- </Text>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/4726/4726005.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/154/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
                  w={{ base: "5%", md: "8%" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                fontWeight={"bolder"}
                p="1%"
                color={"white"}
                width="40%"
              >
                <Box cursor={"pointer"} rounded="90%">
                  <Link
                    href="https://dreamy-otter-4ee23d.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Live Link
                    </Button>
                  </Link>
                </Box>
                <Box cursor={"pointer"} rounded="50%">
                  <Link
                    href="https://github.com/harishpampana7/judicious-income-4437"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Github
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ sm: "row", md: "row", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bg={"whiteAlpha.300"}
          >
            <Image
              src={Airtable}
              alt="orbitz"
              objectFit="scale-down"
              w={{ base: "30%", md: "50%" }}
              rounded={"md"}
            />
            <Box pl="2%">
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Airtable.com (clone) :-
              </Heading>

              <Box py="1%">
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  Airtable is a low-code platform for building collaborative
                  apps. Customize your workflow, collaborate, and achieve
                  ambitious outcomes.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Text>TECHSTACK'S :- </Text>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/4726/4726005.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/154/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
                  w={{ base: "5%", md: "8%" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                fontWeight={"bolder"}
                p="1%"
                color={"white"}
                width="40%"
              >
                <Box cursor={"pointer"} rounded="90%">
                  <Link href="https://stata-web.vercel.app/" target={"_blank"}>
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Live Link
                    </Button>
                  </Link>
                </Box>
                <Box cursor={"pointer"} rounded="50%">
                  <Link
                    href="https://github.com/Bipin579/afraid-substance-3392"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Github
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ sm: "row", md: "row", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bg={"whiteAlpha.300"}
          >
            <Image
              src={paytm_Mall1}
              alt="orbitz"
              objectFit="scale-down"
              w={{ base: "30%", md: "50%" }}
              rounded={"md"}
            />
            <Box pl="2%">
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Paytmall.com (clone) :-
              </Heading>

              <Box py="1%">
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  Paytm Mall is digital shopping place where any body buy all
                  the products which need through online no need to move any
                  other place.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Text>TECHSTACK'S :- </Text>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/4726/4726005.png"
                  w={{ base: "5%", md: "8%" }}
                />
                <Image
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/154/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
                  w={{ base: "5%", md: "8%" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                fontWeight={"bolder"}
                p="1%"
                color={"white"}
                width="40%"
              >
                <Box cursor={"pointer"} rounded="90%">
                  <Link
                    href="https://paytm-mall-clone-eight.vercel.app/"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Live Link
                    </Button>
                  </Link>
                </Box>
                <Box cursor={"pointer"} rounded="50%">
                  <Link
                    href="https://github.com/Bipin579/tasteful-pump-9576"
                    target={"_blank"}
                  >
                    <Button
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      className="text"
                    >
                      Github
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;

{
  /* <GridItem
transition="all .2s ease-in-out"
_hover={{ transform: "scale(0.9)" }}
w="100%"
boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
p={2}
rounded="10px"
bg={"white"}
>
<Image src={geekbuying} alt="geekbuying" />
<Box
  display={"flex"}
  justifyContent="space-around"
  fontWeight={"bolder"}
  p="10px"
  color={"white"}
>
  <Box cursor={"pointer"} rounded="90%">
    <Link href="https://dreamy-otter-4ee23d.netlify.app/">
      <Button bg={"#DC143C"} _hover={{ bg: "#DC143C" }}>
        Live Link
      </Button>
    </Link>
  </Box>
  <Box cursor={"pointer"} rounded="50%">
    <Link href="https://github.com/harishpampana7/judicious-income-4437">
      <Button bg={"#DC143C"} _hover={{ bg: "#DC143C" }}>
        Github
      </Button>
    </Link>
  </Box>
</Box>
<Box px="4">
  <Text fontWeight={"bold"} textAlign="start">
    Geekbuying leading online shop selling a wide range of consumer
    electronic gadgets. Where users can from all over world.
  </Text>
</Box>
</GridItem>

<GridItem
transition="all .2s ease-in-out"
_hover={{ transform: "scale(0.9)" }}
w="100%"
boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
p={2}
rounded="10px"
bg={"white"}
>
<Image src={paytm_Mall1} alt="geekbuying" />
<Box
  display={"flex"}
  justifyContent="space-around"
  fontWeight={"bolder"}
  p="10px"
  color={"white"}
>
  <Box cursor={"pointer"} rounded="90%">
    <Link href="https://stata-web.vercel.app/">
      <Button bg={"#DC143C"} _hover={{ bg: "#DC143C" }}>
        Live Link
      </Button>
    </Link>
  </Box>
  <Box cursor={"pointer"} rounded="50%">
    <Link href="https://github.com/Bipin579/afraid-substance-3392">
      <Button bg={"#DC143C"} _hover={{ bg: "#DC143C" }}>
        Github
      </Button>
    </Link>
  </Box>
</Box>
<Box px="4">
  <Text fontWeight={"bold"} textAlign="start">
    Airtable is a low-code platform for building collaborative apps.
    Customize your workflow, collaborate, and achieve ambitious
    outcomes.
  </Text>
</Box>
</GridItem>

<GridItem
transition="all .2s ease-in-out"
_hover={{ transform: "scale(0.9)" }}
w="100%"
boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
p={2}
rounded="10px"
bg={"white"}
>
<Image src={Airtable} alt="geekbuying" />
<Box
  display={"flex"}
  justifyContent="space-around"
  fontWeight={"bolder"}
  p="10px"
  color={"white"}
>
  <Box cursor={"pointer"} rounded="90%">
    <Link href="https://paytm-mall-clone-eight.vercel.app/">
      <Button bg={"#DC143C"} _hover={{ bg: "#DC143C" }}>
        Live Link
      </Button>
    </Link>
  </Box>
  <Box cursor={"pointer"} rounded="50%">
    <Link href="https://github.com/Bipin579/tasteful-pump-9576">
      <Button bg={"#DC143C"} _hover={{ bg: "#DC143C" }}>
        Github
      </Button>
    </Link>
  </Box>
</Box>
<Box px="4">
  <Text fontWeight={"bold"} textAlign="start">
    Paytm Mall is digital shopping place where any body buy all the
    products which need through online no need to move any other
    place.
  </Text>
</Box>
</GridItem> */
}
