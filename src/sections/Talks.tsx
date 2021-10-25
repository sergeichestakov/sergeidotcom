import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const TALKS = [
  {
    href: "https://shipfast.today",
    image: "/shipfast.png",
    title: "How to Ship Fast",
    description: "A talk on how to ship fast as an engineering team.",
  },
  {
    href: "https://privacy.sergeichestakov.repl.co/",
    image: "/privacy.png",
    title: "On Internet Privacy",
    description: "A talk about internet privacy and why it's important.",
  },
  {
    href: "https://schedulehelper.sergeichestakov.repl.co/",
    image: "/howimadeschedulehelper.png",
    title: "How I Made ScheduleHelper",
    description: "A talk about what I learned building ScheduleHelper.",
  },
  {
    href: "https://html-css.sergeichestakov.repl.co/",
    image: "/html-css.png",
    title: "HTML + CSS Workshop",
    description: "An introduction to HTML + CSS at HackTheCloud.",
  },
] as const;

export default function Talks() {
  return (
    <Container id="talks" py="72px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#talks">Talks</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Talks I've given</SubHeading>
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
