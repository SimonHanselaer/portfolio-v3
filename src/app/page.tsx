"use client";

import {
  Intro,
  Skills,
  Contact,
  Projects,
  Experience,
} from "@/app/_components";
import { Flex, Icon } from "@/components";
import { Heading, useThemeContext } from "@/theme";

import { Main, Header, Content } from "./styles";

export default function Home() {
  const { toggleMode, mode } = useThemeContext();

  console.log("mode", mode);

  return (
    <Main key={mode}>
      <Header>
        <Flex alignItems="center" gap="s">
          <Icon name="Logo" size="xl" />
          <Heading as="h1">Simon Hanselaer</Heading>
        </Flex>
        <Icon
          p="m"
          size="l"
          onClick={toggleMode}
          name={mode === "light" ? "DarkMode" : "LightMode"}
        />
      </Header>
      <Content>
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Content>
    </Main>
  );
}
