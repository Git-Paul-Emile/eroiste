'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ServiceNavSliderProps {
  currentService: 'design' | 'software' | 'animation' | 'analytics' | 'ai-blockchain'
  onNavigate: (service: 'design' | 'software' | 'animation' | 'analytics' | 'ai-blockchain') => void
}

const services = [
  { key: 'design' as const, label: 'Design & Expérience Digitale', number: '01' },
  { key: 'software' as const, label: 'Ingénierie & Technologie', number: '02' },
  { key: 'animation' as const, label: 'Brand & Direction Artistique', number: '03' },
  { key: 'analytics' as const, label: 'Stratégie & Transformation', number: '04' },
  { key: 'ai-blockchain' as const, label: 'Cybersécurité & Résilience', number: '05' },
]

export function ServiceNavSlider({ currentService, onNavigate }: ServiceNavSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' })
  }

  const currentIndex = services.findIndex(s => s.key === currentService)
  const prevService = services[currentIndex - 1]
  const nextService = services[currentIndex + 1]

  return (
    <div className="w-full bg-[#191924] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center">
          {/* Scroll left */}
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 p-2 text-white/40 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Service tabs */}
          <div
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto scrollbar-none gap-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => {
              const isActive = service.key === currentService
              return (
                <button
                  key={service.key}
                  onClick={() => onNavigate(service.key)}
                  className={`flex-shrink-0 flex items-center px-4 py-3 text-xs font-medium tracking-wide transition-all duration-300 border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'text-[#1B5BFF] border-[#1B5BFF]'
                      : 'text-white/40 border-transparent hover:text-white/70 hover:border-white/20'
                  }`}
                >
                  {service.label}
                </button>
              )
            })}
          </div>

          {/* Scroll right */}
          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 p-2 text-white/40 hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Prev / Next quick nav */}
        
      </div>
    </div>
  )
}
