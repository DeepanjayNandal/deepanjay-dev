import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function ArrowLink({ href, children, external = false }: ArrowLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
      >
        {children}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    );
  }

  return (
    <Link href={href} className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group">
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}
