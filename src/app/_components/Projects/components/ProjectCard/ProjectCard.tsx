import Link from "next/link";
import Image from "next/image";

import { IProject } from "@/utils/hooks";
import { Subtitle, Text } from "@/theme";

import { Card, TagsContainer, TagWrapper } from "./styles";

export const ProjectCard = ({
  title,
  description,
  thumbnail,
  href,
  tags,
}: IProject) => {
  return (
    <Link href={href} target="_blank">
      <Card>
        <TagsContainer>
          {tags.map((tag, index) => (
            <TagWrapper key={`tag-${index}`} color={tag.color}>
              {tag.name}
            </TagWrapper>
          ))}
        </TagsContainer>
        <Image
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          style={{ alignSelf: "center" }}
          quality={100}
        />
        <div>
          <Subtitle>{title}</Subtitle>
          <Text>{description}</Text>
        </div>
      </Card>
    </Link>
  );
};
