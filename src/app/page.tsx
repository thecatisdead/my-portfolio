import Image from "next/image";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CircuitBackground from "./components/CircuitBackground";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-[#0F111A] min-h-screen">
      <main className="pt-16 px-4 sm:px-8 md:px-32 flex-1 gap-8 items-center sm:items-center">
        <div className="h-[20px]"></div>

        <Navbar />
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
