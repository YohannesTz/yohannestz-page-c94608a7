
import { useRef, useEffect } from 'react';

interface EducationItem {
  schoolName: string;
  time: string;
  type: string;
  description: string;
}

const EducationSection = ({ educations }: { educations: EducationItem[] }) => {
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
    
    const items = sectionRef.current?.querySelectorAll('.education-item');
    items?.forEach(item => {
      observer.observe(item);
      item.classList.add('opacity-0');
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="education" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-10 space-y-10" ref={sectionRef}>
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className="education-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-medium">{edu.schoolName}</h3>
                <span className="text-sm text-muted-foreground md:text-right">{edu.time}</span>
              </div>
              <p className="text-base font-medium mb-2">{edu.type}</p>
              <p className="text-sm text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
