
import { Contacts } from '@/types/portfolioTypes';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ contacts }: { contacts: Contacts }) => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yohannes Tezera. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={contacts.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${contacts.email}`}
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>Made with ❤️ and a lot of ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
