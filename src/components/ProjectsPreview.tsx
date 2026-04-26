import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="mb-16 animate-fade-in-up">
      <SectionHeading>projects</SectionHeading>
      <div className="space-y-8">
        {featured.map((project) => (
          <div key={project.title}>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block [&:hover_h3]:text-accent"
              >
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                {project.note && (
                  <p className="text-neutral-700 dark:text-gray-200 leading-relaxed mb-1">
                    {project.note}
                  </p>
                )}
                <p className="text-neutral-700 dark:text-gray-200 leading-relaxed">
                  {project.description}
                </p>
              </a>
            ) : (
              <div className="[&:hover_h3]:text-accent">
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                {project.note && (
                  <p className="text-neutral-700 dark:text-gray-200 leading-relaxed mb-1">
                    {project.note}
                  </p>
                )}
                <p className="text-neutral-700 dark:text-gray-200 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <ArrowLink href="/projects">all projects</ArrowLink>
    </section>
  );
}
