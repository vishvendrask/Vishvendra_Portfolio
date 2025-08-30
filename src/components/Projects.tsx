import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Google Test Data Automation',
      shortDes: 'End-to-end development for Google\'s Test Data Automation project',
      des: 'Leading the development of a comprehensive test data management system for Google, overseeing both frontend and backend components. Built with Angular and Google\'s internal Boq Node framework.',
      bulletPoints: [
        'Leading end-to-end development for Google\'s Test Data Automation project',
        'Building seamless, high-performance APIs using Angular and Google\'s internal Boq Node framework',
        'Ensuring intuitive user experience across Test Data Management web application',
        'Robust architecture and clean UI implementation'
      ],
      img: {
        src: '/placeholder-project-1.jpg',
        alt: 'Google Test Data Automation Project'
      },
      color: 'blue',
      techStack: [
        { name: 'Angular', icon: '🅰️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Google Boq Framework', icon: '🔧' },
        { name: 'Test Data Management', icon: '📊' }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'DBS Bank IBNextGen Platform',
      shortDes: 'Micro-Frontend banking platform with React.js and Redux',
      des: 'Spearheaded key modules in DBS Bank\'s IBNextGen banking platform using React.js and Redux. Developed multiple Micro-Frontend components for banking features.',
      bulletPoints: [
        'Spearheaded key modules in DBS Bank\'s IBNextGen banking platform',
        'Developed multiple Micro-Frontend (MFE) components for banking features',
        'Payees, accounts, payments, fund transfers, and currency exchange modules',
        'Modular design, performance optimization, and seamless API integration'
      ],
      img: {
        src: '/placeholder-project-2.jpg',
        alt: 'DBS Bank IBNextGen Platform'
      },
      color: 'green',
      techStack: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Micro-Frontend Architecture', icon: '🏗️' },
        { name: 'Performance Optimization', icon: '⚡' }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'KBOCWW-CDMS Platform',
      shortDes: 'Labour Welfare Board Platform for Karnataka Government',
      des: 'Developed a scalable frontend web application from scratch for the Karnataka Building and Other Construction Workers Welfare Board. Delivered a user-friendly system for managing labour registrations, benefits, and schemes.',
      bulletPoints: [
        'Scalable frontend web application for Karnataka Government',
        'Labour registrations, benefits, and schemes management',
        'User-friendly interface for government officials',
        'Live portal: kbocwwb.karnataka.gov.in'
      ],
      img: {
        src: '/placeholder-project-3.jpg',
        alt: 'KBOCWW-CDMS Platform'
      },
      color: 'purple',
      techStack: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Material-UI', icon: '🎨' },
        { name: 'Government Portal', icon: '🏛️' }
      ],
      liveLink: 'https://kbocwwb.karnataka.gov.in',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Government Defence Application',
      shortDes: 'Android application and monitoring dashboard for defence use case',
      des: 'Designed and implemented an Android application and supporting libraries for a sensitive defence use case. Built a real-time monitoring dashboard to track in-app activity and system health.',
      bulletPoints: [
        'Android application for sensitive defence use case',
        'Real-time monitoring dashboard for system health',
        'Supporting libraries and system integration',
        'Awarded "Best Developer of the Year 2020"'
      ],
      img: {
        src: '/placeholder-project-4.jpg',
        alt: 'Government Defence Application'
      },
      color: 'red',
      techStack: [
        { name: 'Kotlin', icon: '🤖' },
        { name: 'VueJS', icon: '💚' },
        { name: 'Android Studio', icon: '🛠️' },
        { name: 'Real-time Monitoring', icon: '📡' }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'eKYC Mobile Application',
      shortDes: 'Digital eKYC app with Aadhaar verification and facial recognition',
      des: 'Created a digital eKYC app, now live on the Google Play Store. Developed reusable UI components for Aadhaar verification, bank linking, and facial recognition, integrating third-party services for real-time validation.',
      bulletPoints: [
        'Digital eKYC app live on Google Play Store',
        'Aadhaar verification and bank linking features',
        'Facial recognition and real-time validation',
        'Reusable UI components and third-party integration'
      ],
      img: {
        src: '/placeholder-project-5.jpg',
        alt: 'eKYC Mobile Application'
      },
      color: 'orange',
      techStack: [
        { name: 'React Native', icon: '📱' },
        { name: 'Aadhaar API', icon: '🆔' },
        { name: 'Facial Recognition', icon: '👁️' },
        { name: 'Google Play Store', icon: '📱' }
      ],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            FEATURED PROJECTS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance">
            Explore, experiment{' '}
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
              & say hello
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.shortDes}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-4">
                  {project.bulletPoints.slice(0, 3).map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${getColorClasses(project.color)}`} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      <span>{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  {project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-colorfull text-white rounded-lg hover:bg-colorfull/90 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-colorfull text-white rounded-lg hover:bg-colorfull/90 transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
