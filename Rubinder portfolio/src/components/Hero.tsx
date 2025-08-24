import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import profilePic from '../data/images/profile_pic.png';
import profileResume from '../data/files/profile_resume.pdf';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
              <img src={profilePic} alt={portfolioData.personal_info.name} className="rounded-full w-full h-full object-center" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {portfolioData.personal_info.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
              Software Engineer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            {portfolioData.summary}
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="text-blue-600" size={20} />
              <a href={`mailto:${portfolioData.personal_info.email}`} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">
                {portfolioData.personal_info.email}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="text-blue-600" size={20} />
              <a href={`tel:${portfolioData.personal_info.phone}`} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">
                {portfolioData.personal_info.phone}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-700">{portfolioData.personal_info.location}</span>
            </div>
          </div>

          {/* Social Links & Resume Button */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {/* LinkedIn Icon Button */}
            <a
              href="https://www.linkedin.com/in/rubindersingh21/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white border border-blue-600 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 h-12 w-12 flex items-center justify-center cursor-pointer hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={22}
                className="text-blue-600 group-hover:text-white transition-colors duration-200"
              />
            </a>
            {/* Divider (optional) */}
            <span className="w-px h-8 bg-gradient-to-b from-blue-400 via-indigo-400 to-transparent opacity-60"></span>
            {/* Resume Download Button */}
            <button
              onClick={() => window.open(profileResume, '_blank')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-base"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;