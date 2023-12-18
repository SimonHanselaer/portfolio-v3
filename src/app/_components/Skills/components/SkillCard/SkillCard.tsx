import Image from "next/image";
import styled from "styled-components";

const Card = styled.li`
  border-radius: ${(p) => p.theme.spacing.s}px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.4) 3.96%,
    rgba(255, 255, 255, 0.1) 95.1%
  );

  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;
`;

interface ISkillCard {
  title: string;
  img: string;
}

export const SkillCard = ({ title, img }: ISkillCard) => {
  return (
    <Card>
      <Image src={img} alt={title} height={32} width={32} />
    </Card>
  );
};
