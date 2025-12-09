import { NextResponse } from "next/server";
import { hasElementorTemplate } from "@/data/elementorTemplates";
import { loadElementorDocument } from "@/lib/elementorTemplate";
import type { ServiceSlug } from "@/data/services";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;

  if (!hasElementorTemplate(slug)) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  try {
    const { documentHtml } = await loadElementorDocument(slug as ServiceSlug);

    return new NextResponse(documentHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    console.error(`Failed to load Elementor template for slug ${slug}:`, error);
    return NextResponse.json(
      { error: "Failed to load template" },
      {
        status: 500,
      }
    );
  }
}
