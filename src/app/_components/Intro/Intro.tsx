import styled from "styled-components";

import { Subtitle, Text } from "@/components";
import { getBackground } from "@/utils/styles";

const Wrapper = styled.section`
  grid-area: intro;

  ${getBackground({ rotation: "north" })};

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled(Subtitle)`
  margin-bottom: 8px;
`;

export const Intro = () => {
  return (
    <Wrapper>
      <Title tag="h2">
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
