
import { useRef, useEffect } from 'react';

interface TestimonialItem {
  name: string;
  title: string;
  content: string;
  photoUrl: string;
}

const TestimonialsSection = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
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
    
    const items = sectionRef.current?.querySelectorAll('.testimonial-card');
    items?.forEach(item => {
      observer.observe(item);
      item.classList.add('opacity-0');
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="testimonials" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">What Others Say</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={sectionRef}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card p-6 bg-card border border-border rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    src={testimonial.photoUrl} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
