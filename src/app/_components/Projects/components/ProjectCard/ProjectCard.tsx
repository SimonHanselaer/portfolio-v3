import Image from "next/image";
import styled from "styled-components";
import { Subtitle, Text } from "@/components";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 300px;
  padding: 16px;

  border-radius: 12px;

  backdrop-filter: blur(20px);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.8) 3.96%,
    rgba(255, 255, 255, 0.2) 95.1%
  );
`;

interface IProjectCard {
  title: string;
  description: string;
  thumbnail: string;
}

export const ProjectCard = ({
  title,
  description,
  thumbnail,
}: IProjectCard) => {
  return (
    <Card>
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        style={{ alignSelf: "center" }}
      />
      <div>
        <Subtitle>{title}</Subtitle>
        <Text>{description}</Text>
      </div>
    </Card>
  );
};
