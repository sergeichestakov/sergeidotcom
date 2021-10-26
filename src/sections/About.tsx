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
            <Text>
              I'm currently a software engineer at{" "}
              <Link href="https://replit.com" isExternal color={BLUE}>
                Replit
              </Link>{" "}
              where we're building the future of programming.
            </Text>
          </Box>
          <Box width="100%" paddingBottom="16px">
            <Text>
              Previously, I've worked at{" "}
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
              . I've also contracted for a number of other startups on the side.
            </Text>
          </Box>
          <Box width="100%">
            <Text>
              I'm originally from St. Petersburg, Russia and am now living in
              San Francisco, CA.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
