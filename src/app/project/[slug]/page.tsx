import { notFound } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import ProjectDetails from "@/app/components/ProjectDetails";

type Params = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#0F111A] px-6 py-24">
      <ProjectDetails project={project} />
    </div>
  );
}
