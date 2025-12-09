import path from "path";
import { promises as fs } from "fs";
import type { ServiceSlug } from "@/data/services";
import { getElementorTemplatePath } from "@/data/elementorTemplates";

const assetRewrites: Array<[string, string]> = [
  ["https://execor.vamtam.com/wp-content/", "/wp-content/"],
  ["https://execor.vamtam.com/wp-includes/", "/wp-includes/"],
  ["https://execor.vamtam.com/cdn-cgi/", "/cdn-cgi/"],
];

const headExtractor = /<head[^>]*>([\s\S]*?)<\/head>/i;
const bodyExtractor = /<body([^>]*)>([\s\S]*?)<\/body>/i;
const attributeParser =
  /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
const stylesheetLinkRegex = /<link\b[^>]*rel=["']?stylesheet[^>]*>/gi;
const styleTagRegex = /<style\b[\s\S]*?<\/style>/gi;
const scriptTagRegex = /<script\b[\s\S]*?<\/script>/gi;

const ensureDoctype = (html: string) =>
  /^\s*<!DOCTYPE/i.test(html) ? html : `<!DOCTYPE html>\n${html}`;

const toEscapedPath = (value: string) => value.replaceAll("/", "\\/");

export const rewriteAssetUrls = (markup: string) =>
  assetRewrites.reduce((acc, [remote, local]) => {
    const escapedRemote = toEscapedPath(remote);
    const escapedLocal = toEscapedPath(local);

    return acc
      .replaceAll(remote, local)
      .replaceAll(escapedRemote, escapedLocal);
  }, markup);

const parseAttributes = (rawAttributes: string) => {
  const attributes: Record<string, string> = {};
  if (!rawAttributes.trim()) {
    return attributes;
  }

  let match: RegExpExecArray | null;
  while ((match = attributeParser.exec(rawAttributes))) {
    const [, name, doubleQuoted, singleQuoted, unquoted] = match;
    if (!name) {
      continue;
    }
    const value = doubleQuoted ?? singleQuoted ?? unquoted ?? "";
    attributes[name] = value;
  }

  return attributes;
};

const extractStylesheetLinks = (markup: string) =>
  markup.match(stylesheetLinkRegex) ?? [];

const extractStyleTags = (markup: string) => markup.match(styleTagRegex) ?? [];

const extractHeadScripts = (headMarkup: string) =>
  headMarkup.match(scriptTagRegex) ?? [];

const serializeHeadMarkup = (headMarkup: string, bodyMarkup: string) => {
  const headStyles = [
    ...extractStylesheetLinks(headMarkup),
    ...extractStyleTags(headMarkup),
  ];
  const bodyStyles = extractStylesheetLinks(bodyMarkup);
  const headScripts = extractHeadScripts(headMarkup);

  const uniqueStyles = Array.from(new Set([...headStyles, ...bodyStyles]));

  return [...uniqueStyles, ...headScripts].join("\n");
};

export interface ElementorDocumentPayload {
  documentHtml: string;
  headResourcesMarkup: string;
  bodyAttributes: Record<string, string>;
  bodyContent: string;
}

export const loadElementorDocument = async (
  slug: ServiceSlug
): Promise<ElementorDocumentPayload> => {
  const templatePath = getElementorTemplatePath(slug);

  if (!templatePath) {
    throw new Error(`Missing Elementor template for slug: ${slug}`);
  }

  const absolutePath = path.join(process.cwd(), templatePath);
  const html = await fs.readFile(absolutePath, "utf-8");
  const hydratedHtml = rewriteAssetUrls(html);

  const headMatch = hydratedHtml.match(headExtractor);
  const headInner = headMatch?.[1] ?? "";

  const bodyMatch = hydratedHtml.match(bodyExtractor);
  const rawBodyAttrs = bodyMatch?.[1] ?? "";
  const bodyAttributes = parseAttributes(rawBodyAttrs);
  const bodyContent = bodyMatch?.[2] ?? hydratedHtml;
  const headResourcesMarkup = serializeHeadMarkup(headInner, bodyContent);

  return {
    documentHtml: ensureDoctype(hydratedHtml),
    headResourcesMarkup,
    bodyAttributes,
    bodyContent,
  };
};
