import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, ChevronDown } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Kaizen Konsulting",
      location: "Seattle, WA",
      duration: "Apr 2023 - Present",
      description: "Built and deployed a responsive web platform enabling students to receive resume reviews and access real-time internship listings through integrated third-party APIs.",
      isExpanded: true
    },
    {
      title: "Tech Prep Fellow",
      company: "CodePath",
      location: "Remote",
      duration: "Jan 2023 - Apr 2023",
      description: "Completed a rigorous training program focused on data structures, algorithms, and system design. Solved LeetCode-style problems covering arrays, linked lists, trees, and graphs.",
      isExpanded: false
    },
    {
      title: "Undergraduate Research",
      company: "Ohio State University",
      location: "Ohio",
      duration: "Jan 2024 - Jul 2024",
      description: "Designed compilers and software tools optimized for data-intensive applications on GPUs, enhancing processing efficiency and reducing processing time.",
      isExpanded: false
    },
    {
      title: "STEM Instructor",
      company: "Somali East African Community Services",
      location: "Ohio",
      duration: "Aug 2024 - Present",
      description: "Taught weekly STEM and programming classes to Somali high school students, focusing on low-level programming using the C language.",
      isExpanded: false
    }
  ];

  const skills = [
    "Python", "Java", "JavaScript", "React", "Node.js", "MongoDB", 
    "PostgreSQL", "Git", "Docker", "AWS", "C/C++", "TypeScript"
  ];

  return (
    <section id="experience" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Experience & Skills</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <Badge 
              variant="secondary" 
              className="bg-primary text-primary-foreground px-6 py-2 text-lg font-medium rounded-full"
            >
              Experience
            </Badge>
            <Badge 
              variant="outline" 
              className="border-primary/30 text-primary px-6 py-2 text-lg hover:bg-primary/10 transition-colors rounded-full"
            >
              Skills
            </Badge>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                    <p className="text-lg text-card-foreground mb-2">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-200 ${exp.isExpanded ? 'rotate-180' : ''}`} />
                </div>

                {exp.isExpanded && (
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-primary mb-8">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;