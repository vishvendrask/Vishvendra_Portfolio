"use client"

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Building2, Calendar, MapPin, ExternalLink, Award, Code, TrendingUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const experiences = [
    {
      id: 'senior-developer',
      title: 'Senior Full-Stack Developer',
      company: 'IBM',
      duration: '2022 - Present',
      location: 'Bangalore, India',
      logo: '💼',
      description: 'Leading development of enterprise applications and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      achievements: [
        'Led a team of 5 developers in building a customer portal that increased user engagement by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted technical training sessions'
      ],
      projects: [
        'Customer Management Portal - React + Node.js application serving 10,000+ users',
        'API Gateway Service - Microservices architecture with 99.9% uptime',
        'Data Analytics Dashboard - Real-time analytics with React and D3.js'
      ],
      highlights: [
        'Reduced application load time by 35% through optimization',
        'Implemented automated testing achieving 90% code coverage',
        'Received &quot;Excellence in Innovation&quot; award for Q3 2023'
      ]
    },
    {
      id: 'full-stack-developer',
      title: 'Full-Stack Developer',
      company: 'DBS Bank',
      duration: '2020 - 2022',
      location: 'Singapore (Remote)',
      logo: '🏦',
      description: 'Developed and maintained banking applications with focus on security and performance.',
      technologies: ['Angular', 'Java', 'Oracle', 'Spring Boot', 'Kubernetes'],
      achievements: [
        'Developed secure banking APIs handling $1M+ daily transactions',
        'Implemented OAuth 2.0 authentication for mobile banking app',
        'Optimized database queries improving response time by 50%'
      ],
      projects: [
        'Mobile Banking App - Angular + Java backend with 50,000+ active users',
        'Payment Gateway - RESTful API with real-time transaction processing',
        'Customer Dashboard - Angular dashboard with real-time data updates'
      ],
      highlights: [
        'Achieved 99.99% uptime for critical banking services',
        'Reduced security vulnerabilities by 80% through code reviews',
        'Received &quot;Best Developer&quot; recognition for 2021'
      ]
    },
    {
      id: 'software-developer',
      title: 'Software Developer',
      company: 'Tech Solutions Inc.',
      duration: '2018 - 2020',
      location: 'Jaipur, India',
      logo: '💻',
      description: 'Built web applications and mobile apps for various clients across different industries.',
      technologies: ['React Native', 'PHP', 'MySQL', 'Laravel', 'Firebase'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Built cross-platform mobile apps for iOS and Android',
        'Implemented responsive web designs for e-commerce platforms'
      ],
      projects: [
        'E-commerce Platform - PHP + MySQL with React frontend',
        'Food Delivery App - React Native with real-time tracking',
        'Inventory Management System - Laravel + Vue.js application'
      ],
      highlights: [
        'Maintained 100% client satisfaction rate',
        'Reduced development time by 30% through reusable components',
        'Successfully launched 3 apps on App Store and Google Play'
      ]
    },
    {
      id: 'junior-developer',
      title: 'Junior Developer',
      company: 'StartupXYZ',
      duration: '2017 - 2018',
      location: 'Mumbai, India',
      logo: '🚀',
      description: 'Started my career building web applications and learning modern development practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
      achievements: [
        'Built responsive websites for 10+ startup clients',
        'Learned modern development workflows and version control',
        'Collaborated with designers to implement pixel-perfect designs'
      ],
      projects: [
        'Company Website - HTML/CSS with JavaScript animations',
        'Admin Dashboard - PHP + MySQL backend with jQuery frontend',
        'Landing Pages - Multiple landing pages for marketing campaigns'
      ],
      highlights: [
        'Gained hands-on experience with real client projects',
        'Learned agile development methodologies',
        'Built foundation for full-stack development skills'
      ]
    }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-background-secondary dark:via-background-tertiary dark:to-background-primary transition-all duration-500" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 right-32 w-40 h-40 bg-neon-purple/10 rounded-full blur-2xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-32 h-32 bg-neon-green/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold section-header mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p
            className="text-xl section-description max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A journey through my professional experience, achievements, and growth in the tech industry.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-neon-blue to-transparent" />
              )}
              
              <div className="flex gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center text-2xl shadow-neon-blue">
                    {exp.logo}
                  </div>
                </div>
                
                {/* Experience Content */}
                <div className="flex-1">
                  <motion.div
                    className="glass-card cursor-pointer group"
                    onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold section-header group-hover:text-neon-blue transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-neon-blue font-semibold">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 section-description">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 section-description">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="section-description mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Expand Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-neon-blue text-sm font-medium">
                        <TrendingUp className="w-4 h-4" />
                        Click to see details
                      </div>
                      <motion.div
                        animate={{ rotate: expandedCard === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-5 h-5 text-text-secondary" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedCard === exp.id && (
                      <motion.div
                        className="mt-4 glass-card"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold section-header mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-neon-yellow" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-neon-yellow rounded-full mt-2 flex-shrink-0"></span>
                                <span className="section-description">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Projects */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold section-header mb-3 flex items-center gap-2">
                            <Code className="w-5 h-5 text-neon-blue" />
                            Notable Projects
                          </h4>
                          <ul className="space-y-2">
                            {exp.projects.map((project, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                                <span className="section-description">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Highlights */}
                        <div>
                          <h4 className="text-lg font-semibold section-header mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-neon-green" />
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></span>
                                <span className="section-description">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <div className="glass-card inline-block max-w-4xl">
            <h3 className="text-2xl font-bold section-header mb-4">
              Experience Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">7+</div>
                <div className="section-description">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-purple mb-2">100+</div>
                <div className="section-description">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-green mb-2">15+</div>
                <div className="section-description">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-pink mb-2">4</div>
                <div className="section-description">Companies</div>
              </div>
            </div>
            <div className="p-4 bg-glass-dark dark:bg-glass-white/10 rounded-xl">
              <p className="section-description text-sm leading-relaxed">
                &quot;Throughout my career, I&apos;ve had the privilege of working with amazing teams and 
                challenging projects that have shaped me into the developer I am today. I believe in 
                continuous learning and pushing the boundaries of what&apos;s possible.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
