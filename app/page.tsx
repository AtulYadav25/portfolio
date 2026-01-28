import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { IntroSection } from "./sections/IntroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AboutSection } from "./sections/AboutSection";
import { GitHubActivitySection } from "./sections/GitHubActivitySection";
import { BlogSection } from "./sections/BlogSection";
import { CTASection } from "./sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <IntroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AboutSection />
          <GitHubActivitySection />
          <BlogSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
