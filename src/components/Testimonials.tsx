"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Behrouz Abolghassem",
    role: "Owner, Little Italy – St Andrews",
    quote: "My business grew stress-free—want a good life? Move to A2Z",
    loomId: "157bd97bdd42416497aab3ccf8de5843",
    thumb:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1766958667/testimonial-1_wpwjrn.png",
  },
  {
    id: 2,
    name: "Mr. Mohamed Ali",
    role: "Property Tycoon & Owner, MacAli Hotel Group – Elgin",
    quote:
      "A trusted partner for expanding our property portfolio across the UK.",
    loomId: "9caff76064d2408c8193cb5406ef69ea",
    thumb:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1766958665/testimonial-2_uisw4j.png",
  },
  {
    id: 3,
    name: "Khuram Qadir CEng",
    role: "Founder and Oil & Gas Engineer, Cygnas Solutions – Aberdeen",
    quote:
      "You really get to know your accountant when you're in the deep end.",
    loomId: "0f25c7b69a2e4af4bac8d720949df52b",
    thumb:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1766958671/testimonial-3_biprco.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const totalSlides = testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const currentSlide = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 overflow-hidden bg-white w-full">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 text-center lg:text-left">
          <span className="bg-primary text-white text-[14px] font-bold font-serif tracking-widest px-3 py-1.5 inline-block mb-4 rounded-md">
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="order-1 lg:order-1">
            <div
              className="relative w-full aspect-video bg-gray-50 rounded-lg shadow-2xl overflow-hidden border border-gray-100 group z-10 cursor-pointer"
              onClick={!isPlaying ? handlePlayVideo : undefined}
            >
              {!isPlaying ? (
                <>
                  <img
                    src={currentSlide.thumb}
                    alt="Client Testimonial"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 lg:w-10 lg:h-10 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 z-20 bg-black">
                  <iframe
                    src={`https://www.loom.com/embed/${currentSlide.loomId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          <div className="relative order-2 lg:order-2">
            <div className="absolute -top-6 -left-2 lg:-top-10 lg:-left-4 text-gray-100 pointer-events-none z-0">
              <svg className="w-20 h-20 lg:w-32 lg:h-32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.096 14.092 14.742 14.242 13.938C14.392 13.134 14.654 12.382 15.028 11.682C15.402 10.982 15.908 10.23 16.546 9.426C17.184 8.622 18.009 7.742 19.021 6.786L21.365 7.938C20.69 8.658 20.128 9.378 19.68 10.098C19.23 10.818 18.892 11.538 18.667 12.258C18.442 12.978 18.33 13.842 18.33 14.85V21H14.017ZM2.001 21L2.001 18C2.001 16.096 2.076 14.742 2.226 13.938C2.376 13.134 2.638 12.382 3.012 11.682C3.386 10.982 3.892 10.23 4.53 9.426C5.168 8.622 5.993 7.742 7.005 6.786L9.349 7.938C8.674 8.658 8.112 9.378 7.664 10.098C7.214 10.818 6.876 11.538 6.651 12.258C6.426 12.978 6.314 13.842 6.314 14.85V21H2.001Z"></path>
              </svg>
            </div>

            <div className="overflow-hidden py-4 relative z-10 w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <blockquote className="mb-4 lg:mb-10 pr-4">
                      <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight">
                        "{item.quote}"
                      </p>
                    </blockquote>
                    <div>
                      <h4 className="text-secondary font-bold text-lg">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 border-t border-gray-100 relative z-20 -translate-y-2 lg:-translate-y-3 lg:pt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-primary bg-primary text-white flex items-center justify-center cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-primary bg-primary text-white flex items-center justify-center cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
