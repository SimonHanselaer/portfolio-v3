"use client";

import styled from "styled-components";

import { Icon, Heading } from "@/components";
import { colors } from "@/utils/foundations";
import { Contact, Intro, Projects, Skills, About, CV } from "@/app/_components";

const Main = styled.main`
  padding: 0 32px 16px;
`;

const Header = styled.header`
  height: 96px;

  display: flex;
  align-items: center;

  gap: 12px;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 448px auto 448px;
  grid-template-rows: 490px auto 152px auto;
  grid-template-areas: "intro intro skills" "projects projects projects" "about about contact" "about about cv";

  gap: 24px;
  width: 100%;

  @media (max-width: 1084px) {
    grid-template-columns: 1fr;
    grid-template-rows: 490px auto 490px auto auto auto;
    grid-template-areas: "intro" "projects" "skills" "about" "contact" "cv";
  }
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
        <Contact />
        <About />
        <CV />
      </Content>
    </Main>
  );
}
