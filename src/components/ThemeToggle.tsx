"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render placeholder while mounting to avoid hydration mismatch
  if (!mounted) return <div className="w-14 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
        isDark ? "bg-accent" : "bg-neutral-300"
      }`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out ${
          isDark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-accent" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-neutral-500" />
        )}
      </span>
    </button>
  );
}
