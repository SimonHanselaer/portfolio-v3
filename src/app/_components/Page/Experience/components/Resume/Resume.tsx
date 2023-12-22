import Link from "next/link";

import { Subtitle } from "@/theme";
import { Flex } from "@/components";

import { StyledImage } from "./styles";

export const Resume = () => {
  return (
    <Flex height="min-content">
      <Link href="/resume.pdf" target="_blank">
        <Flex flexDirection="column" gap="s">
          <Subtitle mode="secondary">View Full Résumé</Subtitle>
          <StyledImage
            src="/resume.jpg"
            alt="cv"
            width={200}
            height={275}
            priority
          />
        </Flex>
      </Link>
    </Flex>
  );
};
