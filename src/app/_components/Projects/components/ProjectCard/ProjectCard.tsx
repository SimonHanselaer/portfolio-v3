import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { IProject } from "@/utils/hooks";
import { Subtitle, Text } from "@/components";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const TagContainer = styled.ul`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  flex-wrap: wrap;
  max-width: 128px;
  justify-content: flex-end;

  gap: 4px;
`;

const Tag = styled(Text)<{ color: string }>`
  padding: 4px;
  border-radius: 6px;

  font-size: 12px;

  background-color: ${(p) => p.color};
  color: white;

  white-space: nowrap;
`;

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
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={`tag-${index}`} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </TagContainer>
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
