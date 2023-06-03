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
import React, { useEffect } from "react";
import Animation from "../utils/lottie/Chatting_01 (1).json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../utils/bg-image.jpg"

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);
  return (
    <Box m="auto" bgImage={bg}   id="Contact" py={"5%"} boxSizing="border-box">
      <Box
        // pb={10}
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        m={"auto"}
        maxW="5xl"
        // bgColor={"#EBF7FC"}
      >
        <Text
          lineHeight={1}
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          // color={"#2892D4"}
          textAlign="center"
          className="text"
          data-aos="fade-right"
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
              <Heading color="whitesmoke" data-aos="zoom-out-right">Contact Details</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#BBBBBB" data-aos="zoom-out-right">
                Connecting with new people is always exciting, let's connect!
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <a m="auto" href={"tel: 7366983001"}>
                    <Button
                      size="md"
                      height="48px"
                      width="170px"
                      textAlign={"start"}
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdPhone color="#0CC4EA" size="20px" />}
                      data-aos="zoom-out-right"
                    >
                      +91-7366983001
                    </Button>
                  </a>
                  <a m="auto" href={"mailto: biping579@gmail.com"}>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      textAlign={"start"}
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdEmail color="#0CC4EA" size="20px" />}
                      data-aos="zoom-out-right"
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
                    data-aos="zoom-out-right"
                  >
                    Aurangrabad, Bihar
                  </Button>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Box>
        <Box
          width={["80%", "80%", "80%", "100%", "100%", "100%",]}
          display={{base:"none",lg:"block"}}
          m="auto"
          // display="flex"
          // alignItems={"center"}
          // flexDirection="row"
          // pt={{lg:13 ,mb:5}}
          data-aos="zoom-out-left"
          // pt={{ base: "0px", sm: "0px", md: "0px", lg: "70px", xl: "90px", xxl: "100px" }}
          // border="1px solid red"
        >
          <Lottie
            animationData={Animation}
            style={{ width: "80%", margin: "auto"}}
          />
        </Box>
        <Box  w="max-content" display={"flex"} gap={"20px"} flexDir={{md:"row",lg:"column"}}  m="auto" mt={{ base: 5, lg: 10, md: 10 }}  px={5}>
          <a m="auto"
            href="https://www.linkedin.com/in/bipin-singh2323/"
            target="_blank"
            
          >
            <IconButton
              bg="white"
              aria-label="facebook"
              variant="ghost"
              size="md"
              isRound={true}
              _hover={{ bg: "#347fcd" }}
              icon={<BsLinkedin size="28px" />}
            />
          </a>

          <a m="auto" href="https://github.com/Bipin579" target="_blank" >
            <IconButton
              bg="white"
              aria-label="github"
              variant="ghost"
              size="md"
              isRound={true}
              _hover={{ bg: "#adadad" }}
              icon={<BsGithub size="28px" />}
            />
          </a>

          <a m="auto" href="https://www.instagram.com/biping579/" target="_blank" >
            <IconButton
              bg="white"
              aria-label="github"
              variant="ghost"
              size="md"
              isRound={true}
              _hover={{ bg: "#f241c3" }}
              icon={<BsInstagram size="28px" />}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
