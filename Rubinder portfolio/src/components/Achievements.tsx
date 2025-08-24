import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Achievements: React.FC = () => {
  const achievementDetails = [
    {
      title: "Amazon Finance Recognition",
      description: portfolioData.achievements[0],
      icon: <Trophy className="text-yellow-600" size={24} />,
      category: "Professional Recognition"
    },
    {
      title: "Defense Achievement",
      description: portfolioData.achievements[1],
      icon: <Award className="text-blue-600" size={24} />,
      category: "Military & Defense"
    },
    {
      title: "Academic Excellence",
      description: portfolioData.achievements[2],
      icon: <Star className="text-purple-600" size={24} />,
      category: "Educational Achievement"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for excellence in professional, academic, and personal endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementDetails.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mx-auto mb-6">
                {achievement.icon}
              </div>
              
              <div className="text-center">
                <div className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
                  {achievement.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;