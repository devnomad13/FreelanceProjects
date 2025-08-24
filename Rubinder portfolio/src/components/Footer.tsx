import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{portfolioData.personal_info.name}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a href={`mailto:${portfolioData.personal_info.email}`} 
                   className="hover:text-blue-400 transition-colors">
                  {portfolioData.personal_info.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <a href={`tel:${portfolioData.personal_info.phone}`} 
                   className="hover:text-blue-400 transition-colors">
                  {portfolioData.personal_info.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span>{portfolioData.personal_info.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Me</h4>
            <div className="flex space-x-4">
              <a onClick={() => window.open("https://www.linkedin.com/in/rubindersingh21/", "_blank")} className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                Open to new opportunities and collaborations. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 {portfolioData.personal_info.name}. Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;