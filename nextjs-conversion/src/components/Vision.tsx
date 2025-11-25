import React from "react";

const Vision = () => {
  const visionItems = [
    {
      id: "focus",
      title: "Our Focus",
      description:
        "We prioritize strategic clarity, sustainable growth, and measurable impact, ensuring businesses stay ahead in a dynamic market.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="34"
          viewBox="0 0 37 34"
          className="h-9 w-9"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#F2F5F1" cx="17" cy="17" r="11.33"></circle>
            <g fill="#1F6E69">
              <path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z"></path>
              <path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: "approach",
      title: "Our Approach",
      description:
        "Combining data-driven insights with tailored solutions, we create actionable strategies that drive real business results.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="34"
          viewBox="0 0 37 34"
          className="h-9 w-9"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#F2F5F1" cx="17" cy="17" r="11.33"></circle>
            <g fill="#1F6E69">
              <path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z"></path>
              <path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: "experience",
      title: "Our Experience",
      description:
        "Years of hands-on consulting have helped organizations navigate complexity, unlock growth, and achieve lasting transformation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="34"
          viewBox="0 0 37 34"
          className="h-9 w-9"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#F2F5F1" cx="17" cy="17" r="11.33"></circle>
            <g fill="#1F6E69">
              <path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z"></path>
              <path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z"></path>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Vision Label */}
            <div className="mb-4">
              <span className="text-sm font-medium uppercase tracking-wider text-gray-600 md:text-base">
                Our Vision
              </span>
            </div>

            {/* Divider */}
            <div className="mb-6 flex justify-center">
              <div className="h-px w-16 bg-gray-300"></div>
            </div>

            {/* Main Heading */}
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                We add value by focusing on understanding your business and
                applying our experience and implementation approach.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {visionItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Icon Box */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h5 className="mt-4 text-xl font-bold text-gray-900 md:text-2xl">
                    {item.title}
                  </h5>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
