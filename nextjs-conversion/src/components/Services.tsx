import React from "react";

const Services: React.FC = () => {
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
          {/* Business Consulting Card */}
          <div className="flex w-full flex-col justify-between gap-0 overflow-hidden border border-[#0000001A] bg-[#F2F5F1] transition-all duration-300 rounded-lg hover:bg-[#C8F8A9] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] animate-[slideInUp_0.6s_ease-out_0s_both]">
            <div className="flex flex-col items-start text-left pt-10 pb-5 px-6">
              <img
                width="76"
                height="76"
                src="/wp-content/uploads/2025/03/consulting.svg"
                alt=""
                className="h-19 w-19 mb-4"
              />
              <h3 className="font-['DM_Sans'] text-[30px] font-normal leading-[1.2em]">
                <a
                  href="https://execor.vamtam.com/services/business-consulting/"
                  className="text-[#0F3D3A] hover:text-[#0F3D3A]"
                >
                  Business Consulting
                </a>
              </h3>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-5 px-6">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Strategy development & growth
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Market research & competitors
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Risk management
                  </span>
                </li>
              </ul>
              <a
                href="https://execor.vamtam.com/services/business-consulting/"
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

          {/* Marketing, Sales, & Retention Card */}
          <div className="flex w-full flex-col justify-between gap-0 overflow-hidden border border-[#0000001A] bg-[#F2F5F1] transition-all duration-300 rounded-lg hover:bg-[#C8F8A9] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] animate-[slideInUp_0.6s_ease-out_0.05s_both]">
            <div className="flex flex-col items-start text-left pt-10 pb-5 px-6">
              <img
                width="68"
                height="76"
                src="/wp-content/uploads/2025/03/marketing.svg"
                alt=""
                className="h-19 w-17 mb-4"
              />
              <h3 className="font-['DM_Sans'] text-[30px] font-normal leading-[1.2em]">
                <a
                  href="https://execor.vamtam.com/services/marketing-sales-retention/"
                  className="text-[#0F3D3A] hover:text-[#0F3D3A]"
                >
                  Marketing, Sales, & Retention
                </a>
              </h3>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-5 px-6">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Brand positioning & messaging
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Lead generation & sales
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Customer retention & loyalty
                  </span>
                </li>
              </ul>
              <a
                href="https://execor.vamtam.com/services/marketing-sales-retention/"
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

          {/* Operations Management Card */}
          <div className="flex w-full flex-col justify-between gap-0 overflow-hidden border border-[#0000001A] bg-[#F2F5F1] transition-all duration-300 rounded-lg hover:bg-[#C8F8A9] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] animate-[slideInUp_0.6s_ease-out_0.1s_both]">
            <div className="flex flex-col items-start text-left pt-10 pb-5 px-6">
              <img
                width="76"
                height="76"
                src="/wp-content/uploads/2025/03/operations.svg"
                alt=""
                className="h-19 w-19 mb-4"
              />
              <h3 className="font-['DM_Sans'] text-[30px] font-normal leading-[1.2em]">
                <a
                  href="https://execor.vamtam.com/services/operations-management/"
                  className="text-[#0F3D3A] hover:text-[#0F3D3A]"
                >
                  Operations Management
                </a>
              </h3>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-5 px-6">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Process optimization & automation
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Resource allocation & management
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Performance monitoring & reporting
                  </span>
                </li>
              </ul>
              <a
                href="https://execor.vamtam.com/services/operations-management/"
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

          {/* Talent Acquisition Card */}
          <div className="flex w-full flex-col justify-between gap-0 overflow-hidden border border-[#0000001A] bg-[#F2F5F1] transition-all duration-300 rounded-lg hover:bg-[#C8F8A9] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] animate-[slideInUp_0.6s_ease-out_0.15s_both]">
            <div className="flex flex-col items-start text-left pt-10 pb-5 px-6">
              <img
                width="68"
                height="76"
                src="/wp-content/uploads/2025/03/talent.svg"
                alt=""
                className="h-19 w-17 mb-4"
              />
              <h3 className="font-['DM_Sans'] text-[30px] font-normal leading-[1.2em]">
                <a
                  href="https://execor.vamtam.com/services/talent-acquisition/"
                  className="text-[#0F3D3A] hover:text-[#0F3D3A]"
                >
                  Talent Acquisition
                </a>
              </h3>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-5 px-6">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Talent sourcing
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Employer branding
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0F3D3A] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="font-['DM_Sans'] text-[16px] font-normal leading-[1.5em] text-[#000000]">
                    Workforce planning
                  </span>
                </li>
              </ul>
              <a
                href="https://execor.vamtam.com/services/talent-acquisition/"
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
        </div>
      </section>
    </>
  );
};

export default Services;
