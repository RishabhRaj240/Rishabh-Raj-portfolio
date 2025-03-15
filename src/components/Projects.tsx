
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://your-ecommerce-site.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Socket.io, React for the frontend, and a Node.js backend with Express and MongoDB.',
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://your-task-app.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data and forecasts for locations worldwide. Built with React and integrates with the OpenWeatherMap API.',
      image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://your-weather-app.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex} 
                      className="tech-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * tagIndex }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 flex justify-between">
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple flex items-center gap-1 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={16} /> Code
                </motion.a>
                <motion.a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-purple flex items-center gap-1 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Demo <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See More Projects <Github size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
