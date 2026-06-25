import type { Metadata } from "next";
import { work } from "@/lib/data";
import Footer from "@/components/Footer";
import ScrambleText from "@/components/ScrambleText";
import WorkCard from "@/components/WorkCard";

export const metadata: Metadata = {
  title: "Work | Deepanjay Nandal",
  description: "My professional experience.",
};

export default function WorkPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white flex items-center gap-2">
        <span className="text-accent">*</span>
        <ScrambleText text="work" />
      </h1>
      <p className="text-neutral-600 dark:text-gray-400 mb-12 leading-relaxed">
        here are some of the engineering roles i&apos;ve worked in.
      </p>
      <div className="space-y-6 mb-16">
        {work.map((job) => (
          <WorkCard key={job.company} job={job} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
