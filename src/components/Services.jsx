import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "House Cleaning",
    desc:
      "Full home cleaning: kitchens, bathrooms, living areas. Trained staff, eco-friendly supplies and satisfaction guarantee.",
    bullets: [
      "Routine & deep cleans",
      "Trained professionals",
      "Eco-friendly products",
    ],
    img: "./images/housecleaning.png",
    avatar: "./images/housecleaning.png",
  },
  {
    title: "Carpet Cleaning",
    desc:
      "Hot-water extraction and stain treatment for carpets and rugs to restore freshness and hygienic fibers.",
    bullets: ["Stain removal", "Fast dry times", "Pet-safe solutions"],
    img: "./images/hero.jpg",
    avatar:"./images/hero.jpg",
  },
  {
    title: "Window & Glass",
    desc:
      "Interior and exterior window cleaning with streak-free finish and careful frame/tile protection.",
    bullets: ["High-rise safe options", "Spotless finish", "Quick scheduling"],
    img: "./images/windowglass.png",
    avatar: "./images/windowglass.png",
  },
];

function IconChevronLeft(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function Services() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false); // dropdown state for small screens

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="services" className="mt-10 bg-white">
      {/* Header + Buttons */}
      <div className="flex items-start justify-between max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Our Cleaning Services</h2>

        {/* Buttons container */}
        <div className="flex items-center gap-3">
          {/* Large screens */}
          <div className="hidden sm:flex gap-3">
            <button className="bg-white text-brand-600 px-4 py-2 rounded-full font-medium shadow-sm">
              Book a Cleaning
            </button>
            <button className="border border-gray-200 px-4 py-2 rounded-full text-sm">
              See all services
            </button>
          </div>

          {/* Small screens icon */}
          <div className="sm:hidden relative">
            <button
              className="p-2 bg-white rounded-full shadow-md"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v.01M12 12v.01M12 18v.01"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col gap-2 p-2 z-50">
                <button className="bg-white text-brand-600 px-4 py-2 rounded-full font-medium shadow-sm w-full text-left">
                  Book a Cleaning
                </button>
                <button className="border border-gray-200 px-4 py-2 rounded-full text-sm w-full text-left">
                  See all services
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-6 relative py-8">
        <div className="relative overflow-hidden">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md -ml-2 hidden md:flex items-center justify-center"
          >
            <IconChevronLeft className="w-5 h-5 text-brand-600" />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md -mr-2 hidden md:flex items-center justify-center"
          >
            <IconChevronRight className="w-5 h-5 text-brand-600" />
          </button>

          {/* Slide */}
          <div className="overflow-hidden">
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-card p-4 md:p-8 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-lg bg-gray-100 mx-auto">
                  <img
                    src={slides[index].avatar}
                    alt={slides[index].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {slides[index].title}
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 max-w-xl">{slides[index].desc}</p>

                <ul className="mt-4 space-y-2 text-gray-600">
                  {slides[index].bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex items-center justify-center w-3 h-3 bg-brand-100 text-brand-600 rounded-full text-xs">
                        ✓
                      </span>
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-3 flex-wrap sm:flex-nowrap">
                  <button className="bg-brand-600 text-white px-4 py-2 rounded-full shadow-sm">
                    Get a Quote
                  </button>
                  <a className="px-4 py-2 rounded-full border border-gray-200 text-sm" href="#contact">
                    Learn more
                  </a>
                </div>
              </div>

              {/* Decorative image on right */}
              <div className="hidden md:block md:relative">
                <img
                  src="https://via.placeholder.com/420x320/9ee7a6/0f5b3f?text=Cleaner+Image"
                  alt="Cleaner"
                  className="w-[280px] md:w-[420px] h-[220px] md:h-[320px] object-cover rounded-lg shadow-lg absolute md:top-1/2 md:-right-20 md:-translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-brand-600" : "bg-gray-300"} transition`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
