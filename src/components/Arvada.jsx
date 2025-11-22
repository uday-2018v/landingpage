import React, { useState } from "react";

export default function Arvada() {
  // All Cities Data
  const locationData = {
    kanpur: {
      city: "Kanpur",
      lat: 26.449923,
      lng: 80.331871
    },
    lucknow: {
      city: "Lucknow",
      lat: 26.846695,
      lng: 80.946167
    },
    gorakhpur: {
      city: "Gorakhpur",
      lat: 26.760555,
      lng: 83.373024
    },
    varanasi: {
      city: "Varanasi",
      lat: 25.317645,
      lng: 82.973915
    }
  };

  // Default: Kanpur
  const [selectedCity, setSelectedCity] = useState("kanpur");

  // Map Component
  const MapFrame = ({ lat, lng }) => {
    const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

    return (
      <iframe
        src={embedUrl}
        className="w-full h-72 sm:h-80 md:h-96 rounded-lg shadow-xl"
        loading="lazy"
        allowFullScreen
      ></iframe>
    );
  };

  const city = locationData[selectedCity];

  return (
    <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Left Text Section */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mb-4 sm:mb-6 leading-tight">
              {city.city} House Cleaning Done Right
            </h2>

            <p className="text-gray-600 mb-4 sm:mb-6 text-base leading-relaxed">
              Our team provides top-quality cleaning services in {city.city}.  
              We make sure every home is cleaned with perfection.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8 text-base leading-relaxed">
              Select a different city to see its location on the map.
            </p>

            {/* City Selector Dropdown */}
            <div className="mb-6">
              <select
                className="border border-gray-400 px-4 py-2 rounded-lg"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="kanpur">Kanpur</option>
                <option value="lucknow">Lucknow</option>
                <option value="gorakhpur">Gorakhpur</option>
                <option value="varanasi">Varanasi</option>
              </select>
            </div>

            <button className="bg-lime-400 text-teal-700 px-6 sm:px-8 py-3 rounded-full font-semibold text-base hover:bg-lime-300">
              Get Quote
            </button>
          </div>

          {/* Map on Right */}
          <div className="order-1 md:order-2">
            <MapFrame lat={city.lat} lng={city.lng} />
          </div>

        </div>
      </div>
    </section>
  );
}
