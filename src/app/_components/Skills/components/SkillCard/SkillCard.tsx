import Image from "next/image";

import { Card } from "./styles";

interface ISkillCard {
  title: string;
  img: string;
}

export const SkillCard = ({ title, img }: ISkillCard) => {
  return (
    <Card as="li">
      <Image src={img} alt={title} height={32} width={32} />
    </Card>
  );
};
