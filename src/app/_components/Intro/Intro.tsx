import { Text } from "@/theme";

import { Wrapper, Title, TextWrapper } from "./styles";

export const Intro = () => {
  return (
    <Wrapper>
      <Title as="h2">
        Hi! I&#39;m Simon Hanselaer,
        <br /> a front-end developer.
      </Title>
      <TextWrapper>
        <Text>
          Passionate about coding and pushing my skills to the next level.
          Always up for a challenge and ready to learn something new!
        </Text>
        <Text>
          My journey into coding started by creating Rainmeter skins. During my
          first (and only) year of ICT teacher training I gained a more in-depth
          understanding of programming. I decided to fully dive into web
          development by studying Devine (Digital Design & Development).
        </Text>
        <Text>
          In my spare time, I like to read fiction books, playing bass guitar
          and experiment with AI to create digital art. I am also a big movie
          and TV show fan.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};
