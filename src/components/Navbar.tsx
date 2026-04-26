"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "home", key: "h" },
  { href: "/work", label: "work", key: "w" },
  { href: "/projects", label: "projects", key: "p" },
  { href: "/contact", label: "contact", key: "c" },
];

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
      const active = document.activeElement;
      if (
        active?.tagName === "INPUT" ||
        active?.tagName === "TEXTAREA" ||
        active instanceof HTMLInputElement
      )
        return;

      switch (e.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "w":
          router.push("/work");
          break;
        case "p":
          router.push("/projects");
          break;
        case "c":
          router.push("/contact");
          break;
        case "r":
          window.open("/resume.pdf", "_blank");
          break;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [router]);

  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <div className="flex gap-2 sm:gap-4">
        {navLinks.map(({ href, label, key }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-accent transition-colors duration-200"
          >
            <span className="hidden sm:inline text-neutral-500 dark:text-gray-500">
              [{key}]{" "}
            </span>
            {label}
          </Link>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-200"
        >
          <span className="hidden sm:inline text-neutral-500 dark:text-gray-500">
            [r]{" "}
          </span>
          resume
        </a>
      </div>
      <ThemeToggle />
    </nav>
  );
}
