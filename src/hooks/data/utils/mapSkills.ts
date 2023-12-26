import { groupBy, sortBy } from "lodash";
import { EntryCollection, EntrySkeletonType } from "contentful";

import { ISkill } from "@/hooks";

export const mapSkills = (
  data: EntryCollection<EntrySkeletonType, undefined, string> | undefined
) =>
  groupBy(
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
  );
