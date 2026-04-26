import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <SectionHeading>education</SectionHeading>
      <div className="space-y-3 text-neutral-600 dark:text-gray-300">
        {education.map((edu) => (
          <div key={edu.school} className="flex items-center gap-2 flex-wrap">
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
            >
              {edu.school}
            </a>
            <span className="text-neutral-400 dark:text-gray-500">•</span>
            <span className="text-neutral-600 dark:text-gray-400">{edu.degree}</span>
            <span className="text-neutral-400 dark:text-gray-500">•</span>
            <span className="text-neutral-600 dark:text-gray-400">{edu.period}</span>
            <span className="text-neutral-400 dark:text-gray-500">•</span>
            <span className="text-neutral-600 dark:text-gray-400">{edu.location}</span>
            {"details" in edu && (
              <>
                <span className="text-neutral-400 dark:text-gray-500">•</span>
                <span className="text-neutral-600 dark:text-gray-400">{(edu as typeof edu & { details: string }).details}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
