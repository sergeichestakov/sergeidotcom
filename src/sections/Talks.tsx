import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const TALKS = [
  {
    href: "https://talks.sergei.com/ship",
    image: "/shipfast.jpg",
    title: "How to Ship Fast",
    description: "How to move quickly as an engineering team.",
  },
  {
    href: "https://talks.sergei.com/privacy",
    image: "/privacy.jpg",
    title: "On Internet Privacy",
    description: "Internet privacy and why it's important.",
  },
  {
    href: "https://talks.sergei.com/schedule-helper",
    image: "/howimadeschedulehelper.jpg",
    title: "How I Made ScheduleHelper",
    description: "What I learned building ScheduleHelper",
  },
  {
    href: "https://talks.sergei.com/html-css",
    image: "/html-css.jpg",
    title: "HTML + CSS Workshop",
    description: "An introduction to HTML + CSS.",
  },
] as const;

export default function Talks() {
  return (
    <Container id="talks" pt="32px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#talks">Talks</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Talks I've given.</SubHeading>
          <Flex flexWrap="wrap" justify="center" align="center">
            {TALKS.map(({ title, description, image, href }) => (
              <Card
                key={title}
                title={title}
                description={description}
                image={image}
                href={href}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
