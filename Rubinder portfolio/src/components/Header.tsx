import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            {portfolioData.personal_info.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <a href={`mailto:${portfolioData.personal_info.email}`} 
                 className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-600 py-2">
                  <Mail size={16} />
                  <a href={`mailto:${portfolioData.personal_info.email}`} 
                     className="hover:text-blue-600 transition-colors">
                    {portfolioData.personal_info.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 py-2">
                  <Phone size={16} />
                  <a href={`tel:${portfolioData.personal_info.phone}`} 
                     className="hover:text-blue-600 transition-colors">
                    {portfolioData.personal_info.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 py-2">
                  <MapPin size={16} />
                  <span>{portfolioData.personal_info.location}</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;