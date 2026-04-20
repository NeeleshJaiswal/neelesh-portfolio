import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      icon: "⚡",
      skills: ["Java (10+ years)", "Spring Boot", "Spring Framework", "JavaScript", "React", "Redux"]
    },
    {
      title: "Backend & Architecture",
      icon: "🏗️",
      skills: ["Microservices Architecture", "RESTful Web Services", "Spring ORM", "Apache Kafka", "JUnit", "Mockito"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "Jenkins", "Maven", "Gradle", "Git"]
    },
    {
      title: "Databases & Storage",
      icon: "🗄️",
      skills: ["SQL", "NoSQL", "Database Design"]
    },
    {
      title: "Frontend & Testing",
      icon: "🎨",
      skills: ["React/Redux", "JavaScript", "Cypress", "Jest", "Webpack"]
    },
    {
      title: "Monitoring & Quality",
      icon: "📊",
      skills: ["Grafana", "Prometheus", "AppDynamics", "Test-Driven Development", "Agile/Scrum"]
    },
    {
      title: "Domain Expertise",
      icon: "💼",
      skills: ["Financial Services", "Banking & Payments", "Wealth Management", "Fleet Management", "Legacy System Modernization"]
    }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 gradient-bg">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Technical Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive tech stack refined through years of enterprise development, from legacy system modernization to cutting-edge cloud architectures.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card-modern p-8 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag-modern animate-fade-in"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Technologies */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Core Technologies
            </h3>
            <p className="text-neutral-600">
              Technologies I work with daily in enterprise environments
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Java', years: '10+', color: 'bg-orange-100 text-orange-700 border-orange-200' },
              { name: 'Spring Boot', years: '8+', color: 'bg-green-100 text-green-700 border-green-200' },
              { name: 'React', years: '5+', color: 'bg-blue-100 text-blue-700 border-blue-200' },
              { name: 'Microservices', years: '6+', color: 'bg-purple-100 text-purple-700 border-purple-200' },
              { name: 'AWS', years: '4+', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
              { name: 'Azure', years: '3+', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className={`inline-flex items-center px-4 py-2 rounded-xl border font-medium ${tech.color} animate-fade-in hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${800 + (index * 100)}ms` }}
              >
                <span className="font-semibold">{tech.name}</span>
                <span className="ml-2 text-sm opacity-75">{tech.years} yrs</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;