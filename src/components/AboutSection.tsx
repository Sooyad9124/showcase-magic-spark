import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-card bg-card-gradient p-2">
                <img
                  src={profilePhoto}
                  alt="Said ALI"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm mb-2">4+ years</p>
                <p className="text-card-foreground">Software Development</p>
                <p className="text-muted-foreground text-sm">Internships & Projects</p>
              </Card>

              <Card className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p className="text-card-foreground">B.S. Computer Science</p>
                <p className="text-muted-foreground text-sm">The Ohio State University</p>
                <p className="text-muted-foreground text-sm">Expected Dec 2024</p>
              </Card>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Heading into my senior year at The Ohio State University, I'm eager to take the next step in my journey as a 
                Software Engineer. With a strong foundation in Computer Science, I'm actively seeking a Software Engineering 
                internship where I can apply my skills, solve real-world problems, and continue to grow.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Whether I'm refining my work in familiar languages or exploring new technologies, I'm driven by curiosity and a passion for building 
                impactful, efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;