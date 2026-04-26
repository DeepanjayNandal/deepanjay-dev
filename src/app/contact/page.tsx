import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { personal } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import ScrambleText from "@/components/ScrambleText";

export const metadata: Metadata = {
  title: "Contact | Deepanjay Nandal",
  description: "Get in touch with Deepanjay Nandal.",
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  {
    label: "email",
    handle: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "github",
    handle: "github.com/DeepanjayNandal",
    href: personal.github,
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "linkedin",
    handle: "linkedin.com/in/deepanjay-nandal",
    href: personal.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white flex items-center gap-2">
        <span className="text-accent">*</span>
        <ScrambleText text="contact" />
      </h1>
      <p className="text-neutral-600 dark:text-gray-400 mb-12 leading-relaxed">
        feel free to reach out. i&apos;m always open to conversations about technology,
        opportunities, or just a good chat.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <SectionHeading>send a message</SectionHeading>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <SectionHeading>find me on</SectionHeading>
          <div className="space-y-4">
            {socials.map(({ label, handle, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded [&:hover_svg]:text-accent"
              >
                <div className="p-2 bg-neutral-100 dark:bg-slate-800 rounded">
                  <Icon className="w-5 h-5 text-neutral-600 dark:text-gray-400 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-neutral-900 dark:text-white font-medium">{label}</p>
                  <p className="text-sm text-neutral-600 dark:text-gray-400">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
