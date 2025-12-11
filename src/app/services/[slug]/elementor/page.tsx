import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceContent, type ServiceSlug } from "@/data/services";
import {
  elementorTemplateSlugs,
  hasElementorTemplate,
} from "@/data/elementorTemplates";
import { loadElementorDocument } from "@/lib/elementorTemplate";
import ElementorHtmlRenderer from "@/components/service-page/ElementorHtmlRenderer";
import BusinessConsultingElementor from "@/components/service-page/templates/BusinessConsultingElementor";

const templateOverrides: Partial<Record<ServiceSlug, () => JSX.Element>> = {
  "business-consulting": BusinessConsultingElementor,
};

interface PageProps {
  params: Promise<{ slug: ServiceSlug | string }>;
}

export async function generateStaticParams() {
  return elementorTemplateSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!hasElementorTemplate(slug)) {
    return {};
  }

  const content = getServiceContent(slug);

  if (!content) {
    return {};
  }

  const url = `https://execor.vamtam.com/services/${content.slug}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function ElementorServicePage({ params }: PageProps) {
  const { slug } = await params;

  if (!hasElementorTemplate(slug)) {
    notFound();
  }

  const content = getServiceContent(slug as ServiceSlug);

  if (!content) {
    notFound();
  }

  const Template = templateOverrides[slug as ServiceSlug];

  if (Template) {
    return (
      <div className="elementor-page-host min-h-screen bg-white">
        <Template />
      </div>
    );
  }

  const { headResourcesMarkup, bodyAttributes, bodyContent } =
    await loadElementorDocument(slug as ServiceSlug);

  return (
    <div className="elementor-page-host min-h-screen bg-white">
      <ElementorHtmlRenderer
        bodyAttributes={bodyAttributes}
        bodyContent={bodyContent}
        headMarkup={headResourcesMarkup}
      />
    </div>
  );
}
