import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface CursorPosition {
  x: number
  y: number
}

interface CursorEffectsOptions {
  enabled?: boolean
  size?: number
  color?: string
  trailLength?: number
  smoothness?: number
}

// Main cursor effects hook
export const useCursorEffects = (options: CursorEffectsOptions = {}) => {
  const {
    enabled = true,
    size = 20,
    color = '#00d4ff',
    trailLength = 8,
    smoothness = 0.15
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorScale = useMotionValue(1)
  const cursorOpacity = useMotionValue(0)
  
  const springX = useSpring(cursorX, { stiffness: 100, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 100, damping: 30 })
  const springScale = useSpring(cursorScale, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(cursorOpacity, { stiffness: 100, damping: 30 })

  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Create a callback ref function for trail elements
  const setTrailRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    trailRefs.current[index] = el
  }, [])

  // Update cursor position
  const updateCursorPosition = useCallback((e: MouseEvent) => {
    if (!enabled) return
    
    cursorX.set(e.clientX - size / 2)
    cursorY.set(e.clientY - size / 2)
    cursorOpacity.set(1)
    setIsVisible(true)
    
    // Update trail positions
    trailRefs.current.forEach((trail, index) => {
      if (trail) {
        const delay = (index + 1) * (1000 / 60) // 60fps
        setTimeout(() => {
          if (trail) {
            trail.style.left = `${e.clientX - size / 2}px`
            trail.style.top = `${e.clientY - size / 2}px`
          }
        }, delay)
      }
    })
  }, [enabled, cursorX, cursorY, cursorOpacity, size])

  // Handle cursor hover effects
  const handleMouseEnter = useCallback(() => {
    if (!enabled) return
    
    setIsHovering(true)
    cursorScale.set(1.5)
    cursorOpacity.set(0.8)
  }, [enabled, cursorScale, cursorOpacity])

  const handleMouseLeave = useCallback(() => {
    if (!enabled) return
    
    setIsHovering(false)
    cursorScale.set(1)
    cursorOpacity.set(0)
    setIsVisible(false)
  }, [enabled, cursorScale, cursorOpacity])

  // Handle cursor click effects
  const handleMouseDown = useCallback(() => {
    if (!enabled) return
    
    setIsClicking(true)
    cursorScale.set(0.8)
  }, [enabled, cursorScale])

  const handleMouseUp = useCallback(() => {
    if (!enabled) return
    
    setIsClicking(false)
    cursorScale.set(isHovering ? 1.5 : 1)
  }, [enabled, cursorScale, isHovering])

  // Initialize cursor effects
  useEffect(() => {
    if (!enabled) return

    // Create trail elements
    trailRefs.current = Array.from({ length: trailLength }, () => null)
    
    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [enabled, updateCursorPosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, trailLength])

  // Hide cursor after inactivity
  useEffect(() => {
    if (!enabled) return

    const hideCursor = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        cursorOpacity.set(0)
        setIsVisible(false)
      }, 2000)
    }

    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      cursorOpacity.set(1)
      setIsVisible(true)
    }

    document.addEventListener('mousemove', resetTimer)
    document.addEventListener('mousedown', resetTimer)
    document.addEventListener('keydown', resetTimer)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      document.removeEventListener('mousemove', resetTimer)
      document.removeEventListener('mousedown', resetTimer)
      document.removeEventListener('keydown', resetTimer)
    }
  }, [enabled, cursorOpacity])

  return {
    isVisible,
    isHovering,
    isClicking,
    cursorX: springX,
    cursorY: springY,
    cursorScale: springScale,
    cursorOpacity: springOpacity,
    trailRefs: trailRefs.current
  }
}

// Cursor trail component
export const CursorTrail = ({ 
  size = 20, 
  color = '#00d4ff',
  trailLength = 8 
}: {
  size?: number
  color?: string
  trailLength?: number
}) => {
  return (
    <>
      {Array.from({ length: trailLength }, (_, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            width: size * (1 - index * 0.1),
            height: size * (1 - index * 0.1),
            backgroundColor: color,
            opacity: 0.3 - index * 0.03,
            borderRadius: '50%',
            mixBlendMode: 'difference'
          }}
          animate={{
            x: 0,
            y: 0,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1
          }}
        />
      ))}
    </>
  )
}

// Main cursor component
export const CustomCursor = ({ 
  enabled = true,
  size = 20,
  color = '#00d4ff',
  trailLength = 8,
  smoothness = 0.15
}: {
  enabled?: boolean
  size?: number
  color?: string
  trailLength?: number
  smoothness?: number
}) => {
  const {
    isVisible,
    isHovering,
    isClicking,
    cursorX,
    cursorY,
    cursorScale,
    cursorOpacity,
    trailRefs
  } = useCursorEffects({ enabled, size, color, trailLength, smoothness })

  if (!enabled) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
          opacity: cursorOpacity
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="rounded-full border-2 border-white"
          style={{
            width: size,
            height: size,
            backgroundColor: 'transparent'
          }}
        />
      </motion.div>

      {/* Cursor trail */}
      <CursorTrail 
        size={size} 
        color={color} 
        trailLength={trailLength} 
      />
    </>
  )
}

// Text cursor effect hook
export const useTextCursor = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true)
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [currentIndex, text, speed])

  const reset = useCallback(() => {
    setDisplayText('')
    setCurrentIndex(0)
    setIsTyping(false)
  }, [])

  return { displayText, isTyping, reset }
}

// Magnetic cursor effect hook
export const useMagneticCursor = (strength: number = 0.3) => {
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const offsetX = (e.clientX - centerX) * strength
    const offsetY = (e.clientY - centerY) * strength
    
    setMagneticOffset({ x: offsetX, y: offsetY })
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    setMagneticOffset({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return { elementRef, magneticOffset }
}

// Cursor splash effect hook
export const useCursorSplash = () => {
  const [splashes, setSplashes] = useState<Array<{ id: number; x: number; y: number }>>([])
  const splashId = useRef(0)

  const createSplash = useCallback((x: number, y: number) => {
    const newSplash = { id: splashId.current++, x, y }
    setSplashes(prev => [...prev, newSplash])
    
    // Remove splash after animation
    setTimeout(() => {
      setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id))
    }, 600)
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    createSplash(e.clientX, e.clientY)
  }, [createSplash])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])

  return { splashes }
}

// Cursor splash component
export const CursorSplash = ({ splashes }: { splashes: Array<{ id: number; x: number; y: number }> }) => {
  return (
    <>
      {splashes.map(splash => (
        <motion.div
          key={splash.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: splash.x - 20,
            top: splash.y - 20
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 bg-neon-blue rounded-full" />
        </motion.div>
      ))}
    </>
  )
}
