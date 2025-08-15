import Image from "next/image";
import services from "@/app/images/services.png";
import admin from "@/app/images/admin.png";
import moon from "@/app/images/moon.png";

export default function Projects() {
  const portfolio = "https://regeryl.vercel.app/";

  const projects = [
    {
      title: "ServiceHub",
      desc: "A responsive personal portfolio built with Next.js, Tailwind CSS, and DaisyUI.",
      tech: ["Flutter", "Firebase", "Dart"],
      img: services,
    },
    {
      title: "Admin",
      desc: "Full-stack task manager with Supabase backend and real-time updates.",
      tech: ["React", "Supabase", "MySQL"],
      img: admin,
    
    },
    {
      title: "E-commerce Store",
      desc: "Modern online store with Firebase authentication and Stripe payments.",
      tech: ["Firebase", "Next.js", "Stripe"],
      img: moon,

    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0F111A] via-[#1A1C29] to-[#0F111A] px-6 flex flex-col items-center"
    >
      <h3 className="text-2xl font-bold mb-12 text-center animate-fadeIn">
        Projects
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1A1C29] border border-cyan-500/20 rounded-2xl shadow-lg hover:shadow-pink-500/40 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 animate-slideUp hover:scale-[1.02]"
            >
              {/* Hero Screenshot Section */}
              <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                />
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title and Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {/* {project.link && (
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-pink-400 transition-colors duration-300 group/link"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <svg 
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )} */}
              </div>

              {/* Subtle accent line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        ))}
      </div>
    </section>
  );
}
