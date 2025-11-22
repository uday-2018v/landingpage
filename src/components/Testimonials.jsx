import React, { useState } from "react";

// Example makeAvatar function
const makeAvatar = (name) =>
  `https://i.pravatar.cc/150?u=${name}`;

// Avatars array
const avatars = [
  { id: 1, img: makeAvatar("U1"), name: "Carol Smith", pos: "left-[6%] top-[30px] md:left-[6%] md:top-[40px]" },
  { id: 2, img: makeAvatar("U2"), name: "John Doe", pos: "left-[20%] top-[50px] md:left-[18%] md:top-[80px]" },
  { id: 3, img: makeAvatar("U3"), name: "Alice Lee", pos: "left-[2%] top-[100px] md:left-[10%] md:top-[200px]" },
  { id: 4, img: makeAvatar("U4"), name: "Bob Martin", pos: "left-[15%] top-[110px] md:left-[35%] md:top-[70px]" },
  { id: 5, img: makeAvatar("U5"), name: "Emma Clark", pos: "left-[65%] top-[40px] md:left-[52%] md:top-[70px]" },
  { id: 6, img: makeAvatar("U6"), name: "David Brown", pos: "left-[40%] top-[30px] md:left-[25%] md:top-[230px]" },
  { id: 7, img: makeAvatar("U7"), name: "Sophia White", pos: "right-[15%] top-[100px] md:right-[20%] md:top-[100px]" },
  { id: 8, img: makeAvatar("U8"), name: "Liam Scott", pos: "right-[3%] top-[90px] md:right-[5%] md:top-[80px]" },
];

export default function Testimonials() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="relative h-[500px] w-full bg-white overflow-hidden">

      {/* --- SVG WAVE BACKGROUND --- */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -60 820 320"
        className="absolute top-0 left-0 w-full h-full"
      >
        <rect width="100%" height="100%" fill="white" />
        <path
          d="M -3 -75 C 150 20 50 460 445 120 C 600 20 700 -30 820 130"
          stroke="#E6FFE6"
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Testimonials Heading */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[150px] md:top-[200px] text-center px-2 z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-600 mt-2 max-w-4xl md:max-w-2xl mx-auto">
          Our customers share amazing experiences with our cleaning services.
        </p>
      </div>

      {/* Avatars */}
      {avatars.map((avatar) => (
        <div key={avatar.id} className={`absolute z-20 ${avatar.pos}`}>
          <img
            src={avatar.img}
            alt={avatar.name}
            className="w-12 h-12 rounded-full cursor-pointer border-2 border-emerald-500 hover:scale-105 transition"
            onClick={() => setActiveId(activeId === avatar.id ? null : avatar.id)}
          />

          {activeId === avatar.id && (
            <div
              className={`absolute top-0 bg-[#0f5b3f] text-white p-5 md:p-6 rounded-2xl shadow-2xl
                w-[180px] md:w-[280px] h-[160px] md:h-[180px] flex flex-col justify-between
                ${avatar.pos.includes("right") ? "right-14" : "left-14"}`}
            >
              {avatar.pos.includes("right") ? (
                <div className="absolute top-4 -right-3 w-0 h-0
                                border-t-[8px] border-t-transparent
                                border-b-[8px] border-b-transparent
                                border-l-[10px] border-l-[#0f5b3f]"></div>
              ) : (
                <div className="absolute top-4 -left-3 w-0 h-0
                                border-t-[8px] border-t-transparent
                                border-b-[8px] border-b-transparent
                                border-r-[10px] border-r-[#0f5b3f]"></div>
              )}

              <p className="text-sm md:text-base leading-snug">
                "The team was professional, thorough and respectful of my home."
              </p>

              <div className="mt-2 flex flex-col gap-1">
                <div className="font-semibold text-base md:text-lg">{avatar.name}</div>
                <div className="text-sm md:text-base text-yellow-300">
                  ⭐⭐⭐⭐⭐ <span className="text-white ml-1">5.0</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
