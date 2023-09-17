import Image from "next/image";
import styled from "styled-components";
import { Subtitle, Text } from "@/components";

const Card = styled.li`
  border-radius: 12px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.4) 3.96%,
    rgba(255, 255, 255, 0.1) 95.1%
  );

  padding: 16px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  gap: 12px;
`;

interface ISkillCard {
  title: string;
  img: string;
}

export const SkillCard = ({ title, img }: ISkillCard) => {
  return (
    <Card>
      <Image src={img} alt={title} height={48} width={48} />
      <Text>{title}</Text>
    </Card>
  );
};
