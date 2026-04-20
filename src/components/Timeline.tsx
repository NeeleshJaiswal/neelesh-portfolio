import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2025 - Present",
      title: "Senior Software Engineer",
      company: "HCL Technologies (ING Mortgages)",
      location: "Amsterdam, Netherlands",
      description: "Leading microservices development for ING's mortgage construction deposit platform"
    },
    {
      year: "2022 - 2025",
      title: "Software Engineer", 
      company: "Bridgestone Mobility Solutions",
      location: "Amsterdam, Netherlands",
      description: "Built real-time fleet monitoring systems processing millions of sensor readings daily"
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Northern Trust Corporation", 
      location: "Pune, India",
      description: "Led complete modernization of wealth management platform serving high-net-worth clients"
    },
    {
      year: "2019 - 2021",
      title: "Software Engineer",
      company: "Yash Technologies (John Deere Financial)",
      location: "Pune, India", 
      description: "Architected comprehensive financing platform for heavy construction equipment"
    },
    {
      year: "2018 - 2019",
      title: "Associate Consultant",
      company: "Atos Pvt Ltd",
      location: "Pune, India",
      description: "Enhanced BMW dealer management systems and improved processing efficiency"
    },
    {
      year: "2014 - 2018", 
      title: "Software Engineer",
      company: "Infosys Ltd",
      location: "Pune, India",
      description: "Developed core banking applications using Java and RESTful web services"
    },
    {
      year: "2014",
      title: "Bachelor of Engineering",
      company: "RGPV Bhopal",
      location: "Bhopal, India",
      description: "Graduated with engineering degree, beginning journey in enterprise software development"
    }
  ];

  return (
    <section id="timeline" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Career Path</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-4 mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A decade of growth across global companies and cutting-edge technologies
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-200"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Marker */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`card-modern p-6 lg:p-8 ml-12 lg:ml-0 flex-1 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                } max-w-lg ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg lg:text-xl font-semibold text-primary-600 mb-1">
                    {item.company}
                  </h4>
                  
                  <div className="flex items-center mb-4 text-neutral-500 justify-start lg:justify-end">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {item.location}
                  </div>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-20 lg:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Community Engagement
            </h3>
            <p className="text-neutral-600">
              Active contributor to the local tech community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-modern p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                Amsterdam Java User Group (AJUG)
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                Active member contributing to discussions on Java, cloud computing, and modern development practices
              </p>
            </div>
            
            <div className="card-modern p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">☕</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                Utrecht Java User Group (UJUG)
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                Participating in technical sessions on Java ecosystem and software engineering best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;