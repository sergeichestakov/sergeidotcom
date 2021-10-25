import * as React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";

const WORK_PROJECTS = [
  {
    href: "https://blog.replit.com/deeplinking",
    image: "/deeplinking.png",
    title: "Deeplinking",
    description: "Link to a specific file, line, and column in a project.",
  },
  {
    href: "https://blog.replit.com/multitabs",
    image: "/multitabs.png",
    title: "Tabs",
    description: "Open multiple files in different tabs.",
  },
  {
    href: "https://blog.replit.com/commandbar",
    image: "/search.png",
    title: "Search",
    description: "Project-wide search.",
  },
  {
    href: "https://blog.replit.com/tabbed-shell",
    image: "/tabbed-shell.png",
    title: "Tabbed Shell",
    description: "A better shell experience.",
  },
  {
    href: "https://blog.replit.com/markdown-preview",
    image: "/markdown-preview.png",
    title: "Markdown Preview",
    description: "A real time preview pane for markdown files.",
  },
  {
    href: "https://www.hcaptcha.com/",
    image: "/hcaptcha.png",
    title: "hCaptcha",
    description: "Led site-wide migration from reCaptcha to hCaptcha.",
  },
  {
    href: "https://blog.replit.com/boosts",
    image: "/boosts.jpg",
    title: "Boosts",
    description: "Increased CPU and RAM resource limits for paid users.",
  },
  {
    href: "https://blog.replit.com/vite",
    image: "/vite.png",
    title: "Vite",
    description: "A faster and leaner React template.",
  },
  {
    href: "https://blog.replit.com/collaborative-coding",
    image: "/collaborative-coding.png",
    title: "Observation Mode",
    description: "Follow another user's cursor as they code.",
  },
  {
    href: "https://blog.replit.com/collaborative-coding",
    image: "/filetree-presence.png",
    title: "Filetree Presence",
    description: "See which files other users have open.",
  },
] as const;

export default function Work() {
  return (
    <Container id="work" py="72px">
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        maxWidth="750px"
        fontSize="18px"
      >
        <Box paddingBottom="16px">
          <Heading size="2xl">Work</Heading>
        </Box>
        <Box width="100%" paddingBottom="16px">
          <Text textAlign="center">
            I've shipped a lot during my time at Replit. Here are some of the
            projects I've worked on:
          </Text>
          <Flex flexWrap="wrap" justify="center" align="center">
            {WORK_PROJECTS.map(({ title, description, image, href }) => (
              <Card
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
