import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'IBM India Pvt Ltd',
      title: 'Senior System Engineer',
      location: 'Bangalore',
      duration: 'February 2022 – Present',
      project: 'Team Lead - Google (Test Data Automation Project)',
      projectDuration: 'December 2023 - Present',
      achievements: [
        'Leading end-to-end development for Google\'s Test Data Automation project, overseeing both frontend and backend components.',
        'Building seamless, high-performance APIs using Angular and Google\'s internal Boq Node framework.',
        'Ensuring an intuitive and efficient user experience across the Test Data Management web application through robust architecture and clean UI implementation.'
      ],
      technologies: ['Angular', 'Node.js', 'Google Boq Framework', 'Test Data Management'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'DBS Bank (IBNextGen Banking Platform)',
      title: 'Senior React.js Developer',
      location: 'Remote',
      duration: 'February 2022 – December 2023',
      project: 'IBNextGen Banking Platform',
      achievements: [
        'Spearheaded key modules in DBS Bank\'s IBNextGen banking platform using React.js and Redux.',
        'Developed and maintained multiple Micro-Frontend (MFE) components for features like payees, accounts, payments, fund transfers, and currency exchange.',
        'Focused on modular design, performance optimization, and seamless integration with backend APIs.'
      ],
      technologies: ['React.js', 'Redux', 'Micro-Frontend Architecture', 'Performance Optimization'],
      color: 'from-green-500 to-green-600'
    },
    {
      company: 'Globals ITES Private Limited',
      title: 'Senior Software Developer',
      location: 'Bangalore',
      duration: 'June 2020 - February 2022',
      project: 'Multiple Government & Defence Projects',
      achievements: [
        'Developed scalable frontend web application for Karnataka Building and Other Construction Workers Welfare Board (KBOCWW-CDMS).',
        'Designed and implemented Android application and supporting libraries for sensitive defence use case with real-time monitoring dashboard.',
        'Created digital eKYC mobile application with Aadhaar verification, bank linking, and facial recognition features.',
        'Awarded "Best Developer of the Year 2020" for exceptional contributions to government projects.'
      ],
      technologies: ['React.js', 'Redux', 'Material-UI', 'Kotlin', 'VueJS', 'React Native'],
      color: 'from-purple-500 to-purple-600',
      award: 'Best Developer of the Year 2020'
    },
    {
      company: 'Adverscribe Ad Solutions Pvt. Ltd.',
      title: 'Associate Developer',
      location: 'Bangalore',
      duration: 'August 2019 - April 2020',
      project: 'Full-Stack Web & Mobile Solutions',
      achievements: [
        'Contributed to multiple full-stack projects delivering web and mobile solutions across various industries.',
        'Developed real-time data management system for educational institutions with React.js admin panel.',
        'Built cinema news mobile app with media uploads and user interaction features.',
        'Created resort booking mobile app with integrated React.js admin panel.',
        'Developed e-commerce platform for maternity and baby products.'
      ],
      technologies: ['Android', 'PHP', 'React.js', 'React Native'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      company: 'EnergyXchange',
      title: 'Frontend Developer / React.js Developer',
      location: 'Chicago (Remote), Bangalore',
      duration: 'September 2018 - August 2019',
      project: 'EnergyXchange Platform',
      achievements: [
        'Developed and maintained the frontend architecture of the EnergyXchange platform.',
        'Implemented new features and enhanced UI/UX for a system managing electricity, renewable energy, and non-commodity services for businesses.',
        'Collaborated with cross-functional teams to ensure platform responsiveness and performance.'
      ],
      technologies: ['React.js', 'Frontend Architecture', 'UI/UX Enhancement'],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            WORK EXPERIENCE
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance">
            My{' '}
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
              Journey
            </span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}

              <div className="relative flex gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {exp.company.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Company & Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-colorfull">
                        {exp.title}
                      </p>
                    </div>
                    
                    {/* Award Badge */}
                    {exp.award && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                        <Award className="w-4 h-4" />
                        {exp.award}
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {exp.project}
                    </h4>
                  </div>

                  {/* Location & Duration */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    {exp.projectDuration && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Project: {exp.projectDuration}
                      </div>
                    )}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-colorfull rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
