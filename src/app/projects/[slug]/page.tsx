import React from "react";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Vijata Properties",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.name} - Premium ${project.type} | Vijata Properties`,
    description: `Explore ${project.name} in ${project.location}. Premium real estate plots and township living starting at ${project.price}. clean titles and gated security.`,
    alternates: {
      canonical: `/projects/${project.slug}`
    }
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}
