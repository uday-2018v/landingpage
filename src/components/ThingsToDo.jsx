export default function ThingsToDo() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-teal-700">
          Things To Do in Aurora, CO
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore the best attractions and activities in Aurora while we handle your house cleaning needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Map Image */}
          <div className="order-2 md:order-1 w-full">
            <img
              src="/images/map.png"
              alt="Aurora Colorado Map"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
            {[
              { num: "1", title: "Aurora Wildlife Refuge", desc: "Explore diverse wildlife and nature trails in this beautiful sanctuary." },
              { num: "2", title: "Cherry Creek Shopping", desc: "Shop, dine, and entertain at the premium shopping destination." },
              { num: "3", title: "Arts & Culture District", desc: "Experience world-class museums and cultural attractions." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-700 font-bold text-sm sm:text-base">{item.num}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-teal-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}