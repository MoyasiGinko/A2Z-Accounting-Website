import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageClient from "@/components/service-page/ServicePageClient";
import {
  getServiceContent,
  serviceSlugs,
  type ServiceSlug,
} from "@/data/services";

interface PageProps {
  params: Promise<{ slug: ServiceSlug | string }>;
}

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
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

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const content = getServiceContent(slug);

  if (!content) {
    notFound();
  }

  return <ServicePageClient content={content} />;
}
