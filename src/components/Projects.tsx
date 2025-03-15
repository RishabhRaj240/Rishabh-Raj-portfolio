
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing with Stripe.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce-site.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Socket.io, React for the frontend, and a Node.js backend with Express and MongoDB.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://your-task-app.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data and forecasts for locations worldwide. Built with React and integrates with the OpenWeatherMap API.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://your-weather-app.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 flex justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple flex items-center gap-1 transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple flex items-center gap-1 transition-colors"
                >
                  Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See More Projects <Github size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
