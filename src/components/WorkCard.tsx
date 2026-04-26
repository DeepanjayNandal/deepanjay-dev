"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WorkEntry {
  company: string;
  url: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  bullets: string[];
}

export default function WorkCard({ job }: { job: WorkEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative border border-slate-200 dark:border-slate-800 p-6 [&:hover_h3]:text-accent ${
        job.url ? "cursor-pointer" : ""
      }`}
    >
      {job.url && (
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      <h3 className="text-xl font-semibold mb-1 text-neutral-900 dark:text-white transition-colors duration-200">
        {job.company}
      </h3>

      <p className="text-sm text-neutral-600 dark:text-gray-300 mb-1">
        {job.role} · {job.period}
      </p>
      <p className="text-sm text-neutral-500 dark:text-gray-400 mb-4">
        {job.location}
      </p>

      <p className="text-neutral-700 dark:text-gray-200 leading-relaxed mb-4">
        {job.summary}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="relative z-10 inline-flex items-center gap-1 text-neutral-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200"
      >
        {expanded ? (
          <>Show Less <ChevronUp className="w-4 h-4" /></>
        ) : (
          <>View Details <ChevronDown className="w-4 h-4" /></>
        )}
      </button>

      {expanded && (
        <div className="relative z-10 mt-6 space-y-6">
          <div>
            <p className="text-xs text-neutral-900 dark:text-white uppercase tracking-widest mb-3">
              achievements
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-gray-200">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-neutral-900 dark:text-white uppercase tracking-widest mb-3">
              technologies
            </p>
            <div className="flex gap-2 flex-wrap">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
