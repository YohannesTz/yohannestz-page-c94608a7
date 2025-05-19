
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Experience", target: "experience" },
    { name: "Education", target: "education" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <ScrollLink to="hero" smooth={true} className="cursor-pointer">Yohannes</ScrollLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.target}
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link cursor-pointer"
              activeClass="active"
            >
              {link.name}
            </ScrollLink>
          ))}
          <a 
            href="https://drive.google.com/file/d/1Pgw8j98V4mF4IMr7EfqbUJZUBn0QFUSJ/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-primary/80 rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.target}
                smooth={true}
                spy={true}
                offset={-80}
                className="nav-link"
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <a 
              href="https://drive.google.com/file/d/1Pgw8j98V4mF4IMr7EfqbUJZUBn0QFUSJ/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary/80 rounded-md text-sm font-medium text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
