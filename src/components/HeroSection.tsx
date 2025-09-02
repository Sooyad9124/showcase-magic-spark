import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              👋 Welcome to my portfolio
            </div>
            
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Said ALI
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
                I am a <span className="text-primary font-semibold">Developer</span>
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
              Passionate about creating beautiful, functional and user-centered digital experiences. 
              Currently learning and building amazing things with code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={scrollToContact}
              >
                Get in touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-card bg-card-gradient p-2">
                <img
                  src={profilePhoto}
                  alt="Said ALI - Software Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;