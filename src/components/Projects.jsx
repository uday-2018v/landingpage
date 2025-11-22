
import React from "react";

const Project = ({ title, img }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow">
    <img src={img} alt="" className="w-full h-44 object-cover" />
    <div className="p-4">
      <h4 className="font-semibold">{title}</h4>
    </div>
  </div>
);

export default function Projects() {
  const items = [
    { title: "Carpet Cleaning", img: "./images/carpet.jpg" },
    { title: "Mattress Cleaning", img: "./images/metters.png" },
    { title: "Oven Cleaning", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" },
    { title: "Window Cleaning", img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800&auto=format&fit=crop" },
    { title: "End of Tenancy", img: "./images/tenancy.png" },
    { title: "Upholstery", img: "./images/image.png" },
  ];

  return (
    <section id="projects">
      <div class="flex flex-col items-center"><h2 className="section-title mb-0">Our Projects</h2>
      <p class="text-xs flex-wrap px-4 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-3 lg:gap-10 ">
        {items.map((it, idx) => <Project key={idx} {...it} />)}
      </div>
    </section>
  );
}
