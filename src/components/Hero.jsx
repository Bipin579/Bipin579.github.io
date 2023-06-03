import {
  Image,
  Text,
  Box,
  Heading,
  Flex,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import bg from "../utils/bg-image.jpg";

import Lottie from "lottie-react";
import animation from "../utils/lottie/71619-coding.json";

import Project from "../utils/Bipin_Kumar_Resume.pdf";

export default function Hero() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1taaLGgK1tS9z5zVAdSthy_fa4R7eYuPf/view",
      "_blank"
    );
  };
  return (
    <Box
      m="auto"
      bgImage={bg}
      id="Home"
      boxShadow={"0px 15px 10px -15px #111"}
      pb={-1}
      boxSizing="border-box"
    >
      <Box
        display="flex"
        flexDirection={["column", "column", "row", "row", "row", "row"]}
        colGap={10}
        maxW={"6xl"}
        m="auto"
      >
        <Box
          width={["full", "full", "full", "full", "50%", "50%"]}
          display="flex"
          alignItems={"center"}
        >
          <Box
            p={{ md: 10 }}
            display="flex"
            flexDir={"column"}
            justifyContent="center"
            m={"auto"}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                pl={"20px"}
              >
                <Flex>
                  <Text color={"#fff"} fontSize="5xl" fontWeight="semibold">
                    Hello, I am
                  </Text>
                  <Image
                    src={
                      "https://raw.githubusercontent.com/blackcode1996/blackcode1996.github.io/master/src/Aseests/wavinghand.gif"
                    }
                    width={"80px"}
                    height={"80px"}
                  ></Image>
                </Flex>
                <Flex
                  fontSize="6xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  bgClip="text"
                >
                  Bipin Singh
                </Flex>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Text
                    as={"span"}
                    position={"relative"}
                    color={"white"}
                    fontSize="3xl"
                  >
                    Full Stack MERN Developer
                  </Text>
                </motion.div>
              </Heading>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                pl={"20px"}
              >
                <Link
                  target="_blank"
                  href={Project}
                  download={"Bipin_Kumar_Resume"}
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    download={Project}
                    onClick={() => handleClick()}
                    cursor={"pointer"}
                    color={"white"}
                    rounded="md"
                    _hover={{
                      bg: "blue.500",
                    }}
                    bgGradient="linear(to-r,cyan.400,blue.500)"
                    my="5%"
                    size={"lg"}
                  >
                    Download Resume
                  </Button>
                </Link>
              </Stack>
            </motion.div>
          </Box>
        </Box>
        <Box m="auto" width={["full", "full", "full", "full", "50%", "50%"]}>
          <Lottie
            animationData={animation}
            style={{ width: "70%", margin: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
