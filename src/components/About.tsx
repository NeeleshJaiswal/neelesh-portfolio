import React from 'react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: '🏦',
      title: 'Financial Services Expertise',
      description: 'Deep domain knowledge in banking, wealth management, and fintech solutions'
    },
    {
      icon: '🏗️',
      title: 'Architecture & Scale',
      description: 'Microservices, cloud platforms, and systems processing millions of transactions'
    },
    {
      icon: '🚀',
      title: 'Legacy Modernization',
      description: 'Successfully migrating enterprise systems while maintaining business continuity'
    },
    {
      icon: '👥',
      title: 'Community Active',
      description: 'Contributing to Amsterdam and Utrecht Java User Groups (AJUG, UJUG)'
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Content */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">About Me</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-4 mb-6">
                Senior Engineer Who Thrives on 
                <span className="gradient-text"> Complex Problems</span>
              </h2>
            </div>
            
            <div className="prose prose-lg text-neutral-600 space-y-6">
              <p className="text-xl leading-relaxed">
                I'm a senior software engineer who thrives on solving complex problems in <strong>high-stakes financial environments</strong>. Over the past 10 years, I've architected and delivered scalable systems for some of the world's most demanding industries—from mortgage processing at ING Bank to real-time fleet monitoring at Bridgestone.
              </p>
              
              <p className="leading-relaxed">
                My expertise lies in <strong>modernizing legacy financial systems</strong> while maintaining the reliability and security that regulated industries demand. I've successfully led platform migrations, built microservices architectures, and delivered full-stack solutions that handle millions of transactions daily.
              </p>
              
              <p className="leading-relaxed">
                Currently based in <strong>Amsterdam</strong>, I'm an active member of the local Java community (AJUG, UJUG) and passionate about staying at the forefront of enterprise software development. I believe in writing clean, maintainable code that not only solves today's problems but scales for tomorrow's challenges.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Available for senior engineering roles
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Amsterdam, Netherlands
                </div>
              </div>
            </div>
          </div>
          
          {/* Highlights */}
          <div className="lg:col-span-5">
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="card-modern p-6 group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <blockquote className="text-lg text-neutral-700 font-medium italic mb-4">
                "I believe in writing clean, maintainable code that not only solves today's problems but scales for tomorrow's challenges."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Neelesh Jaiswal</div>
                  <div className="text-sm text-neutral-600">Senior Software Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;