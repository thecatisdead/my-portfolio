"use client";

import Image from "next/image";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CircuitBackground from "./components/CircuitBackground";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const scrollToProjects = () => {
      const element = document.getElementById("projects");
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (typeof window !== "undefined") {
      // Case 1: Explicit hash link
      if (window.location.hash === "#projects") {
        requestAnimationFrame(scrollToProjects);
        return;
      }

      // Case 2: Came via Back link from a project detail
      try {
        const shouldScroll = sessionStorage.getItem("scrollToProjects");
        if (shouldScroll === "1") {
          sessionStorage.removeItem("scrollToProjects");
          setTimeout(scrollToProjects, 100);
          return;
        }
      } catch {}

      const referrer = document.referrer || "";
      try {
        const prevPath = referrer ? new URL(referrer).pathname : "";
        if (prevPath.startsWith("/project/")) {
          // Came from a project details page → scroll to projects
          setTimeout(scrollToProjects, 100);
        }
      } catch {
        // Ignore URL parse errors and do nothing
      }
    }
  }, []);
  return (
    <div className="bg-[#0F111A] min-h-screen">
      <main className="pt-16 px-4 sm:px-8 md:px-32 flex-1 gap-8 items-center sm:items-center">
        <div className="h-[20px]"></div>

        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <Introduction />
          <About />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </motion.div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
