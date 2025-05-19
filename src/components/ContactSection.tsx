
import { Contacts } from '@/types/portfolioTypes';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactSection = ({ contacts }: { contacts: Contacts }) => {
  const { email, linkedIn } = contacts;

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-base text-muted-foreground mb-6">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question, a job opportunity, or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`mailto:${email}`} 
              className="flex items-center justify-center gap-2 px-4 py-3 border border-primary/80 rounded-md text-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
              <span>Send me an email</span>
            </a>
            
            <a 
              href={linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary hover:bg-secondary/80 rounded-md text-center transition-colors"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;