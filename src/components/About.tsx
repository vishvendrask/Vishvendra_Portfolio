import React from 'react';
import { ArrowRight, Linkedin, Github, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
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
    },
    {
      name: 'Phone',
      url: 'tel:+917891374599',
      icon: Phone,
      color: 'text-green-600 hover:text-green-700'
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
                KNOW ABOUT ME
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance">
                Full-Stack Developer and a little bit of{' '}
                <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
                  everything
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm Vishvendra Singh Khangarot, a proactive full-stack developer passionate about creating dynamic web experiences. 
                From frontend to backend, I thrive on solving complex problems with clean, efficient code. 
                My expertise spans React, Angular, Node.js, and I'm always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious. 
                Life's about balance, and I love embracing every part of it.
              </p>
              <p>
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 text-colorfull hover:text-colorfull/80 transition-colors duration-200"
            >
              <span className="text-lg font-medium">Work Experience</span>
              <div className="w-6 h-6 rounded-full border-2 border-colorfull flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative mx-auto size-fit overflow-hidden">
              <div className="[mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)] [mask-image:linear-gradient(to_top,transparent,#000_100%)]">
                <div className="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40">
                  {/* Placeholder for profile image or illustration */}
                  <div className="w-full h-full bg-gradient-to-br from-colorfull/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-colorfull">VS</div>
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

export default About;
