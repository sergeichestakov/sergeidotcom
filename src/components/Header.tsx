import * as React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Header({ children, href }: Props) {
  return (
    <Box paddingBottom="16px">
      <Link href={href}>
        <Heading fontFamily="Inter" fontWeight="normal" fontSize="36px">
          {children}
        </Heading>
      </Link>
    </Box>
  );
}
