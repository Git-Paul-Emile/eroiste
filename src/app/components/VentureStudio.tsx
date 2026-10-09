'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Award, Check, CheckCircle, Clock, Infinity, Palette, Printer, FileText, ShoppingBag, BookOpen, Layers, Zap, Users, Target, Shield } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import image1 from 'figma:asset/27a870e019262d8dc9ba7e076814f4a6d798c811.png'
import image2 from 'figma:asset/598a2d4c614af720e8b1834ad500c6614f56e1e5.png'

interface ServiceCard {
  title: string
  isActive: boolean
}

interface BenefitCard {
  icon: React.ReactNode
  title: string
  description: string
}

interface TimelineItem {
  title: string
  description: string
  isActive: boolean
}

interface VentureStudioProps {
  onNavigateToQuote?: () => void
}

export function VentureStudio({ onNavigateToQuote }: VentureStudioProps = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [activeTimeline, setActiveTimeline] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)
  const designSectionRef = useRef<HTMLDivElement>(null)
  const benefitsSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (designSectionRef.current) {
      observer.observe(designSectionRef.current)
    }

    if (benefitsSectionRef.current) {
      observer.observe(benefitsSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services: ServiceCard[] = [
    { title: "DESIGN & EXPÉRIENCE DIGITALE", isActive: true },
    { title: "INGÉNIERIE & TECHNOLOGIE", isActive: false },
    { title: "BRAND & DIRECTION ARTISTIQUE", isActive: false },
    { title: "STRATÉGIE & TRANSFORMATION DIGITALE", isActive: true },
    { title: "CYBERSÉCURITÉ & RÉSILIENCE NUMÉRIQUE", isActive: false },
    { title: "STARTUP STUDIO", isActive: true }
  ]

  const benefits: BenefitCard[] = [
    {
      icon: <Check className="w-8 h-8" />,
      title: "Ce que nous sommes ?",
      description: "Un Studio tech & créatif fondé sur la conviction que la croissance des organisations africaines passe par la maîtrise simultanée du design, de la technologie et de la stratégie. Pas l'un après l'autre. Les trois ensemble."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ce que nous ne sommes pas?",
      description: "Une agence de communication généraliste. Un prestataire low-cost. Un exécutant sans point de vue. Nous choisissons nos projets, nous défendons des positions, et nous mesurons notre valeur."
    }
  ]

  const timelineItems: TimelineItem[] = [
    {
      title: "Innovation",
      description: "We explore new technologies and tools. To provide new unique and cutting edge solutions that set our clients apart in the digital landscape.",
      isActive: true
    },
    {
      title: "Human-Centered Design",
      description: "We use innovative methodologies and research user needs at every stage. By creating solutions and engaging experiences, we ensure clients are not only aesthetically pleasing but also intuitive and user-friendly.",
      isActive: false
    },
    {
      title: "Quality",
      description: "We are committed to excellence, adhering to the highest standards of quality and performance. Using advanced technologies and approaches, we ensure every project receives our client's expectations.",
      isActive: false
    },
    {
      title: "Collaboration",
      description: "As a small, close-knit team, we have worked together for years, developing a deep understanding of each other's strengths and fostering strong frameworks.",
      isActive: false
    }
  ]


  return (
    <div className="min-h-screen pt-20 bg-[#F0EDE6]">
      {/* About Section - À propos */}
      <section className="py-16 lg:py-24 bg-[#F0EDE6] border-b border-[rgba(8,8,8,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Content - Title */}
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#191924] leading-tight tracking-tight">
                Notre<br />Royaume
              </h1>
            </div>

            {/* Right Content - Description */}
            <div className="space-y-6">
              <p className="text-base text-[#444240] leading-relaxed">
                Eroiste est un studio tech & créatif spécialisé dans la conception d'expériences digitales, de produits technologiques et de stratégies de croissance pour les organisations africaines ambitieuses. Nous accompagnons les entreprises, médias, startups, institutions et marques dans leur transformation en combinant trois disciplines généralement traitées séparément : le design, la technologie et la stratégie. Chez Eroiste, ces dimensions sont pensées ensemble dès le départ afin de construire des solutions cohérentes, performantes et durables.
              </p>

              <p className="text-base text-[#444240] leading-relaxed">
                Notre expertise couvre l'ensemble du cycle de création et de transformation numérique : stratégie produit, branding, design d'expérience, développement web & mobile, systèmes digitaux, intelligence artificielle, automatisation, contenus et croissance.
              </p>

              <p className="text-base text-[#444240] leading-relaxed">
                Eroiste développe des produits, plateformes et expériences conçus pour répondre aux réalités des marchés africains tout en respectant les standards internationaux d'exécution.
              </p>

              <p className="text-base text-[#444240] leading-relaxed">
                Notre ambition est de contribuer à une nouvelle génération d'organisations africaines capables de rivaliser à l'échelle mondiale grâce à une meilleure maîtrise du design, de la technologie et de la stratégie.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    if (onNavigateToQuote) {
                      onNavigateToQuote()
                    }
                  }}
                  className="inline-flex items-center text-[#191924] font-medium hover:text-[#191924] transition-colors duration-300 group cursor-pointer"
                >
                  Travailler avec nous
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Section - Unlimited Design */}
      <section className="py-16 lg:py-24 bg-[#F0EDE6]" ref={designSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-3xl lg:text-5xl font-light text-[#191924] leading-tight mb-6 tracking-tight">
                Un impact mesurable<br />
                pour vos projets.
              </h1>

              <p className="text-base text-[#444240] mb-8 max-w-md">
                Eroïste est un studio à l'intersection de la stratégie, du design et de la technologie.
                Nous concevons des systèmes capables de transformer des idées en leviers de croissance concrets.
                Bienvenue dans un environnement où chaque décision est pensée pour produire un retour.
              </p>

            </div>

            {/* Right Content - Service Cards Grid */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="grid grid-cols-2 gap-4 max-w-md ml-auto">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                      service.isActive 
                        ? 'bg-white hover:bg-white/80 border border-[rgba(8,8,8,0.08)]' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="text-center">
                      <h3 className="font-medium text-[#191924] text-sm">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#1B5BFF]/10 to-[#E8956D]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredService === index ? 'opacity-100' : ''
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Membership Benefits */}
      <section className="py-16 lg:py-24 bg-[#191924] text-[#F0EDE6]" ref={benefitsSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">

            <h2 className="text-3xl lg:text-4xl font-light leading-tight max-w-2xl">
              Explorons ensemble comment transformer vos ambitions en expériences.
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group p-8 border border-[rgba(240,237,230,0.08)] rounded-2xl transition-all duration-300 hover:border-[rgba(240,237,230,0.18)] ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 text-[#F0EDE6] group-hover:text-[#1B5BFF] transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>

                <h3 className="text-lg font-medium mb-4 group-hover:text-[#1B5BFF] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-[#8A8780] leading-relaxed group-hover:text-[#F0EDE6]/80 transition-colors duration-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche Section */}
      <section className="py-16 lg:py-24 bg-[#F0EDE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Méthodologie */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-light text-[#191924] mb-4">
                MÉTHODOLOGIE : LA STRATÉGIE DU ROI
              </h2>
            </div>

            {/* Middle Column - Two blocks */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-[#191924] mb-4">
                  Stabilité & Confiance
                </h3>
                <p className="text-[#444240] leading-relaxed">
                  Nous construisons des bases solides, durables et fiables.
                </p>
                <p className="text-[#444240] leading-relaxed mt-2">
                  → Objectif : créer des actifs qui résistent dans le temps.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#191924] mb-4">
                  Agilité stratégique
                </h3>
                <p className="text-[#444240] leading-relaxed">
                  Nous nous adaptons rapidement aux dynamiques du marché.
                </p>
                <p className="text-[#444240] leading-relaxed mt-2">
                  → Objectif : transformer chaque contrainte en opportunité.
                </p>
              </div>
            </div>

            {/* Right Column - Two blocks */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-[#191924] mb-4">
                  Intelligence collective
                </h3>
                <p className="text-[#444240] leading-relaxed">
                  Aucun projet ne se construit seul.
                </p>
                <p className="text-[#444240] leading-relaxed mt-2">
                  → Objectif : activer les bons talents au bon moment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#191924] mb-4">
                  Création orientée performance
                </h3>
                <p className="text-[#444240] leading-relaxed">
                  La créativité n'est pas une fin. C'est un levier.
                </p>
                <p className="text-[#444240] leading-relaxed mt-2">
                  → Objectif : générer un impact réel, mesurable et scalable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Timeline animation */
        @keyframes timeline-fill {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }

        .timeline-active::before {
          animation: timeline-fill 0.8s ease-out forwards;
        }

        /* Subtle zoom animation for images */
        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
        `
      }} />
    </div>
  )
}