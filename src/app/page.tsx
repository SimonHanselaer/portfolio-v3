"use client";

import styled from "styled-components";

import { Heading } from "@/theme";
import { Icon } from "@/components";
import { colors } from "@/theme/foundations";
import { Contact, Intro, Projects, Skills, About, CV } from "@/app/_components";

const Main = styled.main`
  padding: 0 ${(p) => p.theme.spacing.xl}px ${(p) => p.theme.spacing.m}px;

  @media (max-width: ${(p) => p.theme.mediaQueries.s}px) {
    padding: 0 ${(p) => p.theme.spacing.m}px ${(p) => p.theme.spacing.m}px;
  }
`;

const Header = styled.header`
  height: 96px;

  display: flex;
  align-items: center;

  gap: ${(p) => p.theme.spacing.s}px;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 448px auto 448px;
  grid-template-rows: 490px auto 152px auto;
  grid-template-areas: "intro intro skills" "projects projects projects" "about about contact" "about about cv";

  gap: ${({ theme }) => theme.spacing.l}px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 490px repeat(5, auto);
    grid-template-areas: "intro" "projects" "skills" "about" "contact" "cv";
  }
`;

export default function Home() {
  return (
    <Main>
      <Header>
        <Icon name="Logo" size={32} color={colors.base.primary} />
        <Heading as="h1">Simon Hanselaer</Heading>
      </Header>
      <Content>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        {/*<About />*/}
        <CV />
      </Content>
    </Main>
  );
}
