import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  const projectDetails = [
    {
      title: "E-Commerce Platform",
      description: portfolioData.projects[0],
      technologies: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Tailwind CSS"],
      features: ["Payment processing", "Content management", "Product catalog", "Responsive design"]
    },
    {
      title: "Pharmaceutical Catalog",
      description: portfolioData.projects[1],
      technologies: ["Next.js", "Vercel", "Search API", "Filter System", "React"],
      features: ["Product search", "Advanced filters", "Responsive UI", "Performance optimized"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern web applications built with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectDetails.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Code size={16} />
                    <span>Source Code</span>
                  </button>
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