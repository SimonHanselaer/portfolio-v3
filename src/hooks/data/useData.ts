import useSWR from "swr";

import { contentful } from "@/utils";

import { mapExperience, mapProjects, mapSkills } from "./utils";
import { IExperienceData, IProjectData, ISkillData } from "./types";

type IContentType = "project" | "skill" | "experience";

const fetcher = async (contentType: IContentType) => {
  return contentful.getEntries({ content_type: contentType });
};

export function useData(contentType: "skill"): ISkillData;
export function useData(contentType: "project"): IProjectData;
export function useData(contentType: "experience"): IExperienceData;
export function useData(contentType: IContentType) {
  const { data, isLoading, error } = useSWR(contentType, fetcher, {
    revalidateOnFocus: false,
  });

  switch (contentType) {
    case "project":
      return {
        projects: mapProjects(data),
        isLoading,
        isError: error,
      };
    case "skill":
      return {
        skills: mapSkills(data),
        isLoading,
        isError: error,
      };
    case "experience":
      return {
        items: mapExperience(data),
        isLoading,
        isError: error,
      };
  }
}
