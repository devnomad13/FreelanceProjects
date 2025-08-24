import React from 'react';
import { Code, Database, Shield, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "4+ Years Experience",
      description: "Backend systems, frontend development, and security-driven architectures"
    },
    {
      icon: <Database className="text-indigo-600" size={24} />,
      title: "Scalable Solutions",
      description: "Built verification platforms processing 4K+ requests daily"
    },
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: "Security & Compliance",
      description: "GDPR compliance, data encryption, and fraud detection expertise"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "Leadership & Mentorship",
      description: "Mentored peers and led compliance programs across multiple services"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate about building scalable, secure solutions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {portfolioData.summary}
            </p>
            <p className="text-gray-600 leading-relaxed">
              My experience spans from Amazon's massive scale financial systems to Ethos Life's 
              identity verification platforms. I specialize in architecting backend systems 
              that are not only performant and scalable but also secure and compliant with 
              industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;