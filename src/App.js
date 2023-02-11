import { Box, Divider } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Calender from "./components/Calender";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <Box className="App">
      {/* <h1 style={{ fontWeight: "bold", color: "red" }}>Hey there Welcome i am coming soon....</h1> */}
      <Navbar />
      <Hero />
      <hr
        style={{
          border: "3px solid #347FCD",
          width: "40%",
          margin: "auto",
          borderRadius: "10px",
          bg:"#2F3847"
        }}
      />
      <About />
      <hr
        style={{
          border: "3px solid #347FCD",
          width: "40%",
          margin: "auto",
          borderRadius: "10px",
          bg:"#2F3847"
        }}
      />
      <Skills />
      <hr
        style={{
          border: "3px solid #347FCD",
          width: "40%",
          margin: "auto",
          borderRadius: "10px",
          bg:"#2F3847"
        }}
      />
      <Projects />
      <hr
        style={{
          border: "3px solid #347FCD",
          width: "40%",
          margin: "auto",
          borderRadius: "10px",
          bg:"#2F3847"
        }}
      />
      <Calender />
      <hr
        style={{
          border: "3px solid #347FCD",
          width: "40%",
          margin: "auto",
          borderRadius: "10px",
          bg:"#2F3847"
        }}
      />
      <Contact />
      <hr
        style={{
          border: "3px solid #347FCD",
          width: "40%",
          margin: "auto",
          borderRadius: "10px",
          bg:"#2F3847"
        }}
      />
    </Box>
  );
}

export default App;
