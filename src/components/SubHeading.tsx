import * as React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function SubHeading({ children }: Props) {
  return (
    <Text fontStyle="italic" textAlign="center" color="gray.300">
      {children}
    </Text>
  );
}
