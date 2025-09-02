import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "BDAA DataJO Hackathon",
      description: "Conducted data analyses on EV charging station usage and disparities in accessibility. Applied data science models to analyze correlation between city population and number of EV charging stations.",
      technologies: ["Python", "Data Analysis", "Linear Regression", "Pandas", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Market Data Pipeline Simulator",
      description: "Developed a market data pipeline simulator using Python, capable of processing financial data. Created a real-time data processing system with Docker compose and implemented automated backup workflows.",
      technologies: ["Python", "FastAPI", "Docker", "WebSockets", "Real-time"],
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=250&fit=crop&auto=format",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Developed a personal portfolio website using React and Tailwind CSS. Implemented responsive design principles for an engaging user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&auto=format",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Down Detector",
      description: "Down Detector is a full-stack web application that monitors website uptime, logs results into a SQLite database, and displays both time and status checks, like status tables, alert notifications, and responsive web interface.",
      technologies: ["Flask", "JavaScript", "CSS", "SQLite", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Revu App",
      description: "A comprehensive sentiment analysis application that classifies product reviews as positive, negative, or neutral using advanced machine learning models. Features a sentiment analysis interface for improving reviews, real-time sentiment analysis, and detailed results display.",
      technologies: ["Flask", "JavaScript", "Flask", "MongoDB", "Bootstrap", "Python"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop&auto=format",
      demoLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-primary/20 hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1 md:col-span-2' : ''
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;