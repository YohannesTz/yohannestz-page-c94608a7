
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { data: portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error || !portfolioData) {
    console.error('Error loading portfolio data:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-xl text-red-500">
          Failed to load portfolio data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection topText={portfolioData.topText} />
        <ExperienceSection experience={portfolioData.experience} />
        <EducationSection educations={portfolioData.educations} />
        <ProjectsSection projects={portfolioData.projects} />
        <CertificationsSection certifications={portfolioData.certifications} />
        <TestimonialsSection testimonials={portfolioData.testimonials} />
        <BlogSection blogs={portfolioData.blogs_writing} />
        <ContactSection contacts={portfolioData.contacts} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
