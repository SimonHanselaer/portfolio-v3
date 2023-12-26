type IBaseData = { isLoading: boolean; isError: any };

export type IProject = {
  title: string;
  description: string;
  thumbnail: string;
  priority: number;
  href: string;
  tags: string[];
  year: string;
};
export type IProjects = IProject[];
export type IProjectData = IBaseData & { projects: IProjects };

export type ISkill = {
  title: string;
  level: number;
  logo: string;
  type: string;
  priority: number;
};
export type ISkills = { [key: string]: ISkill[] };
export type ISkillData = IBaseData & { skills: ISkills };

export type IExperienceItem = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
  internship: boolean;
};
export type IExperienceItems = IExperienceItem[];
export type IExperienceData = IBaseData & { items: IExperienceItems };
