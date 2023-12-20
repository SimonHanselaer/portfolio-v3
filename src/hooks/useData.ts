import useSWR from "swr";
import { groupBy, sortBy } from "lodash";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { contentful, formatPeriod } from "@/utils";

type IContentType = "project" | "skill" | "experience" | "contact";

export type IProject = {
  title: string;
  description: string;
  thumbnail: string;
  priority: number;
  href: string;
  tags: { name: string; color: string }[];
};
export type IProjects = IProject[];

export type ISkill = {
  title: string;
  level: number;
  logo: string;
  type: string;
  priority: number;
};
export type ISkills = { [key: string]: ISkill[] };

export type IContactLink = { link: string; icon: string; id: number };
export type IContactLinks = IContactLink[];

export type IExperienceItem = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
  internship: boolean;
};
export type IExperienceItems = IExperienceItem[];

type IBaseData = { isLoading: boolean; isError: any };

const fetcher = async (contentType: IContentType) => {
  console.log(`fetch ${contentType}`);
  return contentful.getEntries({ content_type: contentType });
};

export function useData(
  contentType: "project"
): IBaseData & { projects: IProjects };
export function useData(contentType: "skill"): IBaseData & { skills: ISkills };
export function useData(
  contentType: "contact"
): IBaseData & { links: IContactLinks };
export function useData(
  contentType: "experience"
): IBaseData & { items: IExperienceItems };
export function useData(contentType: IContentType) {
  const { data, isLoading, error } = useSWR(contentType, fetcher, {
    revalidateOnFocus: false,
  });

  switch (contentType) {
    case "project":
      return {
        projects: (
          sortBy(
            data?.items.map((item) => ({
              title: item.fields.title,
              description: item.fields.description,
              priority: item.fields.priority,
              href: (item.fields.resources as { href: string }[])?.[0]?.href,
              tags: item.fields.tags,
              thumbnail: (item.fields.icon as any)?.fields.file.url.replace(
                "//",
                "https://"
              ),
            })),
            "priority"
          ) as IProjects
        ).filter((project) => project.priority > 0),
        isLoading,
        isError: error,
      };
    case "skill":
      return {
        skills: groupBy(
          sortBy(
            data?.items.map((item) => ({
              title: item.fields.title,
              level: item.fields.level,
              type: item.fields.type,
              priority: item.fields.priority,
              logo: (item.fields.logo as any)?.fields.file.url.replace(
                "//",
                "https://"
              ),
            })) as ISkill[],
            "priority"
          ),
          "type"
        ),
        isLoading,
        isError: error,
      };
    case "contact":
      return {
        links: sortBy(
          data?.items.map((item) => ({
            link: item.fields.link,
            icon: (item.fields?.icon as any)?.fields.file.url.replace(
              "//",
              "https://"
            ),
            id: item.fields.id,
          })) as IContactLinks,
          "id"
        ),
        isLoading,
        isError: error,
      };
    case "experience":
      return {
        items: sortBy(data?.items, "fields.startDate").map((item) => ({
          title: item.fields.name,
          link: item.fields.link,
          tags: item.fields.tags,
          period: formatPeriod(
            item.fields.startDate as string,
            item.fields.endDate as string | undefined
          ),
          internship: !!item.fields.internship,
          description: documentToReactComponents(
            item.fields.description as any
          ),
        })) as IExperienceItems,
        isLoading,
        isError: error,
      };
  }
}
