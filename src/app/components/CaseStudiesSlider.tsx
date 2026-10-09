'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface CaseStudy {
  id: number
  title: string
  description: string
  tag: string
  image: string
  gradient: string
}

export function CaseStudiesSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Transformation Digitale FinTech",
      description: "Redéfinition complète de l'expérience utilisateur pour une plateforme financière innovante",
      tag: "Tech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzUzODk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-yellow-600/20 to-orange-600/20"
    },
    {
      id: 2,
      title: "Identity Visuelle E-commerce",
      description: "Création d'une marque forte avec un système de design scalable pour le retail digital",
      tag: "Design",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3NDcwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      id: 3,
      title: "Plateforme Collaborative",
      description: "Développement d'un espace de travail digital avec IA intégrée et collaboration temps réel",
      tag: "Innovation",
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzQyNDk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-green-600/20 to-teal-600/20"
    },
    {
      id: 4,
      title: "Campagne Motion Design",
      description: "Storytelling animé pour le lancement produit avec effets cinématographiques avancés",
      tag: "Animation",
      image: "https://images.unsplash.com/photo-1647658152065-cce38706e21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NTc1Mzg5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-pink-600/20 to-red-600/20"
    },
    {
      id: 5,
      title: "App Mobile Healthcare",
      description: "Interface intuitive pour la télémédecine avec intégration IoT et suivi patient",
      tag: "Mobile",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwfGVufDF8fHx8MTc1NzUxNzg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-indigo-600/20 to-blue-600/20"
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [caseStudies.length])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  return (
    <section 
      ref={sectionRef} 
      className="py-16 lg:py-24 bg-gray-900 dark:bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Études de Cas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nous transformons les défis en solutions innovantes 
            grâce à notre expertise créative et technologique.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Wrapper */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="min-w-full relative flex items-center justify-center"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} backdrop-blur-[2px]`} />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    {/* Tag */}
                    <div className="inline-block mb-6">
                      <span className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full text-sm">
                        {study.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-4xl font-bold mb-6">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                      {study.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                    >
                      Voir le Projet
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="hidden lg:flex justify-center mt-8 space-x-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === activeIndex
                    ? 'scale-110 ring-2 ring-yellow-500'
                    : 'scale-90 opacity-60 hover:opacity-80'
                }`}
              >
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-20 h-14 object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-in {
            animation: slideIn 0.8s ease-out forwards;
          }
        `
      }} />
    </section>
  )
}