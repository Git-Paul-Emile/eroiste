'use client'

import { useEffect, useState } from 'react'

export function HoverColorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Floating color zones that follow the cursor */}
      <div
        className="fixed pointer-events-none z-30 w-96 h-96 opacity-20 mix-blend-multiply dark:mix-blend-screen transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 35%, rgba(236, 72, 153, 0.2) 70%, transparent 100%)',
          transform: 'translate(0, 0)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Secondary smaller effect */}
      <div
        className="fixed pointer-events-none z-20 w-64 h-64 opacity-30 mix-blend-multiply dark:mix-blend-screen transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
          transform: 'translate(0, 0)',
          filter: 'blur(20px)',
        }}
      />

      {/* Tertiary accent effect */}
      <div
        className="fixed pointer-events-none z-10 w-32 h-32 opacity-40 mix-blend-multiply dark:mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(239, 68, 68, 0.2) 70%, transparent 100%)',
          transform: 'translate(0, 0)',
          filter: 'blur(15px)',
        }}
      />

      {/* Global styles for enhanced hover effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Enhanced hover effects for interactive elements */
        .hover-color-zone {
          position: relative;
          overflow: hidden;
        }

        .hover-color-zone::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .hover-color-zone:hover::before {
          left: 100%;
        }

        /* Button hover color effects */
        button:hover {
          background-image: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(59, 130, 246, 0.1) 0%,
            transparent 50%
          );
        }

        /* Card hover effects */
        .card-hover:hover {
          background-image: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(59, 130, 246, 0.05),
            transparent 40%
          );
        }

        /* Link hover effects */
        a:hover {
          position: relative;
        }

        a:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            rgba(168, 85, 247, 0.05) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: -1;
        }

        /* Section background color shifts */
        section:hover {
          background-image: radial-gradient(
            1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(59, 130, 246, 0.02),
            transparent 60%
          );
          transition: background-image 0.3s ease;
        }

        /* Navigation hover effects */
        nav a:hover {
          background-image: radial-gradient(
            circle at center,
            rgba(236, 72, 153, 0.1) 0%,
            transparent 70%
          );
          border-radius: 8px;
        }

        /* Header background shift on hover */
        header:hover {
          background-image: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.03) 0%,
            rgba(147, 51, 234, 0.02) 100%
          );
        }

        /* Footer hover effect */
        footer:hover {
          background-image: radial-gradient(
            ellipse at center top,
            rgba(34, 197, 94, 0.02) 0%,
            transparent 60%
          );
        }

        /* Text elements subtle color shift */
        h1:hover, h2:hover, h3:hover {
          color: transparent;
          background: linear-gradient(
            135deg,
            rgb(59, 130, 246),
            rgb(147, 51, 234),
            rgb(236, 72, 153)
          );
          background-clip: text;
          -webkit-background-clip: text;
          transition: all 0.3s ease;
        }

        /* Image hover color overlay */
        img:hover {
          filter: sepia(20%) saturate(120%) hue-rotate(15deg) brightness(110%);
          transition: filter 0.3s ease;
        }

        /* Form elements hover */
        input:hover, textarea:hover {
          background-image: radial-gradient(
            circle at center,
            rgba(59, 130, 246, 0.05) 0%,
            transparent 70%
          );
        }

        /* Disable effects on mobile to improve performance */
        @media (hover: none) and (pointer: coarse) {
          .hover-color-zone::before,
          button:hover,
          .card-hover:hover,
          a:hover::after,
          section:hover,
          nav a:hover,
          header:hover,
          footer:hover,
          h1:hover, h2:hover, h3:hover,
          img:hover,
          input:hover, textarea:hover {
            background-image: none !important;
            color: inherit !important;
            filter: none !important;
          }
        }

        /* Dark mode adjustments */
        .dark .hover-color-zone::before {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(147, 51, 234, 0.1),
            transparent
          );
        }

        .dark button:hover {
          background-image: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(147, 51, 234, 0.1) 0%,
            transparent 50%
          );
        }

        .dark .card-hover:hover {
          background-image: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(147, 51, 234, 0.05),
            transparent 40%
          );
        }
        `
      }} />
    </>
  )
}