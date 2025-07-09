import { notFound } from "next/navigation";
import ProjectShowcase from "../../_components/portfolio/ProjectShowcase";
import { projects } from "../../_data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return <ProjectShowcase projectData={project} />;
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects[params.slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Project Showcase`,
    description: project.tagline,
  };
}