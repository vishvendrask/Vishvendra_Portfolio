"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, Github, Play, Eye, Code, Globe, Smartphone, Database, Cloud, Zap, X } from 'lucide-react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Floating 3D Elements for Project Cards
const ProjectCard3D = ({ position, color, size }: { position: [number, number, number], color: string, size: number }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.6}
          wireframe
        />
      </mesh>
    </Float>
  )
}

// Enhanced Project Card Component
interface Project {
  id: number
  title: string
  description: string
  type: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  images?: string[]
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      'React': <Code className="w-4 h-4" />,
      'Next.js': <Globe className="w-4 h-4" />,
      'Node.js': <Database className="w-4 h-4" />,
      'Mobile': <Smartphone className="w-4 h-4" />,
      'Cloud': <Cloud className="w-4 h-4" />,
      'AI/ML': <Zap className="w-4 h-4" />
    }
    return iconMap[tech] || <Code className="w-4 h-4" />
  }

  return (
    <>
      <motion.div
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-neon-blue/50 transition-all duration-500 shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl"
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ 
          y: -10,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <ProjectCard3D position={[0, 0, 0]} color="#00d4ff" size={0.3} />
            <ProjectCard3D position={[1, 0.5, 0]} color="#a855f7" size={0.2} />
            <ProjectCard3D position={[-0.5, -0.3, 0]} color="#ec4899" size={0.15} />
          </Canvas>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <motion.h3 
                className="text-xl font-bold project-title mb-2 group-hover:text-neon-blue transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="project-description text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Project Type Badge */}
            <motion.div
              className="px-3 py-1 rounded-full text-xs font-medium bg-neon-blue/20 text-neon-blue border border-neon-blue/30"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {project.type}
            </motion.div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                <motion.div
                  key={tech}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-glass-white/20 text-xs text-text-secondary border border-glass-border"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 212, 255, 0.1)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                >
                  {getTechIcon(tech)}
                  <span className="project-tech">{tech}</span>
                </motion.div>
              ))}
              {project.technologies.length > 4 && (
                <motion.div
                  className="px-2 py-1 rounded-lg bg-glass-white/20 text-xs text-text-secondary border border-glass-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  +{project.technologies.length - 4} more
                </motion.div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              View Details
            </motion.button>
            
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-glass-white/20 text-text-primary rounded-lg hover:bg-glass-white/30 transition-colors duration-300 border border-glass-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-glass-white/20 text-text-primary rounded-lg hover:bg-glass-white/30 transition-colors duration-300 border border-glass-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>

          {/* Hover Animation Elements */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto project-modal rounded-2xl p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-text-primary mb-2">{project.title}</h2>
                  <p className="text-text-secondary text-lg">{project.description}</p>
                </div>
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-glass-white/20 hover:bg-glass-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2 text-text-secondary"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-neon-blue rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-neon-blue/20 text-neon-blue text-sm border border-neon-blue/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Images/Video */}
              {project.images && project.images.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Project Screenshots</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image: string, index: number) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-glass-border"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Project Links */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
                
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-glass-white/20 text-text-primary rounded-lg hover:bg-glass-white/30 transition-colors duration-300 border border-glass-border"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.type === 'Web App').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.type === 'Mobile App').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.type === 'AI/ML').length },
    { id: 'other', name: 'Other', count: projects.filter(p => !['Web App', 'Mobile App', 'AI/ML'].includes(p.type)).length }
  ]

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.type.toLowerCase().includes(selectedCategory) ||
        project.technologies.some((tech: string) => 
          tech.toLowerCase().includes(selectedCategory)
        )
      ))
    }
  }, [selectedCategory])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-pink/20 rounded-full blur-2xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y, opacity }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold section-header mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p
            className="text-xl section-description max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore my latest work showcasing innovative solutions, cutting-edge technologies, 
            and creative problem-solving across various domains.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-neon-blue text-white shadow-neon-blue'
                  : 'bg-glass-white/20 text-text-secondary hover:bg-glass-white/30 border border-glass-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 rounded-full bg-white/20 text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>


      </div>
    </section>
  )
}

// Your real projects from your experience
const projects: Project[] = [
  {
    id: 1,
    title: "Google Test Data Automation Platform",
    description: "Led end-to-end development of Google's Test Data Automation Platform, handling millions of test cases with AI-powered optimization, real-time analytics, and role-based access control for Admin, Supervisor, Recruiter, and Proctor roles.",
    type: "Enterprise Platform",
    technologies: ["Angular 15+", "TypeScript", "RxJS", "SCSS", "BOQ Web Components", "Node.js", "Google BoQ Node Framework", "Express.js", "Google AutoAPI", "gRPC", "Google Spanner", "Google OnePlatform", "Cloud Build", "Git (Gerrit)", "CI/CD"],
    features: [
      "AI-powered test case optimization",
      "Role-based dashboard for test data workflows",
      "Advanced search, filter, and tagging system",
      "Automated data provisioning with scheduling",
      "Spanner-backed storage for high availability",
      "Audit logging for compliance"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 2,
    title: "DBS Bank – IBNextGen Banking Platform",
    description: "Spearheaded development of DBS Bank's next-generation digital banking experience, implementing Micro-Frontend architecture for features like payee management, fund transfers, account summaries, currency exchange, and payment scheduling.",
    type: "Financial Platform",
    technologies: ["React.js 17+", "Redux", "Redux-Saga", "Styled Components", "Material-UI", "Webpack 5", "Module Federation", "Node.js", "RESTful APIs", "GraphQL", "OAuth 2.0", "JWT", "Jenkins CI/CD", "Docker", "SonarQube"],
    features: [
      "Seamless real-time fund transfers",
      "Currency exchange with live FX rates",
      "Multi-level authentication for security",
      "Intuitive dashboard for monitoring",
      "Cross-device responsive UI",
      "Micro-Frontend architecture"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 3,
    title: "Labour Welfare Management System – KBOCWWB CDMS",
    description: "Developed a Construction Data Management System for Karnataka Building and Other Construction Workers' Welfare Board, digitalizing labour welfare schemes, construction site monitoring, and benefits disbursement.",
    type: "Government Platform",
    technologies: ["React.js", "Redux", "Bootstrap 4", "SCSS", "Axios", "Node.js", "Express.js", "REST APIs", "MySQL", "Sequelize ORM", "JWT", "Docker", "Jenkins", "GitLab CI/CD"],
    features: [
      "Worker registration and verification",
      "Benefits application and approval tracking",
      "Scheme-specific document uploads",
      "Reporting and analytics dashboard",
      "Admin portal for scheme management",
      "Payment gateway integration"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 4,
    title: "Confidential Government Defence Project",
    description: "Led Android app development for a high-security mobile application enabling communication, data sharing, and operational coordination, compliant with military-grade encryption standards.",
    type: "Defence Application",
    technologies: ["Android (Java/Kotlin)", "MVVM Architecture", "Node.js", "Express.js", "PostgreSQL", "End-to-end encryption", "SSL pinning", "Retrofit", "Glide", "Firebase Crashlytics", "Jenkins CI/CD"],
    features: [
      "Military-grade encryption for data",
      "Secure voice, text, and file sharing",
      "Real-time GPS location tracking",
      "Role-based access control",
      "Offline-first architecture",
      "Geofencing capabilities"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 5,
    title: "eKYC Mobile App",
    description: "Developed a mobile application enabling electronic Know Your Customer (eKYC) onboarding for banks and NBFCs, integrating face recognition, OCR, and Aadhaar-based verification.",
    type: "Mobile Application",
    technologies: ["Android (Kotlin)", "CameraX", "OCR (Tesseract)", "Node.js", "Express.js", "MongoDB", "AES encryption", "Retrofit", "Glide", "Firebase Push Notifications"],
    features: [
      "Aadhaar and PAN verification",
      "Face recognition and liveness detection",
      "OCR-based document scanning",
      "Digital signature capture",
      "Instant approval and onboarding",
      "Biometric authentication"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 6,
    title: "Zyime - Social Networking Platform",
    description: "Built a social networking platform for professionals to connect, share portfolios, and collaborate on projects, including authentication, profile creation, and feed system.",
    type: "Social Platform",
    technologies: ["React.js", "Redux", "Material-UI", "Node.js", "Express.js", "MongoDB", "JWT authentication", "Cloudinary", "Real-time chat"],
    features: [
      "User profiles with portfolio showcase",
      "News feed with likes and comments",
      "Real-time chat and notifications",
      "Image and video uploads",
      "Professional networking features",
      "Project collaboration tools"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 7,
    title: "CINEWS - Cinema News App",
    description: "Created a news aggregation app for cinema enthusiasts, curating updates, reviews, and trailers in multiple languages with personalized content recommendations.",
    type: "Mobile Application",
    technologies: ["Android (Java)", "PHP", "MySQL", "Retrofit", "Glide", "Push notifications"],
    features: [
      "Multi-language news feed",
      "Video trailer embedding",
      "Personalized recommendations",
      "Movie category pages with filters",
      "Breaking news notifications",
      "Cinema industry updates"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 8,
    title: "Housefull2020 - Movie Ticket Booking",
    description: "Developed a movie ticket booking app with integrated seat selection, payments, and show listings, featuring real-time seat availability and QR code ticket scanning.",
    type: "Mobile Application",
    technologies: ["Android (Java)", "SQLite", "PHP", "MySQL", "Payment gateway", "QR code generation"],
    features: [
      "Real-time seat availability",
      "Secure payment gateway integration",
      "QR code ticket scanning",
      "Show listings and schedules",
      "Seat selection interface",
      "Booking confirmation system"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 9,
    title: "Golden Palms - Hotel Booking Platform",
    description: "Built a hotel booking website with online reservation system and property management dashboard for seamless hotel management and customer booking experience.",
    type: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Online reservation system"],
    features: [
      "Online reservation system",
      "Property management dashboard",
      "Room availability tracking",
      "Customer booking management",
      "Payment processing",
      "Admin panel for hotels"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 10,
    title: "Momnhers - Maternity E-commerce",
    description: "Developed an e-commerce platform for maternity products with comprehensive product management, shopping cart, and secure checkout system.",
    type: "E-commerce Platform",
    technologies: ["HTML", "CSS", "AngularJS", "Node.js", "MongoDB", "E-commerce features"],
    features: [
      "Product catalog management",
      "Shopping cart functionality",
      "Secure checkout system",
      "User account management",
      "Order tracking",
      "Payment integration"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 11,
    title: "EnergyXchange - Renewable Energy Trading",
    description: "Created a renewable energy trading platform enabling businesses to buy and sell surplus energy credits with real-time market data and transaction management.",
    type: "Trading Platform",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Real-time data", "Trading algorithms"],
    features: [
      "Energy credit trading",
      "Real-time market data",
      "Transaction management",
      "Business account management",
      "Energy credit tracking",
      "Market analytics dashboard"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 12,
    title: "Om Birla Official Website",
    description: "Developed portfolio and campaign website for political leader Om Birla, showcasing biography, achievements, and news updates with responsive design.",
    type: "Portfolio Website",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive design", "Content management"],
    features: [
      "Biography and achievements",
      "News and updates section",
      "Campaign information",
      "Contact forms",
      "Responsive design",
      "Content management system"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  },
  {
    id: 13,
    title: "JK Cement CSR Project Portal",
    description: "Built a CSR project portal for JK Cement to track and report on community development initiatives with comprehensive project management and reporting tools.",
    type: "Corporate Portal",
    technologies: ["HTML", "CSS", "AngularJS", "Node.js", "Express.js", "MongoDB", "CSR tracking"],
    features: [
      "CSR project tracking",
      "Community development reporting",
      "Project management tools",
      "Impact assessment",
      "Reporting dashboard",
      "Stakeholder communication"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: []
  }
]

export default Projects
