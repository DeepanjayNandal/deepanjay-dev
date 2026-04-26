import { MapPin, Building2 } from "lucide-react";
import { personal } from "@/lib/data";
import OpenToWork from "./OpenToWork";
import SocialLinks from "./SocialLinks";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  return (
    <header className="mb-16 space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold animate-fade-in text-neutral-900 dark:text-white flex items-center gap-3">
          {personal.openToWork && <OpenToWork />}
          <span className="inline-block hover:text-accent transition-colors cursor-default">
            <ScrambleText text={personal.name} />
          </span>
        </h1>
        <SocialLinks />
      </div>

      <div className="flex flex-col gap-2 text-neutral-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {personal.location}
          {personal.openToRelocate && (
            <span className="text-neutral-400 dark:text-gray-400 text-sm">· open to relocate</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          {personal.role}
        </div>
      </div>

      <div className="space-y-4 animate-fade-in-up text-neutral-700 dark:text-gray-300 leading-relaxed">
        {personal.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </header>
  );
}
