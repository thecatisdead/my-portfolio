import { notFound } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import ProjectDetails from "@/app/components/ProjectDetails";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#0F111A] px-6 py-24">
      <ProjectDetails project={project} />
    </div>
  );
}
