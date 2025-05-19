
import { useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectItem {
  name: string;
  link: string;
  description: string;
  mdName: string;
}

const ProjectsSection = ({ projects }: { projects: ProjectItem[] }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const items = sectionRef.current?.querySelectorAll('.project-card');
    items?.forEach(item => {
      observer.observe(item);
      item.classList.add('opacity-0');
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="projects" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6" ref={sectionRef}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <div className="flex space-x-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`GitHub repository for ${project.name}`}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground flex-grow mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
