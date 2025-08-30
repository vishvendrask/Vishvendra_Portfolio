"use client"

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

const IntroLoader = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLoading, setShowLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const loadingTexts = useMemo(() => [
    'Welcome to my portfolio',
    'Initializing...',
    'Compiling...',
    'Optimizing...',
    'Ready!'
  ], [])

  useEffect(() => {
    if (currentIndex < loadingTexts.length) {
      const text = loadingTexts[currentIndex]
      let charIndex = 0
      
      const typeInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setCurrentText(text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentIndex(prev => prev + 1)
          }, 1000)
        }
      }, 100)

      return () => clearInterval(typeInterval)
    } else {
      setShowLoading(true)
    }
  }, [currentIndex, loadingTexts])

  useEffect(() => {
    if (showLoading) {
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 50)

      return () => clearInterval(progressInterval)
    }
  }, [showLoading])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo/Title */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-6xl font-bold text-gradient mb-4">VS</h1>
          <p className="text-xl text-text-secondary">Vishvendra Singh Khangarot</p>
        </motion.div>

        {/* Typewriter Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg text-neon-blue font-mono">
            {currentText}
            <span className="animate-blink ml-1">|</span>
          </p>
        </motion.div>

        {/* Loading Bar */}
        {showLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="bg-glass-dark rounded-full h-2 mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm text-text-secondary">{loadingProgress}% Complete</p>
          </motion.div>
        )}

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="loading-dots"
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        {/* Matrix Background */}
        <div className="absolute inset-0 -z-10 matrix-bg opacity-20" />
      </div>
    </motion.div>
  )
}

export default IntroLoader
