"use client";

import styled from "styled-components";

import { colors } from "@/utils/foundations";
import { Icon, Heading } from "@/components";
import { Intro, Projects, Skills } from "@/app/_components";

const Main = styled.main`
  padding: 0 32px;
`;

const Header = styled.header`
  height: 96px;

  display: flex;
  align-items: center;

  gap: 12px;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto) 448px;
  grid-template-rows: 490px 510px 256px;
  grid-template-areas: "intro intro skills" "projects projects projects" "contact about cv";
  gap: 24px;

  width: 100%;
`;

const Contact = styled.article`
  grid-area: contact;
`;

const About = styled.article`
  grid-area: about;
`;

const CV = styled.article`
  grid-area: cv;
`;

export default function Home() {
  return (
    <Main>
      <Header>
        <Icon name="Logo" size={32} color={colors.base.primary} />
        <Heading tag="h1">Simon Hanselaer</Heading>
      </Header>
      <Content>
        <Intro />
        <Skills />
        <Projects />
        <Contact>
          <Heading tag="h2">Contact</Heading>
        </Contact>
        <About>
          <Heading tag="h2">About Me</Heading>
        </About>
        <CV></CV>
      </Content>
    </Main>
  );
}
