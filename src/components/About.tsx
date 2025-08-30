"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Search, User, Award, BookOpen, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

// Added TypeScript Interfaces
interface PersonalContent {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  website: string
}

interface EducationContent {
  degree: string
  institution: string
  duration: string
  gpa: string
}

interface AwardsContent {
  awards: string[]
  certifications: string[]
}

interface InterestsContent {
  hobbies: string[]
  languages: string[]
}

type SectionContent = PersonalContent | EducationContent | AwardsContent | InterestsContent

interface AboutSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  content: SectionContent
}

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [searchQuery, setSearchQuery] = useState('')

  const aboutSections: AboutSection[] = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      content: {
        email: 'vishvendrask@gmail.com',
        phone: '+91 98765 43210',
        location: 'Jaipur, Rajasthan, India',
        linkedin: 'linkedin.com/in/vishvendrask',
        github: 'github.com/vishvendrask',
        website: 'vishvendrask.dev'
      } as PersonalContent
    },
    {
      id: 'education',
      title: 'Education & Certifications',
      icon: BookOpen,
      content: {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'Rajasthan Technical University',
        duration: '2013 - 2017',
        gpa: '8.5/10'
      } as EducationContent
    },
    {
      id: 'awards',
      title: 'Awards & Recognition',
      icon: Award,
      content: {
        awards: [
          'Best Developer Award - IBM (2023)',
          'Excellence in Innovation - DBS Bank (2022)',
          'Top Performer - Tech Solutions Inc. (2021)',
          'Code Quality Champion - Previous Company (2020)'
        ],
        certifications: [
          'AWS Certified Developer Associate',
          'Google Cloud Professional Developer',
          'MongoDB Certified Developer'
        ]
      } as AwardsContent
    },
    {
      id: 'interests',
      title: 'Interests & Hobbies',
      icon: User,
      content: {
        hobbies: [
          'Open Source Contribution',
          'Tech Blogging',
          'Mentoring Junior Developers',
          'Participating in Hackathons'
        ],
        languages: [
          'English (Fluent)',
          'Hindi (Native)',
          'Rajasthani (Native)'
        ]
      } as InterestsContent
    }
  ]

  const filteredSections = aboutSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    Object.values(section.content).some(value => 
      Array.isArray(value) 
        ? value.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
        : value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  // Added Type Guards
  const isPersonalContent = (content: SectionContent): content is PersonalContent => {
    return 'email' in content && 'phone' in content
  }

  const isEducationContent = (content: SectionContent): content is EducationContent => {
    return 'degree' in content && 'institution' in content
  }

  const isAwardsContent = (content: SectionContent): content is AwardsContent => {
    return 'awards' in content
  }

  const isInterestsContent = (content: SectionContent): content is InterestsContent => {
    return 'hobbies' in content
  }

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-background-tertiary to-background-primary" />
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 opacity-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#a855f7" wireframe opacity={0.3} transparent />
          </Sphere>
        </Canvas>
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Discover my journey, expertise, and passion for creating innovative digital solutions
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search about me..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-glass-white dark:bg-glass-dark border border-glass-border dark:border-glass-borderDark rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* About Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="glass-card group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {section.title}
                  </h3>
                  
                  {section.id === 'personal' && isPersonalContent(section.content) && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Mail className="w-4 h-4" />
                        <span>{section.content.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Phone className="w-4 h-4" />
                        <span>{section.content.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <MapPin className="w-4 h-4" />
                        <span>{section.content.location}</span>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <a href={`https://${section.content.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:text-neon-blue/80 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`https://${section.content.github}`} target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:text-neon-blue/80 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {section.id === 'education' && isEducationContent(section.content) && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-neon-blue">{section.content.degree}</h4>
                        <p className="text-text-secondary">{section.content.institution}</p>
                        <p className="text-text-secondary text-sm">{section.content.duration}</p>
                        <p className="text-text-secondary text-sm">GPA: {section.content.gpa}</p>
                      </div>
                    </div>
                  )}

                  {section.id === 'awards' && isAwardsContent(section.content) && (
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-text-primary mb-2">Awards:</h5>
                        <ul className="space-y-1">
                          {section.content.awards.map((award, idx) => (
                            <li key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                              <div className="w-2 h-2 bg-neon-yellow rounded-full"></div>
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-text-primary mb-2">Certifications:</h5>
                        <ul className="space-y-1">
                          {section.content.certifications.map((cert, idx) => (
                            <li key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                              <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {section.id === 'interests' && isInterestsContent(section.content) && (
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-text-primary mb-2">Hobbies:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {section.content.hobbies.map((hobby, idx) => (
                            <div key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                              <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                              {hobby}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-text-primary mb-2">Languages:</h5>
                        <div className="flex flex-wrap gap-2">
                          {section.content.languages.map((language, idx) => (
                            <span key={idx} className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded text-xs">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <div className="glass-card inline-block">
            <p className="text-text-secondary mb-4">
              &quot;I believe in continuous learning and pushing the boundaries of what&apos;s possible in web and mobile development.&quot;
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
              <span>Available for:</span>
              <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full">Full-time</span>
              <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full">Freelance</span>
              <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded-full">Consulting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
