import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box bg="#2F3847" id="Skills" py={"5%"}>
      <Text
        lineHeight={1}
        fontWeight={600}
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        // color={"#2892D4"}
        textAlign="center"
        className="text"
      >
        My Skills
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
          "repeat(5,1fr)",
        ]}
        pt={9}
        maxW="5xl"
        margin={"auto"}
        rowGap={7}
        columnGap={6}
        px={9}
      >
        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/html-5.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            HTML
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/css3.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            CSS 3
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/fluency/512/javascript.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Javascript
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/react-native.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            React
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/2x/redux.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Redux
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/chakra-ui.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Chakra ui
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/fluency/512/node-js.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Node JS
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/ios/512/express-js.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Express JS
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/mongodb.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            MongoDB
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/2x/typescript.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Typscript
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/fluency/512/github.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            GitHub
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/firebase.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Firebase
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/fluency/512/visual-studio-code-2019.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Visual Studio
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/material-ui.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            Material UI
          </Text>
        </Box>

        <Box
          boxShadow={
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
          p={2}
          rounded="md"
          bg="white"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            src="https://img.icons8.com/color/512/npm.png"
            margin={"auto"}
            className="logo" 
            w="80px"
          />
          <Text textAlign={"center"} fontWeight="bold">
            NPM
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
