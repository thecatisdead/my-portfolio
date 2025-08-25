import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/app/data/projects";

export default function Projects() {


  return (
    <section
      id="projects"
      className="py-10 px-8 bg-gradient-to-b from-[#0F111A] via-[#1A1C29] to-[#0F111A] px-6 flex flex-col items-center scroll-mt-16"
    >
      <h3 className="text-2xl font-bold mb-12 text-center animate-fadeIn">
        Projects
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="group bg-[#1A1C29] border border-cyan-500/20 rounded-2xl shadow-md hover:shadow-black overflow-hidden transform hover:-translate-y-2 transition-all duration-500 animate-slideUp hover:scale-[1.02]"
          >
            {/* Hero Screenshot Section */}
            <div className="relative w-full h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image src={project.img} alt={project.title} fill />
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
                    className="px-3 py-1.5 border border-white rounded-full text-xs font-medium text-gray-700 bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* External link omitted to avoid nested anchors inside Link wrapper */}
            </div>

            {/* Subtle accent line */}
            <div className="bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}
