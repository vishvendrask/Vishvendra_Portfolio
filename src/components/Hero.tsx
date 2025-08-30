import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
          Welcome to my portfolio
        </p>
        
        {/* Main Title */}
        <h1 className="mb-6 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          <span className="block">Vishvendra Singh</span>
          <span className="block text-colorfull animate-gradient-x font-nyght tracking-wide">
            Khangarot
          </span>
        </h1>
        
        {/* Description */}
        <p className="mb-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-colorfull text-white rounded-lg hover:bg-colorfull/90 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-3 border-2 border-colorfull text-colorfull rounded-lg hover:bg-colorfull hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
