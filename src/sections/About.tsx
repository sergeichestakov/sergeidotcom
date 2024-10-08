import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Container from "../components/Container";
import Header from "../components/Header";

const BLUE = "blue.300";

export default function About() {
  return (
    <Container id="about" pt="32px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="700px">
        <Header href="#about">About</Header>
        <Box p="16px" maxWidth="100%">
          <Box width="100%" pb="16px">
            <Text>I'm a full-stack, product oriented software engineer.</Text>
          </Box>
          <Box width="100%" paddingBottom="16px">
            <Text>
              Most recently, I spent over 4 years building the next generation
              of online, collaborative IDEs as an early engineer at{" "}
              <Link href="https://replit.com" isExternal color={BLUE}>
                Replit
              </Link>
              . Before that, I got the chance to work at{" "}
              <Link href="https://coda.io" isExternal color={BLUE}>
                Coda
              </Link>
              {", "}
              <Link href="https://duckduckgo.com" isExternal color={BLUE}>
                Google
              </Link>
              {", and "}
              <Link href="https://expo.io" isExternal color={BLUE}>
                Expo
              </Link>
              . I've also contracted for, invested in, and advised a number of
              other startups on the side.
            </Text>
          </Box>
          <Box width="100%">
            <Text>
              I'm originally from St. Petersburg, Russia, grew up in the San
              Francisco Bay Area, and am now living in New York City.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
