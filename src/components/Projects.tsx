import React from 'react';

interface Project {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  icon: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "ING Mortgage Construction Deposit System",
      subtitle: "Banking Infrastructure",
      problem: "ING needed a modern system to manage staged mortgage disbursements during property construction",
      solution: "Built microservices architecture supporting real-time balance calculations and payment workflows",
      impact: "Serving thousands of retail banking customers with 99.9% uptime",
      technologies: ["Java", "Spring Boot", "Kafka", "Azure", "Kubernetes"],
      icon: "🏦"
    },
    {
      title: "Webfleet Tyre Pressure Monitoring System",
      subtitle: "Fleet Safety Solution",
      problem: "Fleet operators needed real-time monitoring to prevent vehicle breakdowns and safety incidents",
      solution: "Developed full-stack solution processing continuous sensor data from commercial vehicles",
      impact: "Monitors thousands of vehicles, detects anomalies preventing costly breakdowns",
      technologies: ["Java", "Spring Boot", "React", "Redux", "Microservices", "Azure"],
      icon: "🚛"
    },
    {
      title: "Northern Trust Wealth Management Modernization",
      subtitle: "Platform Migration",
      problem: "Legacy PHP platform couldn't scale to meet modern wealth management demands",
      solution: "Led complete migration to Java/Spring Boot/React architecture",
      impact: "40% performance improvement, enhanced user experience for high-net-worth clients",
      technologies: ["Java", "Spring Boot", "React", "Azure", "Kubernetes"],
      icon: "💰"
    },
    {
      title: "John Deere Equipment Financing Platform",
      subtitle: "Financial Technology",
      problem: "Manual loan processes were slow and error-prone for equipment financing",
      solution: "Built end-to-end financing platform with automated workflows",
      impact: "60% reduction in application processing time, streamlined multi-million dollar portfolios",
      technologies: ["Java", "Spring Boot", "React", "Redux", "NoSQL", "Microservices"],
      icon: "🏗️"
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 gradient-bg">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-4 mb-6">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Mission-critical systems delivering real business value for global enterprises
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card-modern p-8 lg:p-10 h-full flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4 p-3 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
                    {project.subtitle}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-2">
                    Impact
                  </h4>
                  <p className="text-primary-600 font-medium leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-badge-modern"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;