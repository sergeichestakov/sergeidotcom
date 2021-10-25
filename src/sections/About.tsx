import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Container from "../components/Container";
import Header from "../components/Header";

export default function About() {
  return (
    <Container id="about">
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        maxWidth="700px"
        py="180px"
      >
        <Header href="#about">About</Header>
        <Box width="100%" paddingBottom="16px">
          <Text>
            I'm currently a software engineer at{" "}
            <Link href="https://replit.com" isExternal>
              Replit
            </Link>{" "}
            where we're building the future of programming. Previously, I've
            worked at{" "}
            <Link href="https://coda.io" isExternal>
              Coda
            </Link>
            {", "}
            <Link href="https://duckduckgo.com" isExternal>
              Google
            </Link>
            {", and "}
            <Link href="https://expo.io" isExternal>
              Expo
            </Link>
            . I've also contracted for a number of other startups on the side.
          </Text>
        </Box>
        <Box width="100%">
          <Text>
            I'm originally from St. Petersburg, Russia and am now living in San
            Francisco, CA.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}
