
import React from 'react';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-portfolio-purple font-mono text-lg mb-3">Hello, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Jane Doe
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-300 font-light">
                Full Stack Developer
              </h2>
            </div>
            
            <div className="code-block max-w-md">
<span className="text-portfolio-purple">const</span> <span className="text-blue-400">developer</span> = {`{
  skills: ["JavaScript", "React", "Node.js", "TypeScript"],
  passions: ["Web Development", "UI/UX", "Opensource"],
  isAvailableForWork: true,
}`};
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" asChild>
                <a href="#projects">
                  View My Work <ExternalLink size={16} className="ml-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" /> GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-80 h-80 bg-portfolio-purple/20 rounded-full absolute top-0 right-0 animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="w-60 h-60 bg-portfolio-purple/10 rounded-full absolute bottom-0 left-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="bg-secondary p-6 rounded-lg shadow-xl relative animate-bounce-in">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=2000"
                alt="Developer" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
