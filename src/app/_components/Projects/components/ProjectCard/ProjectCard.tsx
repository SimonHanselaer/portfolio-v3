import Link from "next/link";
import Image from "next/image";

import { Tag } from "@/components";
import { IProject } from "@/hooks";
import { Subtitle, Text } from "@/theme";

import { Card, TagsContainer } from "./styles";

export const ProjectCard = ({
  title,
  description,
  thumbnail,
  href,
  tags,
}: IProject) => {
  return (
    <Link href={href} target="_blank">
      <Card as="li">
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={`tag-${index}`} color="primary">
              {tag.name}
            </Tag>
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
