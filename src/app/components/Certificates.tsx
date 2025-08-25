"use client";
import hackathon from "@/app/images/hackathon.jpg";
import startup from "@/app/images/startup.jpg";
import tesda from "@/app/images/tesda.jpg";

export default function Certificates() {
  return (
    <section
      id="certificate"
      className="py-10 px-12 bg-gradient-to-b from-[#0F111A] via-[#1A1C29] to-[#0F111A] text-white px-4 flex flex-col items-center"
    >
      <h3 className="text-2xl font-bold mb-12 text-center animate-fadeIn">
        Certificates
      </h3>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div className="certificate-card border-2 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex flex-row items-center gap-3">
              <img
                src={hackathon.src}
                alt="Photo"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-500"
              />
              24-Hour Hackathon
            </h3>
            <p className="text-sm text-gray-500 pt-4">
              Issued by: Project Moonshot Inc. | 2025
            </p>
            <p className="text-sm text-cyan-400 mt-2">
              Role: Frontend Developer
            </p>
            <p className="text-sm text-gray-400">
              Technologies: Laravel, React, Tailwind CSS
            </p>
          </div>
          <div className="certificate-card border-2 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex flex-row items-center gap-3">
              <img
                src={startup.src}
                alt="Photo"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-500"
              />
              Startup Weekend
            </h3>
            <p className="text-sm text-gray-500 pt-4">
              Issued by: TechStars Startup Weekend Bukidnon 6 | 2025
            </p>
            <p className="text-sm text-cyan-400 mt-2">Role: UI/UX Designer</p>
            <p className="text-sm text-gray-400">Tools: Figma</p>
          </div>
          <div className="certificate-card border-2 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex flex-row items-center gap-3">
              <img
                src={tesda.src}
                alt="Photo"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-500"
              />
              Computer System Servicing NCII
            </h3>
            <p className="text-sm text-gray-500 pt-4">
              Issued by: Tesda | 2020
            </p>
           
            <p className="text-sm text-gray-400">Computer assembly, repair, and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
