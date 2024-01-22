import { createClient } from "contentful";

export const contentful = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});
