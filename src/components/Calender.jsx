import { Box, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const Calender = () => {
  return (
    <Box bg="#2F3847" py={"5%"}>
      <Text
        lineHeight={1}
        fontWeight={600}
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        // color={"#2892D4"}
        textAlign="center"
        className="text"
      >
        Github Calender
      </Text>
      <Box maxW={{ base: "2xl", md: "4xl", lg: "5xl" }} m="auto" mt={14} px="9"  color="white">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Bipin579"
          blockSize={20}
        //   theme="GitHub theme "
        ></GitHubCalendar>
        <br />

        <Box
          maxH={"300px"}
          pt="40px"
          style={{
            display: "flex",

            gap: "30px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <img
            width={{sm:"90%",md:"70%",lg:"50%"}}
            src="https://github-readme-stats.vercel.app/api?username=bipin579&show_icons=true&hide_border=true&theme=prussian"
            alt=""
          />
        </Box>
        <Box
          pt="40px"
          maxH={"300px"}
          style={{
            display: "flex",
            gap: "30px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <img
            width={{sm:"90%",md:"70%",lg:"50%"}}
            src="https://github-readme-streak-stats.herokuapp.com/?user=bipin579&hide_border=true&theme=prussian"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;
