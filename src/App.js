import { Box } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Calender from "./components/Calender";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AnimatedCursor from "react-animated-cursor";
import { ReactComponent as MySVG } from "./scroll.svg";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Box className="App" >
            <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="1,183,214"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={1.2}
      />

      <ScrollToTop smooth component={<MySVG />} />
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <Projects />

      <Calender />

      <Contact />
    </Box>
  );
}

export default App;
