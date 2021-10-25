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
        <Divider />

        <About />
        <Divider />

        <Work />
        <Divider />

        <Projects />
        <Divider />

        <Talks />
        <Divider />

        <Contact />
      </DarkMode>
    </Box>
  );
}
