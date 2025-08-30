"use client"

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowLeft, Play, Code, Users, TrendingUp, Globe } from 'lucide-react'

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const projects = [
    {
      id: 'google-test-data',
      title: 'Google Test Data Automation Platform',
      category: 'Enterprise',
      shortDescription: 'A comprehensive platform for managing and automating test data across Google&apos;s ecosystem, reducing test data setup time by 70%.',
      fullDescription: 'Built a sophisticated test data management system that handles complex data scenarios, automated provisioning, and intelligent data masking for Google&apos;s extensive testing requirements.',
      teamSize: '8 Developers',
      duration: '6 months',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      features: [
        'Automated test data provisioning and cleanup',
        'Intelligent data masking and anonymization',
        'Real-time data synchronization across environments',
        'Advanced search and filtering capabilities',
        'Comprehensive audit logging and compliance'
      ],
      challenges: [
        'Handling massive datasets across multiple environments',
        'Ensuring data consistency across distributed systems',
        'Implementing secure data masking for sensitive information',
        'Optimizing performance for real-time operations'
      ],
      solutions: [
        'Implemented microservices architecture with event-driven communication',
        'Used Redis for caching and real-time data synchronization',
        'Developed custom data masking algorithms with configurable rules',
        'Applied database optimization techniques and connection pooling'
      ],
      impact: 'Reduced test data setup time by 70%, improved test reliability by 45%, and enabled parallel testing across 10+ environments simultaneously.',
      role: 'Tech Lead & Full-Stack Developer',
      liveDemo: 'https://demo.google-test-data.com',
      sourceCode: 'https://github.com/google/test-data-platform'
    },
    {
      id: 'dbs-banking',
      title: 'DBS Digital Banking Platform',
      category: 'Banking',
      shortDescription: 'Modernized legacy banking systems with microservices architecture, improving customer satisfaction by 35% and reducing system downtime by 80%.',
      fullDescription: 'Led the digital transformation of DBS Bank&apos;s core banking systems, implementing modern microservices architecture, real-time fraud detection, and enhanced security measures.',
      teamSize: '12 Developers',
      duration: '8 months',
      technologies: ['Angular', 'Java', 'Oracle', 'Spring Boot', 'Redis', 'Kubernetes'],
      features: [
        'Real-time transaction processing and monitoring',
        'Advanced fraud detection using AI/ML algorithms',
        'Multi-factor authentication and security features',
        'Mobile-first responsive design',
        'Comprehensive reporting and analytics dashboard'
      ],
      challenges: [
        'Migrating from monolithic legacy systems',
        'Ensuring 99.99% uptime for critical banking services',
        'Implementing real-time fraud detection',
        'Maintaining compliance with banking regulations'
      ],
      solutions: [
        'Implemented gradual migration strategy with blue-green deployment',
        'Used circuit breaker pattern for fault tolerance',
        'Integrated machine learning models for fraud detection',
        'Applied comprehensive testing and monitoring strategies'
      ],
      impact: 'Improved customer satisfaction by 35%, reduced system downtime by 80%, and enabled processing of $2B+ daily transactions with enhanced security.',
      role: 'Senior Full-Stack Developer',
      liveDemo: 'https://demo.dbs-banking.com',
      sourceCode: 'https://github.com/dbs/digital-banking'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      category: 'E-commerce',
      shortDescription: 'Full-stack e-commerce solution with payment integration, inventory management, and advanced analytics, increasing client revenue by 25%.',
      fullDescription: 'Developed a comprehensive e-commerce platform that handles product management, order processing, payment integration, and advanced analytics for business insights.',
      teamSize: '6 Developers',
      duration: '4 months',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
      features: [
        'Advanced product catalog with search and filtering',
        'Secure payment processing with multiple gateways',
        'Real-time inventory management',
        'Customer analytics and reporting',
        'Mobile-responsive design and PWA capabilities'
      ],
      challenges: [
        'Handling high concurrent user traffic',
        'Ensuring secure payment processing',
        'Managing complex inventory operations',
        'Optimizing search and filtering performance'
      ],
      solutions: [
        'Implemented Redis caching for frequently accessed data',
        'Used JWT tokens and OAuth 2.0 for security',
        'Applied database indexing and query optimization',
        'Implemented Elasticsearch for advanced search capabilities'
      ],
      impact: 'Increased client revenue by 25%, improved page load times by 40%, and achieved 99.5% uptime during peak shopping seasons.',
      role: 'Full-Stack Developer',
      liveDemo: 'https://demo.ecommerce-platform.com',
      sourceCode: 'https://github.com/client/ecommerce-platform'
    },
    {
      id: 'mobile-delivery-app',
      title: 'Food Delivery Mobile App',
      category: 'Mobile',
      shortDescription: 'Cross-platform mobile app with real-time tracking, order management, and payment integration, successfully launched on App Store and Google Play.',
      fullDescription: 'Built a feature-rich food delivery application that provides real-time order tracking, multiple payment options, and seamless user experience across iOS and Android platforms.',
      teamSize: '4 Developers',
      duration: '5 months',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Google Maps API', 'Stripe'],
      features: [
        'Real-time order tracking with GPS integration',
        'Multiple payment methods and secure transactions',
        'Push notifications for order updates',
        'Restaurant ratings and reviews system',
        'Offline mode with data synchronization'
      ],
      challenges: [
        'Implementing real-time location tracking',
        'Handling offline functionality and data sync',
        'Optimizing app performance across devices',
        'Ensuring smooth payment processing'
      ],
      solutions: [
        'Used WebSocket connections for real-time updates',
        'Implemented local storage with conflict resolution',
        'Applied performance optimization techniques',
        'Integrated multiple payment gateways with fallbacks'
      ],
      impact: 'Successfully launched on both App Store and Google Play, achieved 4.5+ star ratings, and processed 1000+ orders daily within 3 months of launch.',
      role: 'Mobile Developer',
      liveDemo: 'https://demo.food-delivery-app.com',
      sourceCode: 'https://github.com/client/food-delivery-app'
    }
  ]

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-32 w-40 h-40 bg-neon-blue/10 rounded-full blur-2xl"
          animate={{ 
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-32 h-32 bg-neon-purple/10 rounded-full blur-xl"
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A showcase of my best work, demonstrating technical expertise, problem-solving skills, and commitment to delivering exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-t-xl flex items-center justify-center mb-4">
                <div className="text-6xl opacity-50">📱</div>
              </div>
              
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Users className="w-4 h-4" />
                    {project.teamSize}
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-glass-dark dark:bg-glass-white/20 rounded-lg text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-glass-dark dark:bg-glass-white/20 rounded-lg text-xs text-text-secondary">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>Duration: {project.duration}</span>
                  <span>Role: {project.role}</span>
                </div>
                
                {/* Click Indicator */}
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-neon-blue text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                    Click to view details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && selectedProjectData && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 text-neon-blue hover:text-neon-blue/80 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Projects
                  </button>
                  <div className="flex gap-2">
                    {selectedProjectData.liveDemo && (
                      <a
                        href={selectedProjectData.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                      >
                        <Play className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {selectedProjectData.sourceCode && (
                      <a
                        href={selectedProjectData.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon text-sm"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="w-full h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-8xl opacity-50">📱</div>
                </div>

                {/* Project Title and Category */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-text-primary mb-2">
                    {selectedProjectData.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full font-medium">
                      {selectedProjectData.category}
                    </span>
                    <span className="text-text-secondary">
                      Team: {selectedProjectData.teamSize}
                    </span>
                    <span className="text-text-secondary">
                      Duration: {selectedProjectData.duration}
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {selectedProjectData.fullDescription}
                </p>

                {/* Features & Technologies */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-neon-blue" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-neon-purple" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-neon-green" />
                      Key Challenges
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-text-secondary">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-neon-yellow" />
                      Solutions Implemented
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-neon-yellow rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-text-secondary">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact and Role */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-neon-pink" />
                      Project Impact
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {selectedProjectData.impact}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-neon-blue" />
                      My Role
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {selectedProjectData.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <div className="glass-card inline-block">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Want to see more?
            </h3>
            <p className="text-text-secondary mb-6">
              I have many more projects and can work on custom solutions for your needs. 
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/vishvendrask"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
              <a
                href="#contact"
                className="btn-neon"
              >
                <ExternalLink className="w-5 h-5" />
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
