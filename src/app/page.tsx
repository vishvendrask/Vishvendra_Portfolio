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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background-primary text-text-primary overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <IntroLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
            <ChatBot />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
