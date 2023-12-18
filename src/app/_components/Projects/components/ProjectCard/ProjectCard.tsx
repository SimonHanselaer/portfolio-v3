import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { IProject } from "@/utils/hooks";
import { Subtitle, Text, Tag } from "@/theme";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${(p) => p.theme.spacing.m}px;
  border-radius: ${(p) => p.theme.spacing.s}px;

  backdrop-filter: blur(20px);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.8) 3.96%,
    rgba(255, 255, 255, 0.2) 95.1%
  );
`;

const TagsContainer = styled.ul`
  position: absolute;
  top: ${(p) => p.theme.spacing.s}px;
  right: ${(p) => p.theme.spacing.s}px;

  display: flex;
  flex-wrap: wrap;
  max-width: 128px;
  justify-content: flex-end;

  gap: ${(p) => p.theme.spacing.xxs}px;
`;

const TagWrapper = styled(Tag)<{ color: string }>`
  padding: ${(p) => p.theme.spacing.xxs}px;
  border-radius: 6px;

  background-color: ${(p) => p.color};
  color: ${(p) => p.theme.colors.base.white};

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
