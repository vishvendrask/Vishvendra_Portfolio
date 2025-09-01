"use client"

import { motion } from 'framer-motion'
import { 
  SiReact, SiAngular, SiVuedotjs, SiTypescript, SiJavascript, 
  SiNodedotjs, SiPython, SiSpring, SiExpress, SiMongodb, 
  SiPostgresql, SiMysql, SiRedis, SiFirebase, SiAmazon, 
  SiGooglecloud, SiDocker, SiKubernetes, SiGit, SiFlutter,
  SiAndroid, SiSwift, SiTailwindcss, SiMaterialdesign
} from 'react-icons/si'

const TechnologyBubbles = () => {
  const technologies = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiSpring, name: 'Spring', color: '#6DB33F' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
    { icon: SiGooglecloud, name: 'Google Cloud', color: '#4285F4' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
    { icon: SiAndroid, name: 'React Native', color: '#61DAFB' },
    { icon: SiAndroid, name: 'Android', color: '#3DDC84' },
    { icon: SiSwift, name: 'Swift', color: '#FA7343' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiMaterialdesign, name: 'Material-UI', color: '#0081CB' }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * 2 * Math.PI
        const radius = 300 + Math.random() * 100
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        
        return (
          <motion.div
            key={tech.name}
            className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              x: [0, Math.cos(angle + 0.1) * radius - x, 0],
              y: [0, Math.sin(angle + 0.1) * radius - y, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
            whileHover={{
              scale: 1.2,
              zIndex: 10,
            }}
          >
            <tech.icon 
              className="w-6 h-6" 
              style={{ color: tech.color }}
              title={tech.name}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default TechnologyBubbles
