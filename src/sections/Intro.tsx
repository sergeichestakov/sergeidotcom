import * as React from "react";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import Container from "../components/Container";
import Links from "../components/Links";

export default function Intro() {
  return (
    <Container id="sergei" height="100vh">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Flex justify="center" align="center">
          <Box padding="24px">
            <Avatar
              name="Sergei Chestakov"
              src="/sergeichestakov.jpg"
              size="xl"
            />
          </Box>
          <Flex flexDir="column">
            <Heading as="h1" fontSize="56px">
              Hi, I'm Sergei
            </Heading>
            <Heading fontSize="24px">Software Engineer & Creator</Heading>
            <Links />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
