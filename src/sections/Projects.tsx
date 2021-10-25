import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";

const PERSONAL_PROJECTS = [
  {
    href: "https://twitter.com/SergeiChestakov/status/1289726580210561025?s=20",
    image: "/snapcode.png",
    title: "Snapcode",
    description: "Take a picture of handwritten code and run it.",
  },
  {
    href: "https://docs.expo.io/versions/latest/sdk/in-app-purchases/",
    image: "/expo.jpg",
    title: "Expo In-App Purchases",
    description:
      "A React Native module for In-App Purchases on iOS and Android.",
  },
  {
    href: "https://devpost.com/software/nosegoes-45g87z",
    image: "/nosegoes.jpg",
    title: "Nose Goes",
    description:
      "Control your web browser hands free using your face and voice.",
  },
  {
    href: "https://twitter.com/SergeiChestakov/status/1362909033368145921",
    image: "/replit-zoom.jpg",
    title: "Replit Zoom",
    description: "A Zoom clone embedded inside of Replit.",
  },
  {
    href: "https://getschedulehelper.com",
    image: "/schedule-helper.png",
    title: "Schedule Helper",
    description: "A Chrome Extension for UC Davis students. Over 15,000 MAUs.",
  },
  {
    href: "https://devpost.com/software/webmote-tkf2lc",
    image: "/webmote.jpg",
    title: "Webmote",
    description:
      "A remote control for your browser. Won prize at TreeHacks '19.",
  },
  {
    href: "https://crates.io/crates/todo-to-issue",
    image: "/todo-to-issue.png",
    title: "Todo-to-issue",
    description: "CLI tool that converts TODO comments into GitHub issues.",
  },
  {
    href: "https://github.com/sergeichestakov/expo-yelp",
    image: "/expo-yelp.png",
    title: "Expo Yelp",
    description: "Minimal Yelp Client built using Expo",
  },
  {
    href: "https://devpost.com/software/smart-sensor",
    image: "/smart-sensor.jpg",
    title: "Smart Sensor",
    description: "IoT Device that automates your lights. Won HackDavis '17.",
  },
  {
    href: "https://github.com/mattrasto/phase",
    image: "/phase.png",
    title: "Phase",
    description:
      "Graph visualization library for complex systems and simulations.",
  },
] as const;

export default function Projects() {
  return (
    <Container id="projects" py="72px">
      <Flex flexDir="column" justify="center" align="center" maxWidth="750px">
        <Header href="#projects">Projects</Header>
        <Box width="100%" paddingBottom="16px">
          <SubHeading>Projects I've built in my free time</SubHeading>
          <Flex flexWrap="wrap" justify="center" align="center">
            {PERSONAL_PROJECTS.map(({ title, description, image, href }) => (
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
