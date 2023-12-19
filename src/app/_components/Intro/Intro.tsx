import { Text } from "@/theme";

import { Wrapper, Title } from "./styles";

export const Intro = () => {
  return (
    <Wrapper>
      <Title as="h2">
        Hi! I&#39;m Simon Hanselaer,
        <br /> a front-end developer.
      </Title>
      <Text>
        Passionate about coding and pushing my skills to the next level.
        <br />
        Always up for a challenge and ready to learn something new!
      </Text>
    </Wrapper>
  );
};
