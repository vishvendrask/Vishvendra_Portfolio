"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Smartphone, Cloud, Cpu, Palette } from 'lucide-react'

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'neon-blue',
      glow: 'glow-blue',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 92 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Cpu,
      color: 'neon-purple',
      glow: 'glow-purple',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Java', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Express.js', level: 95 },
        { name: 'RESTful APIs', level: 93 }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: Database,
      color: 'neon-green',
      glow: 'glow-green',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Firebase', level: 88 },
        { name: 'Oracle', level: 80 }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'neon-pink',
      glow: 'glow-pink',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Android (Kotlin)', level: 85 },
        { name: 'iOS (Swift)', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'Mobile UI/UX', level: 90 },
        { name: 'App Store Deployment', level: 85 }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'neon-yellow',
      glow: 'glow-green',
      skills: [
        { name: 'AWS', level: 88 },
        { name: 'Google Cloud', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 82 },
        { name: 'CI/CD', level: 88 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
      id: 'other',
      title: 'Other Technologies',
      icon: Palette,
      color: 'neon-red',
      glow: 'glow-pink',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Testing', level: 85 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Security', level: 85 },
        { name: 'Microservices', level: 88 }
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background-primary dark:via-background-secondary dark:to-background-tertiary transition-all duration-500" />
      <div className="absolute inset-0 matrix-bg opacity-5" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl"
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-24 h-24 bg-neon-purple/10 rounded-full blur-lg"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-60 left-1/4 w-20 h-20 bg-neon-green/10 rounded-full blur-lg"
          animate={{ 
            x: [0, 40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold section-header mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p
            className="text-xl section-description max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A comprehensive showcase of my technical expertise across various domains, 
            demonstrating proficiency in modern web and mobile development technologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="glass-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br from-${category.color} to-${category.color}/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${category.glow}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold section-header group-hover:text-neon-blue transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="section-description font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-${category.color} font-bold text-sm`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-glass-dark dark:bg-glass-white/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <div className="glass-card inline-block max-w-4xl">
            <h3 className="text-2xl font-bold section-header mb-4">
              Skills Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">15+</div>
                <div className="section-description">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-purple mb-2">6</div>
                <div className="section-description">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-green mb-2">90%</div>
                <div className="section-description">Average Proficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-pink mb-2">7+</div>
                <div className="section-description">Years Experience</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-glass-dark dark:bg-glass-white/10 rounded-xl">
              <p className="section-description text-sm leading-relaxed">
                &quot;I continuously update my skill set to stay current with the latest technologies 
                and best practices. My expertise spans from frontend frameworks to backend systems, 
                mobile development, and cloud infrastructure.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animated Skill Icons */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <div className="flex space-x-8 text-4xl text-text-secondary/20 justify-center">
            {['React', 'Angular', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
              <motion.div
                key={tech}
                className="font-mono"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
