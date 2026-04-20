import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-accent-500/5"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-primary-700 bg-primary-100 border border-primary-200">
                ✨ Senior Software Engineer
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6">
              Neelesh 
              <span className="block gradient-text">Jaiswal</span>
            </h1>
            
            <div className="mb-8 space-y-4">
              <p className="text-xl lg:text-2xl text-neutral-600 font-medium">
                Building robust financial systems that power 
                <span className="gradient-text font-semibold"> millions of transactions daily</span>
              </p>
              
              <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
                Enterprise software engineer with <strong>10+ years</strong> delivering mission-critical solutions for global financial institutions like <strong>ING, Bridgestone, Northern Trust</strong>, and <strong>John Deere Financial</strong>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary-modern group"
              >
                View Projects
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a 
                href="/Neelesh_Jaiswal_Resume.pdf" 
                className="btn-secondary-modern"
                download="Neelesh_Jaiswal_Resume.pdf"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>
            
            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-3">
              {['Java', 'Spring Boot', 'React', 'Microservices', 'AWS', 'Azure'].map((tech, index) => (
                <span 
                  key={tech}
                  className="skill-tag-modern animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Stats Sidebar */}
          <div className="lg:col-span-4 animate-slide-in-right">
            <div className="glass-card p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-neutral-600 font-medium">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">5</div>
                  <div className="text-neutral-600 font-medium">Global Companies</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">Million+</div>
                  <div className="text-neutral-600 font-medium">Daily Transactions</div>
                </div>
              </div>
              
              {/* Location */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="flex items-center justify-center text-neutral-600">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Amsterdam, Netherlands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-neutral-400 hover:text-primary-600 transition-colors duration-200"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs font-medium mt-2">Scroll</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;