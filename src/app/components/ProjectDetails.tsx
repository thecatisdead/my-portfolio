"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/app/data/projects";

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-5xl mx-auto"
    >
      <Link
        href="/"
        className="text-cyan-300 hover:text-pink-300 transition-colors"
      >
        ← Back to projects
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="relative w-full h-72 md:h-[320px] rounded-xl overflow-hidden border border-cyan-500/20 bg-white flex items-center justify-center">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            priority
            className="object-contain p-2"
          />
          <div className="absolute inset-0 pointer-events-none" />
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-white">{project.title}</h1>
          <p className="text-gray-300 leading-relaxed">{project.desc}</p>
          {project.longDesc && (
            <p className="text-gray-400 leading-relaxed">{project.longDesc}</p>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <div className="pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-pink-300 transition-colors"
              >
                Visit site
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
