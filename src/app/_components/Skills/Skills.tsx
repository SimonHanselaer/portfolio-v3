import useSWR from "swr";

import { contentful } from "@/utils";
import { Heading } from "@/components";

import { SkillCard } from "./components";
import { Wrapper, Cards } from "./styles";

const fetcher = async (query: string) => {
  console.log("fetch skills");
  const entries = await contentful.getEntries({ content_type: query });
  return entries.items
    .map((item) => ({
      title: (item.fields as any)?.title,
      level: (item.fields as any)?.level,
      logo: (item.fields as any)?.logo.fields.file.url.replace(
        "//",
        "https://"
      ),
    }))
    .sort((a, b) => b.level - a.level);
};

export const Skills = () => {
  const { data } = useSWR("skill", fetcher);

  return (
    <Wrapper>
      <Heading tag="h2">Skills</Heading>
      <Cards>
        {data?.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} img={skill.logo} />
        ))}
      </Cards>
    </Wrapper>
  );
};
