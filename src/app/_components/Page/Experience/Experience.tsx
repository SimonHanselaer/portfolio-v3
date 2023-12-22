import { Heading } from "@/theme";

import { Section, Wrapper } from "./styles";
import { Overview, Resume } from "./components";

export const Experience = () => {
  return (
    <Section>
      <Heading as="h2">Experience</Heading>
      <Wrapper>
        <Overview />
        <Resume />
      </Wrapper>
    </Section>
  );
};
