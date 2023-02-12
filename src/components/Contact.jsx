import {
  Box,
  Button,
  Heading,
  IconButton,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsLinkedin,BsInstagram } from "react-icons/bs";
import React from "react";
import Animation from "../utils/lottie/Chatting_01 (1).json";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <Box m="auto" bg="#2F3847" id="Contact" py={"5%"}>
      <Box
        py={10}
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        m={"auto"}
        // bgColor={"#EBF7FC"}
      >
        <Text
          lineHeight={1}
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          // color={"#2892D4"}
          textAlign="center"
          className="text"
        >
          Contact Me
        </Text>
      </Box>
      <Box
        display="flex"
        // bgColor={"#EBF7FC"}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        colGap={10}
        maxW={"5xl"}
        m="auto"
        border={{md:"1px solid whitesmoke"}}
        p={6}
        rounded="lg"
      >
        <Box
          width={["full", "full", "full", "full", "50%", "50%"]}
          display="flex"
          alignItems={"center"}
          flexDir={"column"}
          px={24}
          justifyContent="center"
        >
          <WrapItem>
            <Box>
              <Heading color="whitesmoke">Contact Details</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#BBBBBB">
                Connecting with new people is always exciting, let's connect!
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <a href={"tel: 7366983001"}>
                    <Button
                      size="md"
                      height="48px"
                      width="170px"
                      textAlign={"start"}
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdPhone color="#0CC4EA" size="20px" />}
                    >
                      +91-7366983001
                    </Button>
                  </a>
                  <a href={"mailto: biping579@gmail.com"}>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      textAlign={"start"}
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdEmail color="#0CC4EA" size="20px" />}
                    >
                      biping579@gmail.com
                    </Button>
                  </a>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    textAlign={"start"}
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: "2px solid #1C6FEB" }}
                    leftIcon={<MdLocationOn color="#0CC4EA" size="20px" />}
                  >
                    Aurangrabad, Bihar
                  </Button>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Box>
        <Box
          width={["full", "full", "full", "full", "50%", "50%"]}
          display="flex"
          alignItems={"center"}
          flexDirection="row"
          pt={13}
        >
          <Lottie
            animationData={Animation}
            style={{ width: "70%", margin: "auto" }}
          />
        </Box>
        <Box  display={"flex"} flexDir={["row","row","row","column","column"]} gap={5} m="auto" mt={{ base: 5, lg: 10, md: 10 }} spacing={5} px={5}>
          <a
            href="https://www.linkedin.com/in/bipin-singh2323/"
            target="_blank"
          >
            <IconButton
              bg="white"
              aria-label="facebook"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0bf0c1" }}
              icon={<BsLinkedin size="28px" />}
            />
          </a>

          <a href="https://github.com/Bipin579" target="_blank">
            <IconButton
              bg="white"
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0bf0c1" }}
              icon={<BsGithub size="28px" />}
            />
          </a>

          <a href="https://www.instagram.com/biping579/" target="_blank">
            <IconButton
              bg="white"
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0bf0c1" }}
              icon={<BsInstagram size="28px" />}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
