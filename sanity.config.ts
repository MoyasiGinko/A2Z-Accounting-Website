import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";

if (!projectId || !dataset) {
  throw new Error("Missing Sanity environment variables");
}

export default defineConfig({
  name: "a2z-accounting-studio",
  title: "A2Z Accounting Studio",
  projectId,
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
