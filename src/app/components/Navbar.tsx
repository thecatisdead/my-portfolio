'use client';

import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNavVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
    <nav
      ref={navRef}
      className={`hidden lg:flex items-center text-sm justify-center bg-gray-950/30 backdrop-blur-md border border-white/20 shadow-[0_0_16px_2px_rgba(255,255,255,0.10)] shadow-sm fixed top-0 left-1/2 transform -translate-x-1/2 lg:w-[48%] xl:w-[40%] z-50 rounded-[50px] mt-[10px] p-[6px] transition-all duration-700 ease-out
        ${navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      {/* Left side - Logo or Name */}
      <div className="flex items-center justify-between px-4 py-3 w-full">
        <div className="flex items-center">
          {/* You can add a logo or name here */}
        </div>

        {/* Center - Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-gray-600 hover:text-gray-100 font-medium cursor-pointer transition-transform duration-200 transform hover:scale-110 group"
            >
              {item.label}
              <span
  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full nav-underline-glow"
></span>
            </a>
          ))}
        </div>

        {/* Right - Placeholder for potential desktop actions */}
        <div className="flex items-center space-x-4" />
      </div>

    </nav>

    {/* Mobile: Hamburger button */}
    <button
      className="lg:hidden fixed top-3 right-4 z-50 p-2 rounded-full bg-gray-950/70 border border-white/20 text-gray-200 shadow-sm backdrop-blur-md"
      onClick={() => setMobileMenuOpen((open) => !open)}
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* Mobile: Dropdown menu */}
    <div
      id="mobile-menu"
      className={`lg:hidden fixed left-1/2 transform -translate-x-1/2 mt-2 w-[86vw] max-w-xs bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-500 z-40
        ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      style={{ top: '64px' }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'experience', label: 'Experience' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <a
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="block px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
    </>
  );
}
