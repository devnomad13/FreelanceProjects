import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      items: portfolioData.skills.languages_frameworks,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Architecture & Tools",
      items: portfolioData.skills.architecture_tools,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Databases",
      items: portfolioData.skills.databases,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cloud & Infrastructure",
      items: portfolioData.skills.cloud_infra,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Security & Compliance",
      items: portfolioData.skills.security_compliance,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Other Expertise",
      items: portfolioData.skills.other,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set built through hands-on experience at leading tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${category.color} px-6 py-4`}>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {skill}
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

export default Skills;