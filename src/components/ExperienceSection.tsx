
import { useRef, useEffect } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  time: string;
}

const ExperienceSection = ({ experience }: { experience: ExperienceItem[] }) => {
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
    
    const items = sectionRef.current?.querySelectorAll('.timeline-item');
    items?.forEach(item => {
      observer.observe(item);
      item.classList.add('opacity-0');
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="experience" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-10" ref={sectionRef}>
          {experience.map((job, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="text-lg font-medium">{job.title}</h3>
                <span className="text-sm text-muted-foreground md:text-right">{job.time}</span>
              </div>
              <p className="text-base font-medium">{job.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
