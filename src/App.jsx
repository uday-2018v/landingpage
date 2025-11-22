import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import ThingsToDo from "./components/ThingsToDo";
import Arvada from "./components/Arvada";
import Recurring from "./components/Recurring";
export default function App() {
  return (

    <div
     className="min-h-screen flex flex-col">
  
      <Navbar />
      <Hero />
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ThingsToDo />
        </div>
      </section>
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <Services />
        </section>
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Arvada />
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <WhyChooseUs />
          </div>
        </section>  
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <Recurring />
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Projects />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <Testimonials />
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <BlogSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
