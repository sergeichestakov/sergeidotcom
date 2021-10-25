import * as React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";

interface Props {
  description: string;
  title: string;
  image: string;
  href: string;
}

export default function Card({ title, description, image, href }: Props) {
  const linkRef = React.useRef<HTMLAnchorElement | null>(null);

  return (
    <Box p="5">
      <Box
        p="5"
        width="320px"
        height="350px"
        borderWidth="1px"
        _hover={{ cursor: "pointer", borderColor: "blue.400" }}
        onClick={() => {
          linkRef.current.click();
        }}
      >
        <Image
          borderRadius="md"
          size="md"
          width="100%"
          height="200px"
          objectFit="contain"
          src={image}
        />
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {title}
        </Text>
        <Text mt={2}>{description}</Text>
      </Box>
      <Link href={href} isExternal ref={linkRef} display="none" />
    </Box>
  );
}
