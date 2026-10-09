'use client'

import { useEffect, useState } from 'react'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add new trail point
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      }

      setTrail(prev => {
        const newTrail = [newPoint, ...prev]
        // Keep only the last 15 points for performance
        return newTrail.slice(0, 15)
      })
    }

    const updateTrail = () => {
      setTrail(prev => prev.slice(0, -1))
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    // Update trail every 50ms to create smooth fading effect
    const interval = setInterval(updateTrail, 50)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-200"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: 'translate(0, 0)'
        }}
      />

      {/* Trail points */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-1 h-1 bg-blue-500/30 dark:bg-blue-400/30 rounded-full pointer-events-none z-40 mix-blend-normal"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (15 - index) / 15,
            transform: `scale(${(15 - index) / 15})`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        />
      ))}

      {/* Global styles for cursor effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            cursor: none !important;
          }

          a, button, [role="button"], input, textarea, select {
            position: relative;
          }

          a:hover, button:hover, [role="button"]:hover {
            position: relative;
          }

          a:hover::after, button:hover::after, [role="button"]:hover::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 30px;
            height: 30px;
            border: 2px solid rgb(59, 130, 246);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1000;
            animation: pulse-ring 0.6s ease-out;
          }

          @keyframes pulse-ring {
            0% {
              width: 20px;
              height: 20px;
              opacity: 1;
            }
            100% {
              width: 40px;
              height: 40px;
              opacity: 0;
            }
          }

          /* Special hover effects for different elements */
          .hover-glow:hover {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
            transition: box-shadow 0.3s ease;
          }

          /* Enhanced cursor for text selection */
          p, h1, h2, h3, h4, h5, h6, span, div {
            position: relative;
          }

          /* Disable cursor customization on mobile */
          @media (hover: none) and (pointer: coarse) {
            * {
              cursor: auto !important;
            }
            
            a:hover::after, button:hover::after, [role="button"]:hover::after {
              display: none !important;
            }
          }
        `
      }} />
    </>
  )
}