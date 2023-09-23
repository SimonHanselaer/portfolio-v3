import useSWR from "swr";
import { contentful } from "@/utils";
import { groupBy, sortBy } from "lodash";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type IContentType = "project" | "skill" | "information" | "contact";

export type IProject = {
  title: string;
  description: string;
  thumbnail: string;
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

export type IInformationItem = {
  id: number;
  title: string;
  text: string;

  link: string;
};
export type IInformationItems = IInformationItem[];

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
  contentType: "information"
): IBaseData & { items: IInformationItems };
export function useData(contentType: IContentType) {
  const { data, isLoading, error } = useSWR(contentType, fetcher, {
    revalidateOnFocus: false,
  });

  switch (contentType) {
    case "project":
      return {
        projects: sortBy(
          data?.items.map((item) => ({
            title: item.fields.title,
            description: item.fields.description,
            priority: item.fields.priority,
            thumbnail: (item.fields.icon as any)?.fields.file.url.replace(
              "//",
              "https://"
            ),
          })),
          "priority"
        ) as IProjects,
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
    case "information":
      return {
        items: sortBy(
          data?.items.map((item) => ({
            id: item.fields.id,
            title: item.fields.title,
            link: item.fields.link,
            text: documentToReactComponents(item.fields.text as any),
          })) as IInformationItems,
          "id"
        ),
        isLoading,
        isError: error,
      };
  }
}
