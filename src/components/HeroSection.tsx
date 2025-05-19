
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HeroSection = ({ topText }: { topText: any }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="section-container">
        <div className="flex flex-col space-y-6 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Yohannes Tezera
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
            Software Developer specializing in
            <div className="mt-1 flex flex-wrap gap-2">
              {topText.stacks.map((stack: string, index: number) => (
                <span key={index} className="inline-block px-3 py-1 bg-secondary rounded-full text-secondary-foreground text-sm">
                  {stack}
                </span>
              ))}
            </div>
          </h2>
          
          <div className="prose text-muted-foreground max-w-full">
            <p className="text-base md:text-lg">{topText.personalIntroOne}</p>
            <p className="text-base md:text-lg">{topText.personalIntroTwo}</p>
            <p className="mt-4 text-base font-medium">{topText.openTo}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://github.com/YohannesTz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/yohannes-tezera/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:yohannes@example.com" 
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a 
              href={topText.resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-primary/80 hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
              aria-label="Resume"
            >
              <ExternalLink size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
