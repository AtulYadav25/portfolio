import { SideNav } from "./components/SideNav";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Footer } from "./components/NewFooter";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/NewAboutSection";
import { ExperienceSection } from "./sections/NewExperienceSection";
import { ProjectsSection } from "./sections/NewProjectsSection";
import { BlogSection } from "./sections/NewBlogSection";
import { ContactSection } from "./sections/ContactSection";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <SideNav />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
