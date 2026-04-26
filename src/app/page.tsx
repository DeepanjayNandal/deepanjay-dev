import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <EducationSection />
      <ProjectsPreview />
      <SkillsSection />
      <Footer />
    </main>
  );
}
