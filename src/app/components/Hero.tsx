'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create floating particles animation
    const createParticle = () => {
      if (!particlesRef.current) return

      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-amber-500 rounded-full opacity-30 animate-pulse'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 2 + 's'
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's'
      
      particlesRef.current.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 5000)
    }

    // Create particles at intervals
    const interval = setInterval(createParticle, 800)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-[640px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-amber-50/20 dark:to-amber-950/20">
      {/* Animated background particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nous couronons les {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 animate-pulse">
             champions de la tranformation africaine
            </span>{' '}
            journey
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
             Conception d'expériences digitales, Produits technologiques et de stratégies de croissance pour les organisations ambitieuses. 
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
             ECRIRE AU ROI ?
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Floating elements animation */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-amber-200 dark:bg-amber-800 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '2s' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}