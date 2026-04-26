import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between text-sm text-neutral-500 dark:text-gray-500 animate-fade-in-up">
      <p>
        © {year} {personal.name}
      </p>
    </footer>
  );
}
