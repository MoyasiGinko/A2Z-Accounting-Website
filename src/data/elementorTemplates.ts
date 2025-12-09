import type { ServiceSlug } from "./services";

const elementorTemplateMap: Partial<Record<ServiceSlug, string>> = {
  "business-consulting": "static-website/service-page.html",
};

export const elementorTemplateSlugs = Object.keys(
  elementorTemplateMap
) as ServiceSlug[];

export const hasElementorTemplate = (
  slug: ServiceSlug | string
): slug is ServiceSlug => elementorTemplateSlugs.includes(slug as ServiceSlug);

export const getElementorTemplatePath = (slug: ServiceSlug) =>
  elementorTemplateMap[slug];
