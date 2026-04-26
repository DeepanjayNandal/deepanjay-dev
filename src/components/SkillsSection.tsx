import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <SectionHeading>skills</SectionHeading>
      <div className="space-y-4 text-neutral-600 dark:text-gray-300">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-neutral-900 dark:text-white font-semibold mb-2">
              {group.category}
            </h3>
            <p className="text-neutral-600 dark:text-gray-400">{group.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
