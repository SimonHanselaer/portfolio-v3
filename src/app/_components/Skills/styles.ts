import styled from "styled-components";

export const Wrapper = styled.article`
  grid-area: skills;

  border-radius: 12px;
  background-size: cover;
  background-image: url("/backgrounds/skills.svg");

  padding: 16px;
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 128px);
  grid-template-columns: repeat(3, 128px);

  gap: 16px;
  margin-top: 12px;
`;
