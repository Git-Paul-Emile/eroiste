'use client'

import { useEffect, useState } from 'react'

export function Clients() {
  const countries = ['Gabon', 'Congo', 'Côte d\'Ivoire', 'Togo']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % countries.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [countries.length])

  return (
    <section id="clients" className="py-20 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-[#191924] mb-8 tracking-tight">
            Notre royaume s'étend
          </h2>

          {/* Animation de texte fluide */}
          <div className="relative h-28 sm:h-36 lg:h-44 flex items-center justify-center overflow-hidden">
            <div
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight py-4 px-2 inline-block transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-6'
              }`}
              style={{
                background: 'linear-gradient(135deg, #191924 0%, #444444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {countries[currentIndex]}
            </div>
          </div>

          {/* Indicateurs de pays */}
          <div className="flex justify-center mt-12 space-x-3">
            {countries.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-12 bg-[#191924]'
                    : 'w-8 bg-[#191924]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}