// HeroCleaning.jsx
import React from "react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-950 text-white">
  {/* Your content here */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-28">

        <div className="flex flex-col items-center gap-12 -mt-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              House Cleaning
              <span className="block">Services In Aurora, CO</span>
            </h1>

            <p className="mt-4 text-emerald-100/90">
              Recurring | Deep | Move-out — trusted, top-rated house cleaning
              services offering punctual teams that clean and restore perfection.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
              <a className="px-2 py-3 rounded-full bg-lime-300 text-emerald-900  hover:scale-105 transition">
                Book a Cleaning Now
              </a>

              <a className="px-2 py-3 rounded-full border border-lime-200/40 text-lime-200 hover:bg-emerald-800/30 transition">
                (555) 555-1234
              </a>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full px-4 max-w-4xl mx-auto mt-14 sm:mt-20 md:mt-24">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
          <img
            src="/images/hero.jpg"
            alt="Cleaning"
            className="w-full h-72 sm:h-80 object-cover"
          />

          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            w-16 h-16 bg-red/95 rounded-full shadow-lg ring-2 ring-emerald-900/20 hover:scale-105 transition">
            ▶
          </button>

          <div className="absolute left-4 bottom-4 bg-emerald-900/85 text-lime-100 px-1 py-1.5 rounded-full text-sm shadow-md">
            Call us: (555) 555-1234
          </div>
        </div>
      </div>
    </div>
  );
}
