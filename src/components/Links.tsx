import { Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <Flex pt="8px" width="112px" justify="space-between">
      <Link
        href="https://twitter.com/sergeichestakov"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </Link>

      <Link
        href="https://github.com/sergeichestakov"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/sergeichestakov/"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </Link>

      <Link
        href="mailto:me@sergei.com"
        isExternal
        _hover={{ color: "blue.300" }}
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </Link>
    </Flex>
  );
}
