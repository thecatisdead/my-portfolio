"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hackathon from "@/app/images/hackathon.jpg";
import startup from "@/app/images/startup.jpg";


export default function Certificates() {
  const certificates = [
    {
      title: "24-Hour Hackathon",
      org: "Tech Solutions Inc.",
      date: "Aug 2024",
    },
    {
      title: "Startup Weekend",
      org: "Google for Startups",
      logo: "/images/startup-logo.png",
      date: "Jun 2024",
    },

  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-[#0F111A] via-[#1A1C29] to-[#0F111A] text-white px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center neon-text">
        Certificates
      </h2>
      <div className="relative w-full max-w-xl overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-cyan-500 text-black rounded-full p-2 hover:bg-cyan-400 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-cyan-500 text-black rounded-full p-2 hover:bg-cyan-400 transition"
        >
          <ChevronRight />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="certificate-card border p-4 rounded-lg shadow-md">
             <h3 className="text-lg font-semibold flex flex-row items-center gap-3">
               <img
                 src={hackathon.src}
                 alt="Photo"
                 className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-500"
               />
               24-Hour Hackathon
             </h3>
             <p className="text-sm text-gray-500">
               Issued by: FreeCodeCamp | 2025
             </p>
             <p className="text-sm text-cyan-400 mt-2">
               Role: Frontend Developer
             </p>
             <p className="text-sm text-gray-400">
               Technologies: Laravel, React, Tailwind CSS
             </p>
           </div>
                     <div className="certificate-card border p-4 rounded-lg shadow-md">
             <h3 className="text-lg font-semibold flex flex-row items-center gap-3">
               <img
                 src={startup.src}
                 alt="Photo"
                 className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-500"
               />
               Startup Weekend
             </h3>
             <p className="text-sm text-gray-500">
               Issued by: TechStars | 2025
             </p>
             <p className="text-sm text-cyan-400 mt-2">
               Role: UI/UX Designer
             </p>
             <p className="text-sm text-gray-400">
               Tools: Figma
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}
