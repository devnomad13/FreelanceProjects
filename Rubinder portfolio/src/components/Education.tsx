import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in computer science and engineering
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{portfolioData.education.degree}</h3>
                  <p className="text-blue-100 text-lg">{portfolioData.education.institute}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-900">{portfolioData.education.dates}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">Patiala, Punjab</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium">Academic Excellence</p>
                    <p className="text-blue-600 text-sm mt-1">100% college fee waiver for {'>'}95% in 12th Standard</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-indigo-800 font-medium">Strong Foundation</p>
                    <p className="text-indigo-600 text-sm mt-1">Comprehensive computer science curriculum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;