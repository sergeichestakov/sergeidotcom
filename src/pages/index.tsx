import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { Container } from "../components/Container";
import Links from "../components/Links";

export default function Index() {
  return (
    <Container height="100vh">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Flex justify="center" align="center">
          <Box padding="24px">
            <Avatar
              name="Sergei Chestakov"
              src="/sergeichestakov.jpg"
              size="xl"
            />
          </Box>
          <Box>
            <Heading fontSize="8xl">Hi, I'm Sergei</Heading>
            <Heading fontSize="2xl">Software Engineer & Creator</Heading>
            <Links />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
