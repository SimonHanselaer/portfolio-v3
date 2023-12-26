import { sortBy } from "lodash";
import { EntryCollection, EntrySkeletonType } from "contentful";

import { IProjects } from "@/hooks";

export const mapProjects = (
  data: EntryCollection<EntrySkeletonType, undefined, string> | undefined
) =>
  (
    sortBy(
      data?.items.map((item) => ({
        title: item.fields.title,
        description: item.fields.description,
        priority: item.fields.priority,
        href: (item.fields.resources as { href: string }[])?.[0]?.href,
        tags: item.fields.tags,
        year: item.fields.year,
        thumbnail: (item.fields.icon as any)?.fields.file.url.replace(
          "//",
          "https://"
        ),
      })),
      "priority"
    ) as IProjects
  ).filter((project) => project.priority > 0);
