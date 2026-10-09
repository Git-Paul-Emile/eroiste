'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Lightbulb,
  Palette,
  Code,
  Rocket
} from 'lucide-react'

interface ExpertiseItem {
  icon: React.ReactNode
  title: string
  description: string
  iconColor: string
  isHighlighted?: boolean
}

interface ExpertiseProps {
  onServiceClick: (service: string) => void
}

export function Expertise({ onServiceClick }: ExpertiseProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features: ExpertiseItem[] = [
    {
      icon: <Lightbulb className="h-[50px] w-[50px]" />,
      title: "Idéation et recherche",
      description: "On explore, on challenge, on rêve grand. Brainstorming, data et insights pour repérer les meilleures opportunités.",
      iconColor: "text-white",
    },
    {
      icon: <Palette className="h-[50px] w-[50px]" />,
      title: "Design & Prototype",
      description: "Des idées aux écrans ! Prototypage rapide, design centré sur l'utilisateur et itération à vitesse startup.",
      iconColor: "text-white",
      isHighlighted: true
    },
    {
      icon: <Code className="h-[50px] w-[50px]" />,
      title: "Build & Test",
      description: "On code, on teste, on ajuste. Des sprints agiles pour transformer le concept en produit solide et scalable.",
      iconColor: "text-white",
    },
    {
      icon: <Rocket className="h-[50px] w-[50px]" />,
      title: "Lancement et mise à l'échelle",
      description: "On lance, on mesure, on fait grandir. Croissance pilotée par les données et impact maximal sur le marché.",
      iconColor: "text-white",
    }
  ]

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

  return (
    <section id="expertise" ref={sectionRef} className="py-20 lg:py-32 bg-[#12121C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-[#F0EDE6] leading-tight tracking-tight">
              Comment nous menons<br />
              nos conquêtes
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-base lg:text-lg text-[#8A8780] leading-relaxed">
              Comme dans un royaume, Le Roi pense chaque problématique avec clarté et anticipation.
              Allier créativité et technologie pour tracer une direction inspirante et durable.
            </p>
          </div>
        </div>

        {/* Features Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-lg transition-all duration-300 cursor-pointer bg-[#0E0E18] border border-[rgba(240,237,230,0.06)] hover:border-[rgba(240,237,230,0.14)] ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon container */}
              <div className="w-[66px] h-[66px] rounded-2xl flex items-center justify-center mb-6 bg-[#1A1A1A]">
                <div className={`${feature.iconColor}`}>
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-4 text-[#F0EDE6] group-hover:text-[#1B5BFF] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#8A8780] leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#1B5BFF]/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-up {
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
          animation: fade-in-up 0.6s ease-out forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
            opacity: 0.8;
          }
          66% {
            transform: translateY(5px) rotate(240deg);
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .grid-cols-1.md\\:grid-cols-2 {
            gap: 1.5rem;
          }
        }
        `
      }} />
    </section>
  )
}