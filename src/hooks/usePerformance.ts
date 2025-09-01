import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

// Type definitions for external APIs
interface WindowWithGtag extends Window {
  gtag?: (command: string, action: string, params: Record<string, string | number>) => void
}

interface NetworkConnection extends EventTarget {
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean
}

interface BatteryManager extends EventTarget {
  level: number
  charging: boolean
  chargingTime: number
  dischargingTime: number
}

interface BatteryInfo {
  level: number
  charging: boolean
  chargingTime: number
  dischargingTime: number
}

// Performance monitoring hook
export const usePerformance = (componentName: string) => {
  const startTime = useRef(performance.now())
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const endTime = performance.now()
    const loadTime = endTime - startTime.current
    
    console.log(`${componentName} loaded in ${loadTime.toFixed(2)}ms`)
    
    // Report to analytics if available
    if (typeof window !== 'undefined' && (window as WindowWithGtag).gtag) {
      (window as WindowWithGtag).gtag!('event', 'component_load', {
        component_name: componentName,
        load_time: loadTime
      })
    }
    
    setIsLoaded(true)
  }, [componentName])

  return { isLoaded }
}

// Lazy loading hook with intersection observer
export const useLazyLoad = (threshold: number = 0.1, rootMargin: string = '50px') => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (inView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [inView, isLoaded])

  return { ref, inView, isLoaded }
}

// Debounced scroll hook for performance
export const useDebouncedScroll = (callback: () => void, delay: number = 16) => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const debouncedCallback = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      callback()
    }, delay)
  }, [callback, delay])

  useEffect(() => {
    window.addEventListener('scroll', debouncedCallback, { passive: true })
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      window.removeEventListener('scroll', debouncedCallback)
    }
  }, [debouncedCallback])

  return debouncedCallback
}

// Memory efficient image loading hook
export const useImageLoader = (src: string, fallback?: string) => {
  const [imageSrc, setImageSrc] = useState<string>(fallback || '')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!src) return

    setIsLoading(true)
    setError(null)

    const img = new Image()
    
    img.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
    }
    
    img.onerror = () => {
      setError('Failed to load image')
      setIsLoading(false)
      if (fallback) {
        setImageSrc(fallback)
      }
    }
    
    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, fallback])

  return { imageSrc, isLoading, error }
}

// Optimized animation frame hook
export const useAnimationFrame = (callback: (time: number) => void) => {
  const requestRef = useRef<number | undefined>(undefined)
  const previousTimeRef = useRef<number | undefined>(undefined)

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }, [callback])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])

  return requestRef
}

// Resource preloading hook
export const usePreload = (resources: string[]) => {
  const [preloaded, setPreloaded] = useState<Set<string>>(new Set())

  useEffect(() => {
    const preloadResource = async (url: string) => {
      try {
        if (url.endsWith('.css')) {
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = url
          document.head.appendChild(link)
        } else if (url.endsWith('.js')) {
          await import(/* webpackIgnore: true */ url)
        } else {
          // Preload images and other resources
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = url
          document.head.appendChild(link)
        }
        
        setPreloaded(prev => new Set(prev).add(url))
      } catch (error) {
        console.warn(`Failed to preload: ${url}`, error)
      }
    }

    resources.forEach(preloadResource)
  }, [resources])

  return preloaded
}

// Memory usage monitoring hook
export const useMemoryMonitor = () => {
  const [memoryInfo, setMemoryInfo] = useState<{
    used: number
    total: number
    limit: number
    percentage: number
  } | null>(null)

  useEffect(() => {
    if ('memory' in performance) {
      const updateMemoryInfo = () => {
        const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
        setMemoryInfo({
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
          percentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100)
        })
      }

      updateMemoryInfo()
      const interval = setInterval(updateMemoryInfo, 5000) // Update every 5 seconds

      return () => clearInterval(interval)
    }
  }, [])

  return memoryInfo
}

// Network status monitoring hook
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [connection, setConnection] = useState<NetworkConnection | null>(null)

  useEffect(() => {
    const updateNetworkStatus = () => {
      setIsOnline(navigator.onLine)
      
      if ('connection' in navigator) {
        setConnection((navigator as Navigator & { connection: NetworkConnection }).connection)
      }
    }

    window.addEventListener('online', updateNetworkStatus)
    window.addEventListener('offline', updateNetworkStatus)
    
    if ('connection' in navigator) {
      (navigator as Navigator & { connection: NetworkConnection }).connection?.addEventListener('change', updateNetworkStatus)
    }

    updateNetworkStatus()

    return () => {
      window.removeEventListener('online', updateNetworkStatus)
      window.removeEventListener('offline', updateNetworkStatus)
      
      if ('connection' in navigator) {
        (navigator as Navigator & { connection: NetworkConnection }).connection?.removeEventListener('change', updateNetworkStatus)
      }
    }
  }, [])

  return { isOnline, connection }
}

// Battery status monitoring hook
export const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState<BatteryInfo | null>(null)

  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as Navigator & { getBattery(): Promise<BatteryManager> }).getBattery().then((battery: BatteryManager) => {
        const updateBatteryInfo = () => {
          setBatteryInfo({
            level: Math.round(battery.level * 100),
            charging: battery.charging,
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime
          })
        }

        battery.addEventListener('levelchange', updateBatteryInfo)
        battery.addEventListener('chargingchange', updateBatteryInfo)
        battery.addEventListener('chargingtimechange', updateBatteryInfo)
        battery.addEventListener('dischargingtimechange', updateBatteryInfo)

        updateBatteryInfo()

        return () => {
          battery.removeEventListener('levelchange', updateBatteryInfo)
          battery.removeEventListener('chargingchange', updateBatteryInfo)
          battery.removeEventListener('chargingtimechange', updateBatteryInfo)
          battery.removeEventListener('dischargingtimechange', updateBatteryInfo)
        }
      })
    }
  }, [])

  return batteryInfo
}

// Optimized resize observer hook
export const useResizeObserver = (callback: (entries: ResizeObserverEntry[]) => void) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      callback(entries)
    })

    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [callback])

  return ref
}
