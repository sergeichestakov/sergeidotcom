import { Box, Divider, DarkMode } from "@chakra-ui/react";
import Intro from "../sections/Intro";
import About from "../sections/About";
import Work from "../sections/Work";
import Projects from "../sections/Projects";
import Talks from "../sections/Talks";
import Contact from "../sections/Contact";

export default function Index() {
  return (
    <Box>
      <DarkMode>
        <Intro />
        <Divider borderColor="gray.600" />

        <About />
        <Work />
        <Projects />
        <Talks />
        <Contact />
      </DarkMode>
    </Box>
  );
}
