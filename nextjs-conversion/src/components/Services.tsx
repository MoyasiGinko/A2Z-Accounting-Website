import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Business Consulting",
      href: "https://execor.vamtam.com/services/business-consulting/",
      image: {
        src: "/wp-content/uploads/2025/03/consulting.svg",
        width: 76,
        height: 76,
        className: "h-19 w-19 mb-4",
      },
      features: [
        "Strategy development & growth",
        "Market research & competitors",
        "Risk management",
      ],
      animationDelay: "0s",
    },
    {
      id: 2,
      title: "Marketing, Sales, & Retention",
      href: "https://execor.vamtam.com/services/marketing-sales-retention/",
      image: {
        src: "/wp-content/uploads/2025/03/marketing.svg",
        width: 68,
        height: 76,
        className: "h-19 w-17 mb-4",
      },
      features: [
        "Brand positioning & messaging",
        "Lead generation & sales",
        "Customer retention & loyalty",
      ],
      animationDelay: "0.05s",
    },
    {
      id: 3,
      title: "Operations Management",
      href: "https://execor.vamtam.com/services/operations-management/",
      image: {
        src: "/wp-content/uploads/2025/03/operations.svg",
        width: 76,
        height: 76,
        className: "h-19 w-19 mb-4",
      },
      features: [
        "Process optimization",
        "Cost reduction & efficiency",
        "KPI tracking & insights ",
      ],
      animationDelay: "0.1s",
    },
    {
      id: 4,
      title: "Talents Acquisitions",
      href: "https://execor.vamtam.com/services/talent-acquisition/",
      image: {
        src: "/wp-content/uploads/2025/03/talent.svg",
        width: 68,
        height: 76,
        className: "h-19 w-17 mb-4",
      },
      features: ["Talent sourcing", "Employer branding", "Workforce planning"],
      animationDelay: "0.15s",
    },
  ];

  return (
    <>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <span className="inline-block bg-[#F2F5F1] px-3 py-1 rounded font-['DM_Sans'] text-[12px] font-medium leading-[1em] text-[#0F3D3A] mb-4">
              Services
            </span>
            <h2 className="font-['Forum'] text-[48px] font-normal leading-[1.2em] text-[#0F3D3A]">
              Our Services
            </h2>
          </div>
          <div className="flex-1 justify-end text-left self-end">
            <p className="font-['DM_Sans'] text-[18px] font-normal leading-[1.5em] text-[#000000] max-w-lg">
              Comprehensive business solutions tailored to drive growth and
              operational excellence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex w-full flex-col justify-between gap-0 overflow-hidden border border-[#0000001A] bg-[#F2F5F1] transition-all duration-300 rounded-lg hover:bg-[#C8F8A9] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] animate-[slideInUp_0.6s_ease-out_both]"
              style={{ animationDelay: service.animationDelay }}
            >
              <div className="flex flex-col items-start text-left pt-10 pb-5 px-6">
                <img
                  width={service.image.width}
                  height={service.image.height}
                  src={service.image.src}
                  alt=""
                  className={service.image.className}
                />
                <h3 className="font-['DM_Sans'] text-[30px] font-normal leading-[1.2em]">
                  <a
                    href={service.href}
                    className="text-[#0F3D3A] hover:text-[#0F3D3A]"
                  >
                    {service.title}
                  </a>
                </h3>
              </div>
              <div className="flex flex-col justify-between pt-5 pb-5 px-6">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center justify-between w-full rounded-lg bg-[#C8F8A9] px-4 py-4 font-['DM_Sans'] text-[14px] font-medium leading-[1em] text-[#0F3D3A] transition-colors hover:bg-[#0F3D3A] hover:text-[#F2F5F1]"
                >
                  <span>Learn More</span>
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
