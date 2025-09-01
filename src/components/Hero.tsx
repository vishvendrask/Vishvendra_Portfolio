"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Zap, Code, Globe } from 'lucide-react'
import * as THREE from 'three'
import TechnologyLogos from './TechnologyLogos'


// Floating Tech Icons Component
const FloatingTechIcons = () => {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const icons = [
    { icon: <Code className="w-6 h-6 text-neon-blue" />, position: [2, 1, 0] },
    { icon: <Globe className="w-6 h-6 text-neon-purple" />, position: [-2, 0.5, 1] },
    { icon: <Zap className="w-6 h-6 text-neon-yellow" />, position: [1, -1, 2] },
    { icon: <Sparkles className="w-6 h-6 text-neon-pink" />, position: [-1, 1.5, -1] },
  ]

  return (
    <group ref={groupRef}>
      {icons.map((item, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={item.position as [number, number, number]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="transparent" />
          </mesh>
        </Float>
      ))}
    </group>
  )
}



const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/vishvendrask", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vishvendrask", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vishvendrask@gmail.com", label: "Email" },
  ]

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background-primary dark:via-background-secondary dark:to-background-tertiary transition-all duration-500"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20 transition-all duration-300"></div>
        

      </div>

      {/* Enhanced Background for PNG Integration */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Matrix Background */}
        <div className="absolute inset-0 matrix-bg opacity-10 transition-all duration-300"></div>
        
        {/* Gradient Background for Better PNG Integration */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5"></div>
        
        {/* Floating Background Particles */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -200]).get(),
          }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-neon-blue/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.15}s`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
        
        {/* Subtle Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            y: useTransform(scrollYProgress, [0, 1], [0, -100]).get(),
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center lg:text-left"
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-8">
            {/* Subtitle */}
            <motion.p
              className="text-neon-blue font-mono text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to my digital universe
            </motion.p>

            {/* Main title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Vishvendra Singh</span>
              <br />
              <span className="section-header">Khangarot</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              className="text-xl sm:text-2xl section-subtitle font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Senior Full-Stack Developer & Tech Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg section-description leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Crafting digital experiences with cutting-edge technologies. 
              From concept to deployment, I bring ideas to life with clean code, 
              innovative design, and seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                View My Work
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-glass hover:bg-glass-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-text-secondary group-hover:text-neon-blue transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Hero Image with 3D Scene */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Hero Image with Scroll Morphing */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -50]).get(),
                scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]).get(),
                rotateX: useTransform(scrollYProgress, [0, 1], [0, 15]).get(),
                rotateY: useTransform(scrollYProgress, [0, 1], [0, -10]).get(),
              }}
            >
              <motion.img
                src="/hero_img.png"
                alt="Vishvendra Singh Khangarot - Full Stack Developer"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  filter: useTransform(scrollYProgress, [0, 1], [
                    "brightness(1) contrast(1) saturate(1)",
                    "brightness(1.1) contrast(1.05) saturate(1.1)"
                  ]).get(),
                }}
              />
            </motion.div>
            
            {/* Subtle 3D Elements Over Image */}
            <div className="absolute inset-0 pointer-events-none">
              <Canvas
                camera={{ position: [0, 0, 4], fov: 60 }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.2} />
                <pointLight position={[3, 3, 3]} intensity={0.5} color="#00d4ff" />
                <pointLight position={[-3, -3, -3]} intensity={0.3} color="#a855f7" />
                {/* Technology Logos - Uncomment when ready */}
                {/* <TechnologyLogos /> */}
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.2}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
            
            {/* Subtle Floating Elements */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -80]).get(),
              }}
            >
              {/* Floating Code Elements - More Subtle */}
              <motion.div
                className="absolute top-8 right-8 text-neon-blue/40 font-mono text-xs"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.6], [0, 0.6]).get(),
                  x: useTransform(scrollYProgress, [0, 1], [30, 0]).get(),
                }}
              >
                &lt;code&gt;
              </motion.div>
              
              <motion.div
                className="absolute bottom-16 left-8 text-neon-purple/40 font-mono text-xs"
                style={{
                  opacity: useTransform(scrollYProgress, [0.4, 0.9], [0, 0.6]).get(),
                  x: useTransform(scrollYProgress, [0.4, 1], [-30, 0]).get(),
                }}
              >
                {`{...props}`}
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 right-16 text-neon-pink/40 font-mono text-xs"
                style={{
                  opacity: useTransform(scrollYProgress, [0.6, 1], [0, 0.6]).get(),
                  y: useTransform(scrollYProgress, [0.6, 1], [20, 0]).get(),
                }}
              >
                npm start
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-text-secondary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-mono">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive cursor effect */}
      <motion.div
        className="fixed w-4 h-4 bg-neon-blue rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </section>
  )
}

export default Hero
