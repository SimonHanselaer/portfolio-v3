"use client";

import {
  Intro,
  Skills,
  Contact,
  Projects,
  Experience,
} from "@/app/_components";
import { Heading } from "@/theme";
import { Icon } from "@/components";

import { Main, Header, Content } from "./styles";

export default function Home() {
  return (
    <Main>
      <Header>
        <Icon name="Logo" size="xl" />
        <Heading as="h1">Simon Hanselaer</Heading>
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
