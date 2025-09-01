import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationOptions {
  target?: React.RefObject<HTMLElement>
  offset?: ["start end", "end start"]
  stiffness?: number
  damping?: number
  mass?: number
}

interface ScrollAnimationReturn {
  ref: React.RefObject<HTMLElement | null>
  scrollYProgress: MotionValue<number>
  y: MotionValue<string>
  opacity: MotionValue<number>
  scale: MotionValue<number>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  blur: MotionValue<number>
  springY: MotionValue<string>
  springOpacity: MotionValue<number>
  springScale: MotionValue<number>
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}): ScrollAnimationReturn => {
  const {
    target,
    offset = ["start end", "end start"],
    stiffness = 100,
    damping = 30,
    mass = 1
  } = options

  const ref = useRef<HTMLElement>(null)
  const targetRef = target || ref

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset
  })

  // Basic transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360])
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 10])

  // Spring-based transforms for smoother animations
  const springY = useSpring(y, { stiffness, damping, mass })
  const springOpacity = useSpring(opacity, { stiffness, damping, mass })
  const springScale = useSpring(scale, { stiffness, damping, mass })

  return {
    ref,
    scrollYProgress,
    y,
    opacity,
    scale,
    rotateX,
    rotateY,
    blur,
    springY,
    springOpacity,
    springScale
  }
}

// Specialized hooks for common animation patterns
export const useFadeInUp = (delay: number = 0) => {
  const { ref, springY, springOpacity } = useScrollAnimation()
  
  return {
    ref,
    style: {
      y: springY,
      opacity: springOpacity
    },
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }
}

export const useFadeInLeft = (delay: number = 0) => {
  const { ref, springOpacity } = useScrollAnimation()
  
  return {
    ref,
    style: {
      opacity: springOpacity
    },
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay }
  }
}

export const useFadeInRight = (delay: number = 0) => {
  const { ref, springOpacity } = useScrollAnimation()
  
  return {
    ref,
    style: {
      opacity: springOpacity
    },
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay }
  }
}

export const useScaleIn = (delay: number = 0) => {
  const { ref, springScale, springOpacity } = useScrollAnimation()
  
  return {
    ref,
    style: {
      scale: springScale,
      opacity: springOpacity
    },
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay }
  }
}

export const useParallax = (speed: number = 0.5) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  
  return {
    style: { y }
  }
}

export const useSticky = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
  return {
    style: { y: y }
  }
}
