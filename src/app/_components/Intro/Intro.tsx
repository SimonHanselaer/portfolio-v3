import { Subtitle, Text } from "@/components";
import styled from "styled-components";

const Wrapper = styled.article`
  grid-area: intro;

  border-radius: 12px;
  background-size: cover;
  background-image: url("/backgrounds/intro.svg");

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
        Making the web look beautiful one pixel at a time.
        <br />
        Passionate about coding and pushing my skills to the next level.
        <br />
        Always up for a challenge and ready to learn something new!
      </Text>
    </Wrapper>
  );
};
