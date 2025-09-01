"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroLoader from '@/components/IntroLoader'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

import { usePerformance } from '@/hooks/usePerformance'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const { isLoaded: isPageLoaded } = usePerformance('HomePage')

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Add smooth scroll behavior to all internal links
  useEffect(() => {
    const handleInternalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.hash && link.hostname === window.location.hostname) {
        e.preventDefault()
        const sectionId = link.hash.substring(1)
        scrollToSection(sectionId)
      }
    }

    document.addEventListener('click', handleInternalLinkClick)
    return () => document.removeEventListener('click', handleInternalLinkClick)
  }, [])

  // Add scroll progress indicator
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      // Update CSS custom property for scroll progress
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Navigate sections with arrow keys
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact']
        const currentSection = getCurrentSection()
        const currentIndex = sections.indexOf(currentSection)
        const nextSection = sections[Math.min(currentIndex + 1, sections.length - 1)]
        scrollToSection(nextSection)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact']
        const currentSection = getCurrentSection()
        const currentIndex = sections.indexOf(currentSection)
        const prevSection = sections[Math.max(currentIndex - 1, 0)]
        scrollToSection(prevSection)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Helper function to get current section
  const getCurrentSection = () => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact']
    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          return sectionId
        }
      }
    }
    return 'home'
  }

  // Add intersection observer for performance optimization
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-theme-primary text-theme-primary overflow-x-hidden transition-colors duration-300">


      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-theme-secondary z-50 transition-colors duration-300">
        <div 
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transition-all duration-300 ease-out"
          style={{ width: 'var(--scroll-progress, 0%)' }}
        />
      </div>

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <IntroLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Header */}
            <Header />

            {/* Main Content Sections */}
            <div className="relative">
              {/* Hero Section */}
              <Hero />

              {/* About Section */}
              <About />

              {/* Skills Section */}
              <Skills />

              {/* Experience Section */}
              <Experience />

              {/* Projects Section */}
              <Projects />

              {/* Resume Section */}
              <Resume />

              {/* Contact Section */}
              <Contact />

              {/* Footer */}
              <Footer />
            </div>

            {/* ChatBot */}
            <ChatBot />

            {/* Back to Top Button */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="fixed bottom-8 right-8 p-4 bg-neon-blue text-white rounded-full shadow-neon-blue z-40 hover:bg-neon-blue/80 transition-all duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </motion.button>

            {/* Performance Indicator (Development Only) */}
            {/* {process.env.NODE_ENV === 'development' && (
              <div className="fixed top-20 right-4 p-2 bg-black/80 text-white text-xs rounded z-50">
                <div>Performance: {isPageLoaded ? 'Loaded' : 'Loading...'}</div>
                <div>Scroll: {Math.round(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress') || '0'))}%</div>
              </div>
            )} */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Styles for Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(17, 17, 17, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00d4ff, #a855f7);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00d4ff, #ec4899);
        }
        
        /* Smooth transitions for all elements */
        * {
          transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        
        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Light theme overrides */
        .light .matrix-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .light .bg-theme-primary {
          background-color: #ffffff;
        }

        .light .bg-theme-secondary {
          background-color: #f9fafb;
        }

        .light .bg-theme-tertiary {
          background-color: #f3f4f6;
        }

        .light .text-theme-primary {
          color: #111827;
        }

        .light .text-theme-secondary {
          color: #374151;
        }

        .light .text-theme-tertiary {
          color: #6b7280;
        }

        .light .border-theme {
          border-color: #e5e7eb;
        }

        .light .border-theme-dark {
          border-color: #d1d5db;
        }
      `}</style>
    </main>
  )
}
