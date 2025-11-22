import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#004C3F] font-sans relative pt-56 md:pt-40 pb-20">

      {/* CTA FLOATING BOX */}
      <section
        className="
        absolute left-1/2 -translate-x-1/2
        -top-40 md:-top-24
        bg-[#C7F59E]
        w-[70%] sm:w-[85%] md:w-[70%] 
        mx-auto  px-6 pt-2 md:py-6
        rounded-[30px] shadow-xl
        flex flex-col md:flex-row items-center justify-between
      "
      >
        {/* LEFT TEXT */}
        <div className="z-20 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f1f17] leading-tight">
            Experience Your <br className="hidden md:block" /> Cleanest Home Yet
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-1">
            <button className="bg-white text-green-700 font-semibold px-3 py-2.5 rounded-full shadow hover:bg-gray-100 transition">
              Get Started
            </button>

            <button className="bg-[#1D8148] text-white font-semibold px-6 py-2.5 rounded-full shadow hover:bg-[#166638] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-2 md:mt-0">
          <div className="
            w-[150px] sm:w-[260px] md:w-[360px]
            h-[150px] sm:h-[260px] md:h-[260px]
            rounded-xl overflow-hidden bg-white/10 border border-white/20 shadow-lg
            flex items-center justify-center
          ">
            <img
              src="https://media.istockphoto.com/id/1286407666/photo/young-woman-facial-expression-stock-photo.jpg?s=1024x1024&w=is&k=20&c=_c8tOHmSDQenaYFlcSclisHE-xInOeeghP27EV9AtNE="
              alt="Cleaner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOOTER MAIN */}
      <footer className="text-white px-6 md:px-10 pt-40 md:pt-32 pb-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold flex justify-center md:justify-start items-center gap-2">
              <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
              BlueSpring
            </h2>

            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              A leading provider of professional cleaning and home management solutions.
            </p>

            <p className="text-gray-300 mt-4 font-semibold text-sm">Follow us:</p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start text-sm">
              <span className="hover:text-white cursor-pointer">FB</span>
              <span className="hover:text-white cursor-pointer">IG</span>
              <span className="hover:text-white cursor-pointer">TW</span>
            </div>
          </div>

          {/* Areas */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Service Areas</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>New York</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>Chicago</li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>House Cleaning</li>
              <li>Window Cleaning</li>
              <li>Office Cleaning</li>
              <li>Move-In / Move-Out</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📞 +1 555 000 1234</li>
              <li>✉ support@bluespring.com</li>
              <li>📍 123 Main Street, NY</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-12 text-sm">
          © {new Date().getFullYear()} BlueSpring Cleaning. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
