'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Palette, Sparkles, Eye, Heart } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Button } from '../ui/button'

interface CasePageProps {
  onBack: () => void
}

export function LuxuryBrandCase({ onBack }: CasePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const achievements = [
    { label: "Brand Recognition", value: "+250%", icon: <Eye className="w-6 h-6" /> },
    { label: "Customer Loyalty", value: "+190%", icon: <Heart className="w-6 h-6" /> },
    { label: "Premium Positioning", value: "Top 5%", icon: <Award className="w-6 h-6" /> },
    { label: "Market Share", value: "+85%", icon: <TrendingUp className="w-6 h-6" /> }
  ]

  const brandElements = [
    "Logo Design & Identity", "Typography System", "Color Palette", "Brand Guidelines",
    "Packaging Design", "Digital Assets", "Print Collateral", "Brand Photography"
  ]

  const designProcess = [
    {
      step: "Brand Discovery",
      duration: "1 week",
      description: "Deep dive into brand values, target audience, and market positioning.",
      activities: ["Brand Workshop", "Competitor Analysis", "Target Persona Definition", "Brand Positioning"]
    },
    {
      step: "Creative Conceptualization",
      duration: "2 weeks", 
      description: "Developing creative concepts and visual direction for the brand identity.",
      activities: ["Mood Boards", "Concept Sketches", "Style Exploration", "Creative Presentation"]
    },
    {
      step: "Design Development",
      duration: "3 weeks",
      description: "Refining chosen concepts into comprehensive brand identity system.",
      activities: ["Logo Development", "Color System", "Typography Selection", "Brand Assets"]
    },
    {
      step: "Brand Implementation",
      duration: "2 weeks",
      description: "Creating brand guidelines and implementing across all touchpoints.",
      activities: ["Brand Guidelines", "Application Design", "Digital Templates", "Launch Strategy"]
    }
  ]

  const colorPalette = [
    { name: "Midnight Black", color: "#0A0A0B", description: "Elegance & Sophistication" },
    { name: "Royal Gold", color: "#D4AF37", description: "Luxury & Premium" },
    { name: "Pearl White", color: "#FEFEFE", description: "Purity & Refinement" },
    { name: "Champagne", color: "#F7E7CE", description: "Warmth & Exclusivity" }
  ]

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Navigation */}
      <div className="fixed top-20 left-4 z-50">
        <Button
          onClick={onBack}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cases
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50/20 via-background to-yellow-50/10 dark:from-amber-950/10 dark:via-background dark:to-yellow-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium px-4 py-2 rounded-full">
                  Brand Identity
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Luxury Brand Strategy
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Premium brand positioning and sophisticated visual identity creation for an exclusive 
                luxury market, establishing unparalleled brand recognition and customer loyalty.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">8 weeks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">5 designers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4MjQwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luxury Brand Design"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent rounded-2xl" />
                
                {/* Floating luxury elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-amber-400 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Achievements */}
      <section ref={sectionRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Brand Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable transformation in brand perception and market positioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-background rounded-xl border border-border hover:border-amber-500/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-full mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Brand Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Brand Philosophy</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our approach to luxury branding transcends mere aesthetics. We craft identities 
                  that embody sophistication, exclusivity, and timeless elegance while maintaining 
                  contemporary relevance.
                </p>
                <p>
                  Every element of the brand identity was meticulously designed to communicate 
                  premium quality and establish an emotional connection with discerning clientele 
                  who value authenticity and craftsmanship.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
                <h4 className="font-bold text-foreground mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 text-amber-600 mr-2" />
                  Brand Values
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>Uncompromising Excellence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>Timeless Sophistication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>Exclusive Heritage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>Authentic Craftsmanship</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Color Psychology</h3>
              <p className="text-muted-foreground mb-8">
                Our carefully curated color palette reflects luxury, sophistication, and exclusivity 
                while ensuring versatility across all brand applications.
              </p>
              
              <div className="space-y-4">
                {colorPalette.map((color, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border">
                    <div 
                      className="w-12 h-12 rounded-lg border-2 border-border shadow-sm"
                      style={{ backgroundColor: color.color }}
                    />
                    <div>
                      <h4 className="font-medium text-foreground">{color.name}</h4>
                      <p className="text-sm text-muted-foreground">{color.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{color.color}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Elements */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Brand Elements</h3>
            <p className="text-muted-foreground">
              Comprehensive brand identity system covering all touchpoints and applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandElements.map((element, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg border border-border text-center hover:border-amber-500/50 transition-colors duration-200 group"
              >
                <Palette className="w-6 h-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{element}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Design Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring every aspect of the brand identity resonates with luxury standards.
            </p>
          </div>

          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <div key={index} className="flex">
                {/* Timeline line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-background shadow-lg" />
                  {index < designProcess.length - 1 && (
                    <div className="w-px h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Phase content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h4 className="text-xl font-bold text-foreground">{phase.step}</h4>
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {phase.activities.map((activity, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded border"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-gradient-to-r from-amber-50/50 via-transparent to-amber-50/50 dark:from-amber-950/10 dark:via-transparent dark:to-amber-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "The new brand identity perfectly captures our essence of luxury and sophistication. 
            Our customers immediately connected with the refined aesthetic and premium positioning."
          </blockquote>
          <div className="text-muted-foreground">
            <p className="font-medium">Alessandro Fontaine</p>
            <p>Creative Director, Maison Luxe</p>
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
        `
      }} />
    </div>
  )
}