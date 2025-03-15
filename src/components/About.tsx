
import React from 'react';
import { Award, User, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Jane Doe' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '5+ Years' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Award size={20} />, label: 'Degree', value: 'B.S. Computer Science' },
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-dark">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-2 bg-portfolio-purple/20 rounded-lg blur-sm"></div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000" 
                alt="Jane Doe working" 
                className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold">Crafting Digital Experiences with Code</h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building modern 
              web applications. My journey in the world of programming started when I built my 
              first website at 15, and I've been hooked ever since.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I specialize in JavaScript ecosystems, building responsive and 
              performant applications with React on the frontend and Node.js on the backend.
              I'm also experienced with TypeScript, GraphQL, and various database technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-portfolio-purple">{item.icon}</div>
                  <div>
                    <span className="text-gray-400 text-sm">{item.label}: </span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
