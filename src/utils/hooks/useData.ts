import useSWR from "swr";
import { contentful } from "@/utils";
import { sortBy } from "lodash";

type IContentType = "project" | "skill" | "information" | "contact";

export type IProject = { title: string; description: string };
export type IProjects = IProject[];

export type ISkill = { title: string; level: number; logo: string };
export type ISkills = ISkill[];

export type IContactLink = { link: string; icon: string; id: number };
export type IContactLinks = IContactLink[];

export type IInformationItem = {
  title: string;
  link: string;
  icon: string;
  id: number;
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
        projects: data?.items.map((item) => ({
          title: item.fields.title,
          description: item.fields.description,
        })) as IProjects,
        isLoading,
        isError: error,
      };
    case "skill":
      return {
        skills: sortBy(
          data?.items.map((item) => ({
            title: item.fields.title,
            level: item.fields.level,
            logo: (item.fields.logo as any)?.fields.file.url.replace(
              "//",
              "https://"
            ),
          })) as ISkills,
          "level"
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
            icon: (item.fields?.icon as any)?.fields.file.url.replace(
              "//",
              "https://"
            ),
          })) as IInformationItems,
          "id"
        ),
        isLoading,
        isError: error,
      };
  }
}
