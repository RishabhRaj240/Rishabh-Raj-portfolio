
import React from 'react';

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level: number; // 1-10
  }>;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 9 },
        { name: 'JavaScript', level: 9 },
        { name: 'React', level: 8 },
        { name: 'TypeScript', level: 7 },
        { name: 'Next.js', level: 8 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 8 },
        { name: 'Express', level: 8 },
        { name: 'MongoDB', level: 7 },
        { name: 'PostgreSQL', level: 6 },
        { name: 'GraphQL', level: 7 },
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git & GitHub', level: 9 },
        { name: 'Docker', level: 6 },
        { name: 'AWS', level: 6 },
        { name: 'Testing', level: 7 },
        { name: 'UI/UX Design', level: 7 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-secondary rounded-lg p-6 shadow-lg animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-portfolio-purple">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level * 10}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-portfolio-purple rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.level * 10}%`,
                          animation: 'progressAnimation 1.5s ease-out forwards'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'MongoDB', 'Express.js', 
              'Tailwind CSS', 'Redux', 'GraphQL', 'PostgreSQL', 'Jest', 'Git', 
              'AWS', 'Docker', 'Figma'].map((tech, index) => (
              <div 
                key={index}
                className="tech-badge animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
