import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "HCL Technologies Ltd",
      role: "Senior Software Engineer",
      period: "March 2025 - Present",
      location: "Amsterdam, Netherlands",
      project: "ING Mortgages – Construction Deposit & Repayment Systems",
      description: [
        "Architect microservices infrastructure for ING's Mortgage Construction Deposit (Bouwdepot) platform managing staged disbursements during property construction/renovation",
        "Engineer mortgage repayment workflows supporting annuity and linear schedules, extra repayment processing, and real-time balance calculations for retail banking customers",
        "Design RESTful APIs consumed by ING's digital channels, enabling customers to view building fund balances, submit payment requests, and track repayment progress",
        "Deploy on Azure & AWS cloud infrastructure using Kubernetes and Docker, ensuring high availability and scalability of critical mortgage services",
        "Maintain 99.9% uptime through comprehensive unit/integration testing with JUnit in regulated financial environment"
      ],
      technologies: ["Java", "Spring Boot", "RESTful Web Services", "Spring ORM", "SQL", "Kafka", "JUnit", "Azure", "AWS", "Kubernetes", "Docker", "Microservices"]
    },
    {
      company: "Bridgestone Mobility Solutions (Webfleet)",
      role: "Software Engineer",
      period: "May 2022 – Feb 2025",
      location: "Amsterdam, Netherlands",
      project: "Webfleet TPMS – Tyre Pressure Monitoring System",
      description: [
        "Built full-stack fleet safety solution monitoring tyre pressure and temperature across thousands of commercial vehicles and trailers in real-time",
        "Developed backend microservices in Java & Spring Boot to ingest, process, and analyze continuous sensor data streams from TPMS-equipped vehicles",
        "Implemented anomaly detection algorithms identifying slow leaks, over/under-inflation, and temperature spikes, preventing vehicle breakdowns and safety incidents",
        "Created responsive React/Redux frontend enabling fleet managers to monitor tyre health, receive alerts, and track maintenance schedules",
        "Optimized data processing pipelines handling millions of sensor readings daily with sub-second response times"
      ],
      technologies: ["ReactJS", "Redux", "JavaScript", "Java", "Spring Boot", "RESTful Web Services", "Spring ORM", "SQL", "JUnit", "Azure", "AWS", "Kubernetes", "Docker", "Microservices"]
    },
    {
      company: "Northern Trust Corporation",
      role: "Software Engineer",
      period: "Jan 2022 – Apr 2022",
      location: "Pune, India",
      project: "Wealth Management Platform Modernisation",
      description: [
        "Led complete modernization of legacy Wealth Management application serving high-net-worth individuals and families with private banking and investment services",
        "Successfully migrated application from legacy PHP/HTML stack to modern Java, Spring Boot, and React architecture, improving performance by 40% and enhancing maintainability",
        "Developed reusable React components for wealth planning dashboards, portfolio views, and banking service interfaces aligned with Northern Trust's design standards",
        "Delivered seamless user experience for trust & estate services and wealth planning advisory with zero downtime during migration"
      ],
      technologies: ["Java", "Spring Boot", "RESTful Web Services", "Azure", "Kubernetes", "PHP", "HTML", "JavaScript", "React", "Redux"]
    }
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Professional Journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-4 mb-6">
            Experience Building <span className="gradient-text">Global Systems</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Delivering scalable systems for global financial institutions and Fortune 500 companies
          </p>
        </div>
        
        {/* Timeline */}
        <div className="space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-600 to-primary-300 hidden lg:block"></div>
              )}
              
              {/* Experience Card */}
              <div className="card-modern p-8 lg:p-10 relative overflow-hidden group">
                {/* Company Badge */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary-600 rounded-full mr-3 lg:block hidden"></div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                          {exp.role}
                        </h3>
                      </div>
                      <h4 className="text-xl lg:text-2xl font-semibold text-primary-600 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-medium text-neutral-700 mb-1">
                        {exp.period}
                      </div>
                      <div className="text-neutral-500 flex items-center lg:justify-end">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border-l-4 border-primary-500">
                    <div className="text-sm font-semibold text-primary-700 uppercase tracking-wide mb-1">
                      Key Project
                    </div>
                    <div className="text-lg font-medium text-neutral-900">
                      {exp.project}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, descIndex) => (
                      <li key={descIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span className="text-neutral-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="border-t border-neutral-200 pt-6">
                    <div className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="tech-badge-modern hover:bg-primary-100 hover:text-primary-700 hover:border-primary-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;