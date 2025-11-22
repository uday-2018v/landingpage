'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f5b3f] text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo (goes to top/home) */}
        <a href="#home" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-lime-400 rounded-full" />
          <span className="font-bold text-lg text-white">BrightCo</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-white/90 hover:text-lime-200 font-medium">Home</a>
          <a href="#services" className="text-white/90 hover:text-lime-200 font-medium">Services</a>
          <a href="#projects" className="text-white/90 hover:text-lime-200 font-medium">Projects</a>
          <a href="#blog" className="text-white/90 hover:text-lime-200 font-medium">Blog</a>
        </div>

        {/* Mobile Menu Button + CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-5 h-0.5 bg-white block" />
            <span className="w-5 h-0.5 bg-white block" />
            <span className="w-5 h-0.5 bg-white block" />
          </button>

          {/* CTA - phone link (click opens dialer) */}
          <a
            href="tel:+15550001234"
            className="hidden sm:inline-block bg-lime-400 text-[#0f5b3f] px-6 py-2 rounded-full font-bold hover:bg-lime-300"
          >
            Call Us
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f5b3f] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-white py-2 font-medium">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-white py-2 font-medium">Services</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block text-white py-2 font-medium">Projects</a>
            <a href="#blog" onClick={() => setIsOpen(false)} className="block text-white py-2 font-medium">Blog</a>

            {/* Mobile CTA (dialer) */}
            <a
              href="tel:+15550001234"
              className="w-full inline-block text-center bg-lime-400 text-[#0f5b3f] px-4 py-2 rounded-full font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}