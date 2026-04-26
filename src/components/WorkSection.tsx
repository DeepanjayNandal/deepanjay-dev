import { work } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";

export default function WorkSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <SectionHeading>work</SectionHeading>
      <div className="space-y-8">
        {work.map((job) => (
          <div key={job.company}>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block [&:hover_h3]:text-accent"
            >
              <h3 className="text-xl font-semibold mb-1 text-neutral-900 dark:text-white transition-colors duration-200">
                {job.company}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-300 mb-3">
                {job.role} · {job.period}
              </p>
              <p className="text-neutral-700 dark:text-gray-200 leading-relaxed">
                {job.summary}
              </p>
            </a>
          </div>
        ))}
      </div>
      <ArrowLink href="/work">all work</ArrowLink>
    </section>
  );
}
