import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Container from "../components/Container";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";
import theme from "../theme";

export default function Contact() {
  return (
    <Container id="contact" py="72px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#contact">Contact</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>
            Feel free to reach out! DMs are open and I'm happy to chat.
          </SubHeading>

          <Flex pt="8px" justify="center">
            <Box p="8px">
              <Link
                href="https://twitter.com/sergeichestakov"
                isExternal
                _hover={{
                  color: theme.colors.twitterBlue,
                }}
              >
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  <Text pl="8px">@SergeiChestakov</Text>
                </Flex>
              </Link>
            </Box>

            <Box p="8px" pl="16px">
              <Link
                href="mailto:me@sergei.com"
                isExternal
                _hover={{ color: theme.colors.emailGrey }}
              >
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Text pl="8px">me@sergei.com</Text>
                </Flex>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
