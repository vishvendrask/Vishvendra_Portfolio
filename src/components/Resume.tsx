"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe, Calendar, Building2, Award, Code, TrendingUp } from 'lucide-react'

const Resume = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = {
    frontend: ['React', 'Angular', 'Vue.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Material-UI'],
    backend: ['Node.js', 'Java', 'Python', 'Spring Boot', 'Express.js', 'RESTful APIs', 'GraphQL'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Oracle'],
    mobile: ['React Native', 'Android (Kotlin)', 'iOS (Swift)', 'Flutter'],
    devops: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    other: ['Git', 'Agile/Scrum', 'Testing', 'Performance Optimization', 'Security', 'Microservices']
  }

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'IBM',
      duration: '2022 - Present',
      location: 'Bangalore, India',
      description: 'Leading development of enterprise applications and mentoring junior developers.',
      achievements: [
        'Led a team of 5 developers in building a customer portal that increased user engagement by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted technical training sessions'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'DBS Bank',
      duration: '2020 - 2022',
      location: 'Singapore (Remote)',
      description: 'Developed and maintained banking applications with focus on security and performance.',
      achievements: [
        'Developed secure banking APIs handling $1M+ daily transactions',
        'Implemented OAuth 2.0 authentication for mobile banking app',
        'Optimized database queries improving response time by 50%'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Tech Solutions Inc.',
      duration: '2018 - 2020',
      location: 'Jaipur, India',
      description: 'Built web applications and mobile apps for various clients across different industries.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Built cross-platform mobile apps for iOS and Android',
        'Implemented responsive web designs for e-commerce platforms'
      ]
    }
  ]

  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Rajasthan Technical University',
    duration: '2013 - 2017',
    location: 'Kota, Rajasthan, India',
    gpa: '8.5/10',
    relevantCourses: ['Data Structures & Algorithms', 'Database Management Systems', 'Web Technologies', 'Software Engineering']
  }

  const projects = [
    {
      title: 'Google Test Data Automation Platform',
      description: 'Enterprise-scale platform for managing and automating test data across Google&apos;s ecosystem',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      impact: 'Reduced test data setup time by 70%, improved test reliability by 45%'
    },
    {
      title: 'DBS Digital Banking Platform',
      description: 'Modernized legacy banking systems with microservices architecture',
      technologies: ['Angular', 'Java', 'Oracle', 'Spring Boot', 'Redis', 'Kubernetes'],
      impact: 'Improved customer satisfaction by 35%, reduced system downtime by 80%'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
      impact: 'Increased client revenue by 25%, improved page load times by 40%'
    }
  ]

  return (
    <section id="resume" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-background-tertiary to-background-primary" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-2xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-32 h-32 bg-neon-purple/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
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
            Professional <span className="text-gradient">Resume</span>
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A comprehensive overview of my professional journey, skills, and achievements.
          </motion.p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Download className="w-6 h-6" />
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* Resume Content */}
        <div className="glass-card max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Vishvendra Singh Khangarot
            </h1>
            <p className="text-2xl text-neon-blue font-semibold mb-6">
              Senior Full-Stack Developer
            </p>
            <p className="text-text-secondary text-lg mb-6 max-w-3xl mx-auto">
              Passionate developer with 7+ years of experience delivering high-performance web and mobile applications. 
              Specialized in React, Angular, Node.js, and mobile development with a proven track record of leading 
              teams and delivering complex projects for global clients.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-text-secondary">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-neon-blue" />
                <a href="mailto:vishvendrask@gmail.com" className="hover:text-neon-blue transition-colors">
                  vishvendrask@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-neon-green" />
                <a href="tel:+919876543210" className="hover:text-neon-green transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-neon-purple" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://linkedin.com/in/vishvendrask"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center hover:bg-neon-blue/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-neon-blue" />
              </a>
              <a
                href="https://github.com/vishvendrask"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neon-purple/20 rounded-lg flex items-center justify-center hover:bg-neon-purple/30 transition-colors"
              >
                <Github className="w-5 h-5 text-neon-purple" />
              </a>
              <a
                href="https://vishvendrask.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center hover:bg-neon-green/30 transition-colors"
              >
                <Globe className="w-5 h-5 text-neon-green" />
              </a>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-neon-blue" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold text-text-primary capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-glass-dark dark:bg-glass-white/10 rounded-lg text-sm text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-neon-blue" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-neon-blue pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-neon-blue font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-text-secondary mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-neon-blue" />
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {education.degree}
                </h3>
                <p className="text-neon-blue font-semibold mb-2">
                  {education.institution}
                </p>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {education.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </span>
                </div>
                <p className="text-text-secondary mb-3">
                  GPA: {education.gpa}
                </p>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-glass-dark dark:bg-glass-white/10 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-1">
                      AWS Certified Developer Associate
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Amazon Web Services • 2023
                    </p>
                  </div>
                  <div className="p-4 bg-glass-dark dark:bg-glass-white/10 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-1">
                      Google Cloud Professional Developer
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Google Cloud • 2022
                    </p>
                  </div>
                  <div className="p-4 bg-glass-dark dark:bg-glass-white/10 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-1">
                      MongoDB Certified Developer
                    </h4>
                    <p className="text-text-secondary text-sm">
                      MongoDB University • 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Projects */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-neon-blue" />
              Key Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 bg-glass-dark dark:bg-glass-white/10 rounded-xl">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-neon-green font-medium">
                    Impact: {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.8 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed max-w-4xl mx-auto">
              &quot;I am passionate about creating innovative digital solutions that solve real-world problems. 
              With expertise in both frontend and backend technologies, I enjoy building scalable applications 
              and mentoring team members. I believe in continuous learning and staying updated with the latest 
              industry trends and best practices.&quot;
            </p>
          </motion.div>
        </div>

        {/* Additional Download Options */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 2.0 }}
        >
          <div className="glass-card inline-block">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Need a different format?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download
                className="btn-primary"
              >
                <Download className="w-5 h-5" />
                PDF Version
              </a>
              <a
                href="/resume.docx"
                download
                className="btn-secondary"
              >
                <Download className="w-5 h-5" />
                Word Version
              </a>
              <a
                href="#contact"
                className="btn-neon"
              >
                <Mail className="w-5 h-5" />
                Request Custom Format
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
