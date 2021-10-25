import * as React from "react";
import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import { Container } from "../components/Container";

export default function About() {
  return (
    <Container>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        maxWidth="700px"
        py="72px"
        fontSize="18px"
      >
        <Box paddingBottom="16px">
          <Heading size="2xl">About</Heading>
        </Box>
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
