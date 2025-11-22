
import React from "react";

const Post = ({ title, img }) => (
  <article className="bg-white rounded-lg shadow p-4">
    <img src={img} alt={title} className="w-full h-36 object-cover rounded" />
    <h4 className="mt-3 font-semibold">{title}</h4>
    <p className="text-sm text-gray-600 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rerum.
    </p>
    <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
      <span>Jan 1, 2025</span>
      <a href="#" className="text-brand-500 hover:underline">Read more</a>
    </div>
  </article>
);

export default function Blog() {
  const posts = [
    {
      title: "Cleaning Tips",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "How to Maintain Your Home",
      img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Deep Cleaning Checklist",
      img: "https://images.pexels.com/photos/4107280/pexels-photo-4107280.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="blog" className="py-1 w-70 mb-48" >
      <h2 className="text-1xl sm:text-2xl font-semibold text-gray-800 mb-3" >Recent Blog Posts</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <Post key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
