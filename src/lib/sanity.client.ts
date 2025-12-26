import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";

if (!projectId || !dataset) {
  throw new Error("Missing Sanity projectId or dataset");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
  perspective: process.env.SANITY_READ_TOKEN ? "drafts" : "published",
});

export const sanityFetch = async <T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> => {
  return sanityClient.fetch<T>(query, params, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
};
