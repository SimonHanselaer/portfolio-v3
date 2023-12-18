import styled from "styled-components";

import { Subtitle, Text } from "@/theme";
import { getBackground } from "@/utils/styles";

const Wrapper = styled.section`
  grid-area: intro;

  ${getBackground({ rotation: "north" })};

  padding: ${(p) => p.theme.spacing.l}px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled(Subtitle)`
  margin-bottom: ${(p) => p.theme.spacing.xs}px;
`;

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
