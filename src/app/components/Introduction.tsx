"use client";

import { TypeAnimation } from "react-type-animation";
import photo from "@/app/images/profile.png";

export default function Introduction() {
  const handleDownloadCV = async () => {
    try {
      // Fetch the file as a blob
      const response = await fetch(`/SDResume.pdf?${Date.now()}`);

      if (!response.ok) {
        alert("Resume file not found.");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement("a");
      link.href = url;
      link.download = "SDResume.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    }
  };

  return (
    <section className="min-h-[420px] bg-[#0F111A] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 gap-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-3xl sm:text-4xl md:text-4xl min-h-[96px] md:min-h-[150px] font-bold">
          <span className=" md:text-6xl sm:text-5xl bg-gradient-to-r from-[#00FFF7] via-[#FF00A8] to-[#9D4EDD] bg-clip-text text-transparent">
            Hello,
          </span>
          <span className="flex items-bottom text-cyan-400 font-semibold tracking-wide drop-shadow-lg drop-shadow-cyan-400/30">
            <TypeAnimation
              sequence={[
                "I'm Regeryl",
                1000,
                "I'm a Software Developer",
                1000,
                "I build Web & Mobile apps",
                1000,
              ]}
              speed={70}
              deletionSpeed={60}
              cursor={true}
              repeat={Infinity}
              style={{ whiteSpace: "pre-line", display: "inline-block" }}
            />
          </span>
        </p>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl md:max-w-lg animate-slidUp">
          A passionate software developer who builds modern web apps and
          scalable SaaS platforms.
        </p>

        {/* Download CV Button */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 animate-slidUp cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </button>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative flex flex-col items-center mt-8 md:mt-0">
        <img
          src={photo.src}
          alt="Photo"
          className="w-38 h-38 sm:w-46 sm:h-46 md:w-52 md:h-52 rounded-full border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform relative z-10 object-cover"
        />
        <div className="absolute inset-0 rounded-full border border-cyan-500 z-10 "></div>
      </div>
    </section>
  );
}
