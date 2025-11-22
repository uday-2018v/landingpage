export default function Recurring() {
  return (
    <section className=" sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/4239033/pexels-photo-4239033.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Service Area Map"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mb-4 sm:mb-6 leading-tight">
              Recurring Cleaning Services in Arvada
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Why let your home get dirty again? Our recurring cleaning services keep your home consistently clean and fresh.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                { title: "Weekly Cleaning Plans", desc: "Regular maintenance to keep your home pristine" },
                { title: "Bi-Weekly Services", desc: "Perfect balance of cleanliness and cost savings" },
                { title: "Monthly Deep Cleans", desc: "Thorough cleaning to refresh your entire home" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-lime-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-teal-700 mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-lime-400 text-teal-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-lime-300 pyx-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}