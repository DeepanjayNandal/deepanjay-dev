import { awards } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function AwardsSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <SectionHeading>awards</SectionHeading>
      <div className="space-y-3 text-neutral-600 dark:text-gray-300">
        {awards.map((award, i) => (
          <div key={i} className="flex items-center gap-2 flex-wrap">
            <span className="text-neutral-900 dark:text-white">{award.title}</span>
            <span className="text-neutral-400 dark:text-gray-500">•</span>
            <span className="text-neutral-600 dark:text-gray-400">{award.company}</span>
            <span className="text-neutral-400 dark:text-gray-500">•</span>
            <span className="text-neutral-600 dark:text-gray-400">{award.period}</span>
            <span className="text-neutral-400 dark:text-gray-500">•</span>
            <span className="text-neutral-600 dark:text-gray-400">{award.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
