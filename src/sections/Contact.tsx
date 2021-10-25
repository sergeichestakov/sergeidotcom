import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Contact() {
  return (
    <Container id="contact" py="72px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#contact">Contact</Header>
        <Box width="100%" paddingBottom="16px">
          <Text textAlign="center">
            Hit me up if you're in San Francisco! I'd love to grab coffee and
            chat.
          </Text>

          <Flex pt="8px" justify="center">
            <Box p="8px">
              <Link href="https://twitter.com/sergeichestakov" isExternal>
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  <Text pl="4px">@SergeiChestakov</Text>
                </Flex>
              </Link>
            </Box>

            <Box p="8px">
              <Link href="mailto:me@sergei.com" isExternal>
                <Flex justify="center" align="center">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Text pl="4px">me@sergei.com</Text>
                </Flex>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
