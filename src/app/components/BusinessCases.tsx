'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface BusinessCase {
  id: number
  name: string
  category: string
  image: string
  description: string
}

interface BusinessCasesProps {
  onCaseClick?: (caseId: string) => void
}

export function BusinessCases({ onCaseClick }: BusinessCasesProps) {
  const [activeIndex, setActiveIndex] = useState(2) // Start with middle card active
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const businessCases: BusinessCase[] = [
    {
      id: 1,
      name: "Digital Ecosystem",
      category: "Tech Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWNvc3lzdGVtfGVufDF8fHx8MTc1NzUzODk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Comprehensive digital transformation for enterprise clients"
    },
    {
      id: 2,
      name: "Luxury Brand Strategy",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4MjQwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Premium brand positioning and visual identity creation"
    },
    {
      id: 3,
      name: "Project Alpha",
      category: "Innovation Lab",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbiUyMGxhYnxlbnwxfHx8fDE3NTc3NjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Next-generation AI-powered solutions and prototypes"
    },
    {
      id: 4,
      name: "Global Commerce",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzU3NDcwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "International marketplace with advanced logistics integration"
    },
    {
      id: 5,
      name: "Future Mobility",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1647658152065-cce38706e21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBtb2JpbGl0eXxlbnwxfHx8fDE3NTc1Mzg5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Smart transportation solutions and connected vehicle platforms"
    }
  ]

  const getCasePageId = (caseId: number): string => {
    switch (caseId) {
      case 1: return 'digital-ecosystem'
      case 2: return 'luxury-brand'
      case 3: return 'project-alpha'
      case 4: return 'global-commerce'
      case 5: return 'future-mobility'
      default: return 'digital-ecosystem'
    }
  }

  const handleCaseClick = (businessCase: BusinessCase, index: number) => {
    if (index === activeIndex && onCaseClick) {
      // If it's the active card and we have the click handler, navigate to the case page
      onCaseClick(getCasePageId(businessCase.id))
    } else {
      // Otherwise just set it as active
      setActiveIndex(index)
    }
  }

  // Minimum swipe distance
  const minSwipeDistance = 50

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + businessCases.length) % businessCases.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % businessCases.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrev()
    }
  }

  const getCardSize = (index: number) => {
    if (index === activeIndex) {
      return 'w-80 h-96 lg:w-96 lg:h-[450px]' // Active card - larger
    }
    return 'w-64 h-80 lg:w-72 lg:h-96' // Inactive cards - smaller
  }

  const getCardOpacity = (index: number) => {
    if (index === activeIndex) {
      return 'opacity-100'
    }
    return 'opacity-60 hover:opacity-80'
  }

  return (
    <section 
      ref={sectionRef} 
      className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Accroche */}
          <p className="text-sm tracking-wider text-muted-foreground uppercase mb-4">
            Discover our latest business cases
          </p>
          
          {/* Phrase explicative en italique */}
          <p className="text-lg italic text-muted-foreground mb-8 max-w-2xl mx-auto">
            We designed unique solutions for visionary clients
          </p>
          
          {/* Grand titre */}
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight uppercase">
            OUR BUSINESS CASES
          </h2>
          
          {/* Paragraphe explicatif */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we transform challenges into opportunities through innovative design, 
            cutting-edge technology, and strategic thinking. Each case represents our commitment 
            to excellence and our clients' success.
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-foreground hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-foreground hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div 
            className="flex justify-center items-center space-x-4 lg:space-x-6 py-8 px-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {businessCases.map((businessCase, index) => (
              <div
                key={businessCase.id}
                onClick={() => handleCaseClick(businessCase, index)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105
                  ${getCardSize(index)}
                  ${getCardOpacity(index)}
                  ${index === activeIndex ? 'z-10 shadow-2xl' : 'z-0 shadow-lg'}
                `}
                style={{
                  transform: index === activeIndex 
                    ? 'scale(1.1) translateY(-10px)' 
                    : `scale(${index === activeIndex - 1 || index === activeIndex + 1 ? '0.95' : '0.9'})`
                }}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={businessCase.image}
                    alt={businessCase.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Premium overlay effect for active card */}
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                      {businessCase.category}
                    </span>
                  </div>
                  
                  {/* Project Name */}
                  <h3 className={`font-bold mb-2 leading-tight ${
                    index === activeIndex ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
                  }`}>
                    {businessCase.name}
                  </h3>
                  
                  {/* Description - only visible on active card */}
                  {index === activeIndex && (
                    <>
                      <p className="text-gray-200 text-sm leading-relaxed opacity-90 mb-3">
                        {businessCase.description}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-amber-300">
                        <span>Click to explore →</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Premium border effect for active card */}
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {businessCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? 'bg-foreground w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center space-x-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
            <span className="font-medium">View All Cases</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .space-x-4 > * + * {
              margin-left: 1rem;
            }
            .space-x-6 > * + * {
              margin-left: 1rem;
            }
          }
        `
      }} />
    </section>
  )
}