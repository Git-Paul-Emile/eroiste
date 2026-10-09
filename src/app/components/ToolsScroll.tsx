'use client'

import { useEffect, useRef } from 'react'

interface Tool {
  name: string
  category: string
}

const tools: Tool[] = [
  // Development
  { name: 'JavaScript', category: 'dev' },
  { name: 'Node.js', category: 'dev' },
  { name: 'Angular', category: 'dev' },
  { name: 'Next.js', category: 'dev' },
  { name: 'React', category: 'dev' },
  { name: 'Vue.js', category: 'dev' },
  { name: 'Docker', category: 'dev' },
  { name: '.NET', category: 'dev' },
  { name: 'Laravel', category: 'dev' },
  { name: 'Firebase', category: 'dev' },
  { name: 'MongoDB', category: 'dev' },
  { name: 'Kotlin', category: 'dev' },
  { name: 'Tailwind CSS', category: 'dev' },

  // Design Tools
  { name: 'Adobe XD', category: 'design' },
  { name: 'Figma', category: 'design' },
  { name: 'Sketch', category: 'design' },
  { name: 'Framer', category: 'design' },
  { name: 'Webflow', category: 'design' },
  { name: 'Marvel', category: 'design' },
  { name: 'Corebook', category: 'design' },

  // Adobe Suite
  { name: 'Premiere Pro', category: 'adobe' },
  { name: 'After Effects', category: 'adobe' },
  { name: 'Illustrator', category: 'adobe' },
  { name: 'Photoshop', category: 'adobe' },
  { name: 'InDesign', category: 'adobe' },
  { name: 'Lightroom', category: 'adobe' },
  { name: 'Adobe Express', category: 'adobe' },

  // Others
  { name: 'Affinity', category: 'other' },
  { name: 'Xmind', category: 'other' },
  { name: 'Lucid', category: 'other' },
  { name: 'Microsoft Suite', category: 'other' },
  { name: 'Iris', category: 'other' },
  { name: 'DXO Photo', category: 'other' },
  { name: 'CorelDraw', category: 'other' },
  { name: 'Kanban', category: 'other' },
  { name: 'Scrum', category: 'other' },
  { name: 'AI Tools', category: 'other' }
]

// Split tools into rows
const row1 = tools.filter((_, i) => i % 4 === 0)
const row2 = tools.filter((_, i) => i % 4 === 1)
const row3 = tools.filter((_, i) => i % 4 === 2)
const row4 = tools.filter((_, i) => i % 4 === 3)

export function ToolsScroll() {
  return (
    <section className="py-24 lg:py-32 bg-[#191924] overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191924] via-[#0a0a0a] to-[#191924] opacity-50" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#F0EDE6] mb-6 tracking-tight">
            Nous parlons couramment
          </h2>
          <p className="text-lg text-[#8A8780] max-w-2xl mx-auto">
            Une maîtrise complète des technologies et outils qui façonnent l'expérience digitale moderne
          </p>
        </div>
      </div>

      {/* Scrolling rows */}
      <div className="relative space-y-8">
        {/* Row 1 - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-6">
            {[...row1, ...row1, ...row1].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-[#111111] border border-[rgba(240,237,230,0.08)] rounded-full hover:border-[#1B5BFF]/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer"
              >
                <span className="text-[#F0EDE6] font-medium whitespace-nowrap group-hover:text-[#1B5BFF] transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right gap-6">
            {[...row2, ...row2, ...row2].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-[#111111] border border-[rgba(240,237,230,0.08)] rounded-full hover:border-[#1B5BFF]/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer"
              >
                <span className="text-[#F0EDE6] font-medium whitespace-nowrap group-hover:text-[#1B5BFF] transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right (Faster) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left-fast gap-6">
            {[...row3, ...row3, ...row3].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-[#111111] border border-[rgba(240,237,230,0.08)] rounded-full hover:border-[#1B5BFF]/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer"
              >
                <span className="text-[#F0EDE6] font-medium whitespace-nowrap group-hover:text-[#1B5BFF] transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 - Right to Left (Slower) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right-slow gap-6">
            {[...row4, ...row4, ...row4].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-[#111111] border border-[rgba(240,237,230,0.08)] rounded-full hover:border-[#1B5BFF]/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer"
              >
                <span className="text-[#F0EDE6] font-medium whitespace-nowrap group-hover:text-[#1B5BFF] transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#191924] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#191924] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
          }

          .animate-scroll-left-fast {
            animation: scroll-left 30s linear infinite;
          }

          .animate-scroll-right-slow {
            animation: scroll-right 50s linear infinite;
          }

          /* Pause on hover */
          .animate-scroll-left:hover,
          .animate-scroll-right:hover,
          .animate-scroll-left-fast:hover,
          .animate-scroll-right-slow:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  )
}
