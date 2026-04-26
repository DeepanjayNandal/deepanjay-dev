"use client";

import { useScramble } from "use-scramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 3,
    overdrive: true,
  });

  return <span ref={ref} className={className} onMouseEnter={replay} />;
}
