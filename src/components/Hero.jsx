import {
  Image,
  Text,
  Box,
  Heading,
  Flex,
  Button,
  Stack,
  Link
} from "@chakra-ui/react";

import Lottie from "lottie-react";
import animation from "../utils/lottie/71619-coding.json"

import  Project  from "../utils/Bipin_Kumar_Resume.pdf"

export default function Hero() {
  const handleClick=()=>{
    window.open(
      "https://drive.google.com/file/d/1-pt3hhNlb_95k2NZCbouelh2FPeDgXe5/view?usp=share_link",
      "_blank"
    )
  }
  return (
    
    <Box m="auto" bg="#2F3847" id="Home" >
      {/* background-image: linear-gradient( ); */}
      
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
            p={{md:10}}
            display="flex"
            flexDir={"column"}
            justifyContent="center"
            m={"auto"}
          >
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} pl={"20px"}>
            <Flex>
              <Text color={"#fff"} fontSize="5xl" fontWeight="semibold">
                Hello, I am 
              </Text>
              <Image src={"https://raw.githubusercontent.com/blackcode1996/blackcode1996.github.io/master/src/Aseests/wavinghand.gif"} width={"80px"} height={"80px"}></Image>
            </Flex>
            <Flex fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text">
              Bipin Singh
            </Flex>
            <Text
              as={'span'}
              position={'relative'}
              color={"white"}
              >
              Full Stack MERN Developer
            </Text>
            <br />{' '}
          </Heading>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pl={"20px"}>
          <Link
                  target="_blank"
                  href={Project}
                  download={"Bipin_Kumar_Resume"}
                  _hover={{textDecoration:"none"}}
                >
                <Button
                  download={Project} 
                  onClick={()=>handleClick()}
                 
                  cursor={'pointer'}
                  color={"white"}
                  rounded="md"
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  my="5%"
                  size={'lg'}>
                  Resume
                </Button> 
                </Link>
          </Stack>
            
          </Box>
          
          
        </Box>
        <Box m="auto" width={["full", "full", "full", "full", "50%", "50%"]}>
          <Lottie  animationData={animation} style= {{width:"70%",margin:"auto"}} />
        </Box>
      </Box>
    </Box>
  );
}



