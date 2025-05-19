
import { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationItem {
  title: string;
  issueDate: string;
  description: string;
  link: string;
}

const CertificationsSection = ({ certifications }: { certifications: CertificationItem[] }) => {
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
    
    const items = sectionRef.current?.querySelectorAll('.cert-item');
    items?.forEach(item => {
      observer.observe(item);
      item.classList.add('opacity-0');
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="certifications" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="mt-10 space-y-8" ref={sectionRef}>
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="cert-item border-l-2 border-secondary pl-6 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-medium">{cert.title}</h3>
                <span className="text-sm text-muted-foreground md:text-right">{cert.issueDate}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                View Certificate <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
