"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const TechnologyLogos = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const technologies = [
    { name: 'ReactJS', position: [2, 0.5, 0] as [number, number, number] },
    { name: 'Node.js', position: [-2, 0.5, 0] as [number, number, number] },
    { name: 'Android', position: [0, 0.5, 2] as [number, number, number] },
    { name: 'JavaScript', position: [0, 0.5, -2] as [number, number, number] },
    { name: 'HTML', position: [1.5, 0.5, 1.5] as [number, number, number] },
    { name: 'CSS', position: [-1.5, 0.5, -1.5] as [number, number, number] },
    { name: 'TypeScript', position: [1.5, 0.5, -1.5] as [number, number, number] },
    { name: 'Redux', position: [-1.5, 0.5, 1.5] as [number, number, number] },
    { name: 'MongoDB', position: [2.5, 0.5, 1] as [number, number, number] },
    { name: 'Docker', position: [-2.5, 0.5, -1] as [number, number, number] }
  ]

  const getLogoGeometry = (techName: string) => {
    switch (techName) {
      case 'ReactJS':
        // React atom-like structure
        return (
          <group>
            {/* Central sphere */}
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Orbiting rings */}
            {[...Array(3)].map((_, i) => (
              <mesh key={i} rotation={[Math.PI / 2, (i * Math.PI * 2) / 3, 0]}>
                <torusGeometry args={[0.3, 0.02, 8, 16]} />
                <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
              </mesh>
            ))}
          </group>
        )
      
      case 'Node.js':
        // Node.js hexagon
        return (
          <mesh>
            <cylinderGeometry args={[0.25, 0.25, 0.1, 6]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
          </mesh>
        )
      
      case 'Android':
        // Android robot head
        return (
          <group>
            {/* Head */}
            <mesh>
              <boxGeometry args={[0.4, 0.4, 0.1]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Antennae */}
            <mesh position={[0.1, 0.25, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[-0.1, 0.25, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      
      case 'JavaScript':
        // JavaScript square with JS
        return (
          <mesh>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
          </mesh>
        )
      
      case 'HTML':
        // HTML shield
        return (
          <group>
            {/* Shield base */}
            <mesh>
              <cylinderGeometry args={[0.25, 0.25, 0.1, 4]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Shield top */}
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      
      case 'CSS':
        // CSS shield
        return (
          <group>
            {/* Shield base */}
            <mesh>
              <cylinderGeometry args={[0.25, 0.25, 0.1, 4]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Shield top */}
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      
      case 'TypeScript':
        // TypeScript square
        return (
          <mesh>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
          </mesh>
        )
      
      case 'Redux':
        // Redux circular structure
        return (
          <group>
            {/* Central circle */}
            <mesh>
              <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Outer ring */}
            <mesh>
              <torusGeometry args={[0.35, 0.02, 8, 16]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      
      case 'MongoDB':
        // MongoDB leaf
        return (
          <group>
            {/* Leaf shape */}
            <mesh>
              <cylinderGeometry args={[0.15, 0.05, 0.1, 8]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Leaf tip */}
            <mesh position={[0, 0.2, 0]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      
      case 'Docker':
        // Docker whale
        return (
          <group>
            {/* Whale body */}
            <mesh>
              <capsuleGeometry args={[0.2, 0.4, 4, 8]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            {/* Whale tail */}
            <mesh position={[0, 0, 0.3]}>
              <boxGeometry args={[0.1, 0.3, 0.1]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      
      default:
        return (
          <mesh>
            <boxGeometry args={[0.3, 0.3, 0.1]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
          </mesh>
        )
    }
  }

  return (
    <group ref={groupRef}>
      {technologies.map((tech, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group 
            position={tech.position}
            rotation={[0, i * 0.5, 0]}
          >
            {getLogoGeometry(tech.name)}
          </group>
        </Float>
      ))}
    </group>
  )
}

export default TechnologyLogos
