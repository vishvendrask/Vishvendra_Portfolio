"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Play, Code, Smartphone, Globe } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box } from '@react-three/drei'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const features = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end solutions from concept to deployment',
      icon: Code
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform iOS and Android applications',
      icon: Smartphone
    },
    {
      title: 'Web Applications',
      description: 'Modern, responsive, and performant web solutions',
      icon: Globe
    }
  ]

  return (
    <section 
      id="home" 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary" />
      
      {/* Matrix Background */}
      <div className="absolute inset-0 matrix-bg opacity-10" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 bg-neon-purple/20 rounded-full blur-lg"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-28 h-28 bg-neon-green/20 rounded-full blur-lg"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D Scene */}
      <div className="absolute right-0 top-0 w-full h-full lg:w-1/2 lg:h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
          <group>
            <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
              <meshStandardMaterial 
                color="#00d4ff" 
                wireframe 
                opacity={0.3} 
                transparent 
              />
            </Sphere>
            <Box args={[0.8, 0.8, 0.8]} position={[2, 1, 0]}>
              <meshStandardMaterial 
                color="#a855f7" 
                wireframe 
                opacity={0.3} 
                transparent 
              />
            </Box>
            <Box args={[0.6, 0.6, 0.6]} position={[-1.5, -1, 1]}>
              <meshStandardMaterial 
                color="#ec4899" 
                wireframe 
                opacity={0.3} 
                transparent 
              />
            </Box>
          </group>
        </Canvas>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center lg:text-left"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-8">
            {/* Subtitle */}
            <motion.p
              className="text-lg text-neon-blue font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to the future of development
            </motion.p>
            
            {/* Main Title */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block text-text-primary">
                Vishvendra Singh
              </span>
              <span className="block text-gradient mt-2">
                Khangarot
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className="text-xl text-text-secondary max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Senior Full-Stack Developer with 7+ years of experience delivering 
              high-performance web and mobile applications for global clients including 
              Google and DBS Bank. Passionate about creating innovative digital solutions 
              that drive business growth.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-neon group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Let&apos;s Talk
              </motion.a>
            </motion.div>
            
            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-card text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.0 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <feature.icon className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                  <h3 className="font-semibold text-text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Mobile 3D Scene */}
          <div className="lg:hidden w-full h-64">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#00d4ff" wireframe opacity={0.3} transparent />
              </Sphere>
            </Canvas>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
