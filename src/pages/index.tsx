import {
  Avatar,
  Box,
  Flex,
  Text,
  Heading,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import Links from "../components/Links";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const WORK_PROJECTS = [
  {
    href: "https://blog.replit.com/deeplinking",
    image: "/deeplinking.png",
    title: "Deeplinking",
    description: "Link to a specific file, line, and column.",
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
] as const;

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
    description: "Control your web browser hands free.",
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

export default function Index() {
  return (
    <Box>
      <Container height="100vh">
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
              <Heading fontSize="6xl">Hi, I'm Sergei</Heading>
              <Heading fontSize="2xl">Software Engineer & Creator</Heading>
              <Links />
            </Flex>
          </Flex>
        </Flex>
      </Container>

      <Divider />

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
              I'm originally from St. Petersburg, Russia and am now living in
              San Francisco, CA.
            </Text>
          </Box>
        </Flex>
      </Container>

      <Divider />

      <Container py="72px">
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

      <Divider />

      <Container py="72px">
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          maxWidth="750px"
          fontSize="18px"
        >
          <Box paddingBottom="16px">
            <Heading size="2xl">Projects</Heading>
          </Box>
          <Box width="100%" paddingBottom="16px">
            <Text textAlign="center">
              I'm passionate about building projects that help people. Here are
              some of the things I've worked on in my free time:
            </Text>
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

      <Divider />

      <Container py="72px">
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          maxWidth="750px"
          fontSize="18px"
        >
          <Box paddingBottom="16px">
            <Heading size="2xl">Contact</Heading>
          </Box>
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
    </Box>
  );
}
