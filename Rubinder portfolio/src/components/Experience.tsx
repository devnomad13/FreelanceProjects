import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { WorkExperience as WorkExperienceType, Role, Highlight } from '../types/portfolio';

const Experience: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set());
  const [expandedHighlights, setExpandedHighlights] = useState<Set<string>>(new Set());

  const toggleRole = (roleId: string) => {
    const newExpanded = new Set(expandedRoles);
    if (newExpanded.has(roleId)) {
      newExpanded.delete(roleId);
    } else {
      newExpanded.add(roleId);
    }
    setExpandedRoles(newExpanded);
  };

  const toggleHighlight = (highlightId: string) => {
    const newExpanded = new Set(expandedHighlights);
    if (newExpanded.has(highlightId)) {
      newExpanded.delete(highlightId);
    } else {
      newExpanded.add(highlightId);
    }
    setExpandedHighlights(newExpanded);
  };

  const renderHighlights = (highlights: Highlight[] | string[], roleIndex: number) => {
    if (typeof highlights[0] === 'string') {
      return (
        <ul className="space-y-2">
          {(highlights as string[]).map((highlight, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="space-y-4">
        {(highlights as Highlight[]).map((highlight, index) => {
          const highlightId = `${roleIndex}-${index}`;
          const isExpanded = expandedHighlights.has(highlightId);
          
          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleHighlight(highlightId)}
                className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <span className="font-medium text-gray-900">{highlight.category}</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {isExpanded && (
                <div className="px-4 py-3 bg-white">
                  <ul className="space-y-2">
                    {highlight.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building scalable solutions and driving impact at leading technology companies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {portfolioData.work_experience.map((company, companyIndex) => (
            <div key={companyIndex} className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl px-8 py-6 text-white">
                <div className="flex items-center space-x-4 mb-2">
                  <Building size={24} />
                  <h3 className="text-2xl font-bold">{company.company}</h3>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <MapPin size={16} />
                  <span>{company.location}</span>
                </div>
              </div>

              <div className="bg-white rounded-b-xl shadow-lg border-x border-b border-gray-200">
                {company.roles.map((role, roleIndex) => {
                  const roleId = `${companyIndex}-${roleIndex}`;
                  const isExpanded = expandedRoles.has(roleId);
                  
                  return (
                    <div key={roleIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleRole(roleId)}
                        className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                              {role.title}
                            </h4>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Calendar size={16} />
                              <span>{role.start_date} - {role.end_date}</span>
                            </div>
                            {role.note && (
                              <p className="text-sm text-blue-600 mt-2 italic">{role.note}</p>
                            )}
                          </div>
                          <div className="ml-4">
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-8 pb-6">
                          <div className="border-l-4 border-blue-600 pl-6">
                            {renderHighlights(role.highlights, roleIndex)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;