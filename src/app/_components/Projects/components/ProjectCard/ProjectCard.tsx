import Link from "next/link";
import Image from "next/image";

import { IProject } from "@/hooks";
import { Subtitle, Text } from "@/theme";
import { Flex, Tag } from "@/components";

import { Card, YearContainer } from "./styles";

export const ProjectCard = ({
  title,
  description,
  thumbnail,
  href,
  tags,
  year,
}: IProject) => {
  return (
    <Link href={href} target="_blank">
      <Card as="li">
        <YearContainer>
          <Tag color="primary">{year}</Tag>
        </YearContainer>
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
        <Flex gap="xxs" mt="xs">
          {tags.map((tag, index) => (
            <Tag key={`tag-${index}`} color="secondary">
              {tag}
            </Tag>
          ))}
        </Flex>
      </Card>
    </Link>
  );
};
