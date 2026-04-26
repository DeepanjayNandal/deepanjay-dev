interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold mb-6 flex items-center text-neutral-900 dark:text-white">
      <span className="text-accent mr-2">*</span>
      {children}
    </h2>
  );
}
