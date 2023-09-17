import styled from "styled-components";
import { Subtitle, Text } from "@/components";

const Card = styled.li`
  border-radius: 12px;

  backdrop-filter: blur(20px);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.8) 3.96%,
    rgba(255, 255, 255, 0.2) 95.1%
  );

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 340px;
`;

interface IProjectCard {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: IProjectCard) => {
  return (
    <Card>
      <Subtitle>{title}</Subtitle>
      <Text>{description}</Text>
    </Card>
  );
};
