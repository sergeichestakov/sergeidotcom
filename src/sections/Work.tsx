import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const WORK_PROJECTS = [
  {
    href: "https://blog.replit.com/deeplinking",
    image: "/deeplinking.jpg",
    title: "Deeplinking",
    description: "Link to a specific file, line, and column in a project.",
  },
  {
    href: "https://blog.replit.com/multitabs",
    image: "/multitabs.jpg",
    title: "Tabs",
    description: "Open multiple files in different tabs.",
  },
  {
    href: "https://blog.replit.com/commandbar",
    image: "/search.jpg",
    title: "Search",
    description: "Project-wide search.",
  },
  {
    href: "https://blog.replit.com/tabbed-shell",
    image: "/tabbed-shell.jpg",
    title: "Tabbed Shell",
    description: "Easier access to a fully functioning Linux shell.",
  },
  {
    href: "https://blog.replit.com/markdown-preview",
    image: "/markdown-preview.jpg",
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
    image: "/vite.jpg",
    title: "Vite",
    description: "A faster and leaner React template.",
  },
  {
    href: "https://blog.replit.com/collaborative-coding",
    image: "/collaborative-coding.jpg",
    title: "Observation Mode",
    description: "Follow another online user's cursor as they code.",
  },
  {
    href: "https://blog.replit.com/collaborative-coding",
    image: "/filetree-presence.jpg",
    title: "Filetree Presence",
    description: "See which files other online users have open.",
  },
] as const;

export default function Work() {
  return (
    <Container id="work" pt="32px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#work">Work</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Features I've implemented at Replit.</SubHeading>
          <Flex flexWrap="wrap" justify="center" align="center">
            {WORK_PROJECTS.map(({ title, description, image, href }) => (
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
