export default function WhyChooseUs() {
  const reasons = [
  { icon: "✓", title: "Trusted & Reliable", desc: "10+ years", color: "bg-white" },
  { icon: "✓", title: "Professional Team", desc: "Thoroughly trained", color: "bg-white" },
  { icon: "✓", title: "Eco-Friendly", desc: "Safe products", color: "bg-white" },
  { icon: "✓", title: "Affordable Pricing", desc: "Competitive rates", color: "bg-white" },
  { icon: "✓", title: "Flexible Scheduling", desc: "Tailored to schedule", color: "bg-white" },
  { icon: "✓", title: "100% Satisfaction", desc: "Money-back guarantee", color: "bg-green-400" },
];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-teal-700 mb-8 sm:mb-12 leading-tight">
          Why Choose Our House Cleaning Services?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-6 mb-8 sm:mb-12">
          {reasons.map((reason, idx) => (
           <div key={idx} className={`p-6 sm:p-8 rounded-lg shadow hover:shadow-lg transition ${reason.color}`}>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-400 text-teal-700 rounded-full flex items-center justify-center mb-4 text-lg sm:text-xl font-bold">
                {reason.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-teal-700 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{reason.desc}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
