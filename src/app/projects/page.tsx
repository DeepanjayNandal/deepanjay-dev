import type { Metadata } from "next";
import { projects } from "@/lib/data";
import Footer from "@/components/Footer";
import ScrambleText from "@/components/ScrambleText";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Deepanjay Nandal",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white flex items-center gap-2">
        <span className="text-accent">*</span>
        <ScrambleText text="projects" />
      </h1>
      <p className="text-neutral-600 dark:text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on.
      </p>
      <div className="space-y-6 mb-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
