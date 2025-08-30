import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishvendrask/',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vishvendrask',
      icon: Github,
      color: 'text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'Email',
      url: 'mailto:vishvendrask@gmail.com',
      icon: Mail,
      color: 'text-red-600 hover:text-red-700'
    }
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-colorfull mb-2">VS</div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Senior Full-Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-colorfull transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-colorfull transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-colorfull transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-colorfull transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left text-gray-600 dark:text-gray-400">
              <p>
                © {currentYear} Vishvendra Singh Khangarot. All rights reserved.
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
