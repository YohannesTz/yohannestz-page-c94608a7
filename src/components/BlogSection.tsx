
import { ExternalLink } from 'lucide-react';

interface BlogItem {
  text: string;
  link: string;
}

const BlogSection = ({ blogs }: { blogs: BlogItem[] }) => {
  return (
    <section id="blog" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Blog & Writing</h2>
        
        <div className="mt-10 max-w-2xl">
          {blogs.map((blog, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-base text-muted-foreground mb-4 whitespace-pre-line">{blog.text}</p>
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 border border-primary/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Read on Medium <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
