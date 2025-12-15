import React from "react";

const resources = [
  {
    title: "Complete Digital Marketing Strategy Guide",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    downloadUrl: "#download-marketing-guide",
    alt: "Marketing strategy dashboard",
  },
  {
    title: "Brand Identity Checklist & Templates",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    downloadUrl: "#download-brand-identity",
    alt: "Brand design elements",
  },
  {
    title: "Social Media Content Calendar 2024",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    downloadUrl: "#download-content-calendar",
    alt: "Social media planning",
  },
  {
    title: "SEO Optimization Workbook for Beginners",
    image:
      "https://images.unsplash.com/photo-1571677208715-35f8d5c55a16?w=800&h=450&fit=crop",
    downloadUrl: "#download-seo-workbook",
    alt: "SEO analytics",
  },
  {
    title: "Email Marketing Campaign Templates",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
    downloadUrl: "#download-email-templates",
    alt: "Email marketing",
  },
  {
    title: "Customer Persona Development Framework",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    downloadUrl: "#download-persona-framework",
    alt: "Team collaboration",
  },
];

const FreeResourcesPage = () => {
  const hasResources = resources.length > 0;

  return (
    <main className="bg-[#f7f8fa] mt-10 text-[#0f172a] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1
            className="!font-serif !mt-0 font-semibold !text-[#0f172a] mb-4"
            style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
          >
            Download Our Free Resources
          </h1>
          <p className="text-[#334155] text-lg md:text-xl max-w-2xl mx-auto !font-sans font-medium">
            Download our curated collection of guides, templates, and tools to
            accelerate your growth.
          </p>
        </header>

        {/* Resources Grid / Empty State */}
        {hasResources ? (
          <div
            id="resources-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {resources.map((resource, index) => (
              <article
                key={index}
                className="rounded-xl border border-[rgba(15,118,110,0.12)] shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden group"
              >
                {/* Image Container */}
                <div className="aspect-video overflow-hidden rounded-t-xl bg-gray-100">
                  <img
                    src={resource.image}
                    alt={resource.alt || resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="line-clamp-2 !mt-0 !font-serif !font-semibold !text-[#0f172a] !text-[1.1rem] leading-snug min-h-[2.6rem]">
                    {resource.title}
                  </h3>

                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#84C9E2] text-black text-sm !font-sans font-semibold transition-colors duration-200 hover:bg-[#6ab5d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#84C9E2]"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                    Download Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div id="empty-state" className="text-center py-16">
            <p className="text-[#334155] text-lg mb-6 !font-sans">
              No resources available at the moment.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#84C9E2] text-white text-sm !font-sans font-semibold transition hover:bg-[#6ab5d1] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#84C9E2]">
              Check Back Soon
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default FreeResourcesPage;
