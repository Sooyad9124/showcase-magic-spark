import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Let's Connect</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <p className="text-muted-foreground">said.ali@buckeyemail.osu.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/said-ali</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary">GitHub</p>
                  <p className="text-muted-foreground">github.com/SaidAli2020</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-card-gradient border-primary/20 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-primary font-medium">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name..."
                  className="mt-2 bg-input border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-primary font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email..."
                  className="mt-2 bg-input border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-primary font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows={5}
                  className="mt-2 bg-input border-primary/30 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            Copyright © 2024 Said ALI. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;