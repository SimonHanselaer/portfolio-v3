import { sortBy } from "lodash";
import { EntryCollection, EntrySkeletonType } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { formatPeriod } from "@/utils";
import { IExperienceItems } from "@/hooks";

export const mapExperience = (
  data: EntryCollection<EntrySkeletonType, undefined, string> | undefined
) =>
  sortBy(data?.items, "fields.startDate").map((item) => ({
    title: item.fields.name,
    link: item.fields.link,
    tags: item.fields.tags,
    period: formatPeriod(
      item.fields.startDate as string,
      item.fields.endDate as string | undefined
    ),
    internship: !!item.fields.internship,
    description: documentToReactComponents(item.fields.description as any),
  })) as IExperienceItems;
