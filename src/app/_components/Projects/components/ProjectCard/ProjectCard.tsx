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

  width: 340px;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProjectCard = () => {
  return (
    <Card>
      <Subtitle>OQTON</Subtitle>
      <Text>Accelerating Intelligent Manufacturing</Text>
    </Card>
  );
};
