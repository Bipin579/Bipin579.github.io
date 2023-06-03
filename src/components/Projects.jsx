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
import React, { useEffect, useState } from "react";
import orbitz from "../utils/Projects/orbitz.png";
import geekbuying from "../utils/Projects/geekbuying.png";
import paytm_Mall1 from "../utils/Projects/paytm_Mall1.png";
import Airtable from "../utils/Projects/Airtable.png";
import dell from "../utils/Projects/dell.png";
import airbnb from "../utils/Projects/airbnb.png";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../utils/bg-image.jpg";

const Projects = () => {
  const [more, setMore] = useState(false);
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);
  return (
    <Box bgImage={bg} id="Projects" py={"5%"} boxSizing="border-box">
      <Box maxW={"6xl"} m="auto" boxSizing="border-box">
        <Text
          lineHeight={1}
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          // color={"#2892D4"}
          textAlign="center"
          className="text"
          data-aos="fade-right"
          boxSizing="border-box"
          // color="white"
        >
          My Projects
        </Text>
        <Grid
          display={"flex"}
          flexDir={"column"}
          gap={6}
          rowGap={9}
          maxW={"5xl"}
          margin="auto"
          pt={12}
          px="7"
          boxSizing="border-box"
        >
          <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            // p={"1%"}
            maxW={"6xl"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            // data-aos="zoom-out-left"
          >
            <Box w={{ lg: "50%", md: "100%" }}>
              <Image src={dell} alt="orbitz" rounded={"md"} />
            </Box>

            <Box w={{ lg: "50%", md: "90%" }} pl="2%">
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Dell.com (clone) :-
              </Heading>

              <Box py="1%">
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  About Lap-Den is Dell Technologies' clone website where
                  customers can buy their products, and get the latest news and
                  insights on technology and business.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  React
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Redux
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Chakra UI
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Nodemailer
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  NodeJs
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  ExpressJs
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  MongoDB
                </Button>
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
                  <Link href="https://lap-den.vercel.app/" target={"_blank"}>
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
                    href="https://github.com/abhayfaldu/Dell.com_clone"
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
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            // p={"1%"}
            maxW={"6xl"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            // data-aos="zoom-out-left"
          >
            <Box w={{ lg: "50%", md: "100%" }}>
              <Image src={airbnb} alt="orbitz" rounded={"md"} />
            </Box>

            <Box w={{ lg: "50%", md: "90%" }} pl="2%">
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Airbnb.com (clone) :-
              </Heading>

              <Box py="1%">
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  This project is a clone of renowned american San Francisco
                  -based company operating an online marketplace for short-term
                  homestays and experiences. The company acts as a broker and
                  charges a commission from each booking.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Typscript
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Tailwind CSS
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  NextJs
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Prisma
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Next-Auth
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  NodeJs
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  MongoDB
                </Button>
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
                    href="https://airbnd-clone-ba.vercel.app/"
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
                    href="https://github.com/Bipin579/AirBnb_clone"
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
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            // p={"1%"}
            maxW={"6xl"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            // data-aos="zoom-out-left"
          >
            <Box w={{ lg: "50%", md: "100%" }}>
              <Image src={Airtable} alt="orbitz" rounded={"md"} />
            </Box>

            <Box w={{ lg: "50%", md: "90%" }} pl="2%">
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
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Chakra UI
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Email JS
                </Button>
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
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            // p={"1%"}
            maxW={"6xl"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            // data-aos="zoom-out-left"
          >
            <Box w={{ lg: "50%", md: "100%" }}>
              <Image src={paytm_Mall1} alt="orbitz" rounded={"md"} />
            </Box>

            <Box w={{ lg: "50%", md: "90%" }} pl="2%">
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
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Chakra UI
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Email JS
                </Button>
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

         {more && <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            // p={"1%"}
            maxW={"6xl"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            // data-aos="zoom-out-left"
          >
            <Box w={{ lg: "50%", md: "100%" }}>
              <Image src={geekbuying} alt="orbitz" rounded={"md"} />
            </Box>

            <Box w={{ lg: "50%", md: "90%" }} pl="2%">
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
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JSON API
                </Button>
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
          </GridItem>}

          {more &&<GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            _hover={{ transform: "scale(0.95)" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            // p={"1%"}
            maxW={"6xl"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            // data-aos="zoom-out-left"
          >
            <Box w={{ lg: "50%", md: "100%" }}>
              <Image src={orbitz} alt="orbitz" rounded={"md"} />
            </Box>

            <Box w={{ lg: "50%", md: "90%" }} pl="2%">
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
                    platform. You can use the Orbitz website or app to search
                    for travel and compare availability and pricing.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>
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
          </GridItem>}

         
        </Grid>
        <Box onClick={() => setMore(!more)} maxW={"max-content"} m="auto">
          <Button
            cursor={"pointer"}
            color={"white"}
            rounded="md"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            _hover={{
              bg: "blue.500",
            }}
            m="auto"
            my="15%"
            size={"lg"}
          >
            {more ? "See Less" : "See More"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;

{
  /* <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            _hover={{ transform: "scale(0.95)" }}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            data-aos="zoom-out-left"
          >
            <Box w={{lg:"50%",md:"100%"}}>
            <Image src={airbnb} alt="orbitz" rounded={"md"} minH={"320px"}   />
            </Box>
            <Box pl="2%" w={{lg:"50%",md:"100%"}}>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                color="white"
              >
                Airbnb.com (clone) :-
              </Heading>

              <Box py="1%" >
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  textAlign="start"
                  textColor={"lightgrey"}
                >
                  This project is a clone of renowned american San Francisco
                  -based company operating an online marketplace for short-term
                  homestays and experiences. The company acts as a broker and
                  charges a commission from each booking.
                </Text>
              </Box>
              <Box
                py="1%"
                color={"whatsapp.100"}
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Typscript
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Tailwind CSS
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  NextJs
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Prisma
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  Next-Auth
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  NodeJs
                </Button>

                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  MongoDB
                </Button>
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
                    href="https://airbnd-clone-ba.vercel.app/"
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
                    href="https://github.com/Bipin579/AirBnb_clone"
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
          </GridItem>  */
}

{
  /* <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            _hover={{ transform: "scale(0.95)" }}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            data-aos="zoom-out-left"
          >
            <Box w={{lg:"50%",md:"100%"}}>
            <Image src={Airtable} alt="orbitz" rounded={"md"} minH={"320px"}   />
            </Box>
            <Box pl="2%" w={{lg:"50%",md:"100%"}}>
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
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CHAKRA UI
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  EMAIL JS
                </Button>
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
          </GridItem>  */
}

{
  /* <GridItem
            transition="all .2s ease-in-out"
            display={"flex"}
            _hover={{ transform: "scale(0.95)" }}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
            p={"1%"}
            rounded="10px"
            bgGradient="linear(to-r,cyan.400,blue.500)"
            data-aos="zoom-out-left"
          >
            <Box w={{lg:"50%",md:"100%"}}>
            <Image src={paytm_Mall1} alt="orbitz" rounded={"md"} minH={"320px"}   />
            </Box>
            <Box pl="2%" w={{lg:"50%",md:"100%"}}>
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
                // display="flex"
                gap="1%"
                alignItems={"center"}
              >
                <Button
                  fontSize={"xs"}
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  TECHSTACKS :-
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  HTML
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CSS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  JS
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  CHAKRA UI
                </Button>
                <Button
                  fontSize={"xs"}
                  rounded="full"
                  m={"2px"}
                  color="#81caed"
                  bg={"blackAlpha.500"}
                >
                  EMAIL JS
                </Button>
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
          </GridItem> */
}

{
  /* {more && (
            <GridItem
              display={"flex"}
              transition="all .2s ease-in-out"
              _hover={{ transform: "scale(0.95)" }}
              flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
              boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
              p={"1%"}
              rounded="10px"
              bgGradient="linear(to-r,cyan.400,blue.500)"
              data-aos="zoom-out-left"
            >
              <Box w={{lg:"50%",md:"100%"}}>
            <Image src={geekbuying} alt="orbitz" rounded={"md"} minH={"320px"}   />
            </Box>
              <Box pl="2%" w={{lg:"50%",md:"100%"}}>
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
                  // display="flex"
                  gap="1%"
                  alignItems={"center"}
                >
                  <Button
                    fontSize={"xs"}
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    TECHSTACKS :-
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    HTML
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    CSS
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    JS
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    JSON API
                  </Button>
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
          )} */
}


 {/* {more && (
            <GridItem
              transition="all .2s ease-in-out"
              _hover={{ transform: "scale(0.95)" }}
              display={"flex"}
              flexDir={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
              boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
              p={"1%"}
              rounded="10px"
              bgGradient="linear(to-r,cyan.400,blue.500)"
              data-aos="zoom-out-left"
            >
              <Box w={{ lg: "50%", md: "100%" }}>
                <Image
                  src={orbitz}
                  alt="orbitz"
                  rounded={"md"}
                  minH={"320px"}
                />
              </Box>
              <Box pl="2%" w={{ lg: "50%", md: "100%" }}>
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
                    platform. You can use the Orbitz website or app to search
                    for travel and compare availability and pricing.
                  </Text>
                </Box>
                <Box
                  py="1%"
                  color={"whatsapp.100"}
                  // display="flex"
                  gap="1%"
                  alignItems={"center"}
                >
                  <Button
                    fontSize={"xs"}
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    TECHSTACKS :-
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    HTML
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    CSS
                  </Button>
                  <Button
                    fontSize={"xs"}
                    rounded="full"
                    m={"2px"}
                    color="#81caed"
                    bg={"blackAlpha.500"}
                  >
                    JS
                  </Button>
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
          )} */}