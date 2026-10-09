'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle, Clock, Globe, Zap } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Button } from '../ui/button'

interface CasePageProps {
  onBack: () => void
}

export function DigitalEcosystemCase({ onBack }: CasePageProps) {
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

  const metrics = [
    { label: "ROI Increase", value: "340%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "User Engagement", value: "+180%", icon: <Users className="w-6 h-6" /> },
    { label: "Time to Market", value: "-60%", icon: <Clock className="w-6 h-6" /> },
    { label: "Global Reach", value: "45 Countries", icon: <Globe className="w-6 h-6" /> }
  ]

  const technologies = [
    "React & Next.js", "Node.js & Express", "MongoDB & Redis", "AWS Cloud Infrastructure",
    "Docker & Kubernetes", "GraphQL API", "TypeScript", "Tailwind CSS"
  ]

  const phases = [
    {
      phase: "Discovery & Research",
      duration: "2 weeks",
      description: "In-depth market analysis and user research to understand business requirements.",
      deliverables: ["Market Research Report", "User Personas", "Technical Requirements", "Project Roadmap"]
    },
    {
      phase: "Design & Architecture",
      duration: "3 weeks", 
      description: "Creating comprehensive design system and technical architecture.",
      deliverables: ["Design System", "System Architecture", "API Documentation", "Prototypes"]
    },
    {
      phase: "Development & Integration",
      duration: "8 weeks",
      description: "Full-stack development with continuous integration and testing.",
      deliverables: ["MVP Platform", "Admin Dashboard", "Mobile App", "API Integration"]
    },
    {
      phase: "Testing & Deployment",
      duration: "2 weeks",
      description: "Comprehensive testing, optimization, and production deployment.",
      deliverables: ["QA Testing", "Performance Optimization", "Production Deployment", "User Training"]
    }
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                  Tech Platform
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Digital Ecosystem
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive digital transformation platform that revolutionized enterprise operations 
                through cutting-edge technology and innovative user experience design.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">15 weeks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">8 specialists</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWNvc3lzdGVtfGVufDF8fHx8MTc1NzUzODk4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital Ecosystem Platform"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section ref={sectionRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable impact delivered through strategic implementation and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">The Challenge</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our client, a Fortune 500 enterprise, was struggling with fragmented digital systems 
                  that hindered operational efficiency and customer experience. Legacy infrastructure 
                  created silos between departments, resulting in:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Data inconsistencies across 15+ different platforms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Manual processes increasing error rates by 40%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Customer service response times exceeding 48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Limited scalability for international expansion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Solution</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We designed and implemented a comprehensive digital ecosystem that unified all 
                  business operations into a single, scalable platform powered by modern technologies 
                  and intelligent automation.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Unified data architecture with real-time synchronization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-powered automation reducing manual tasks by 85%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Intelligent customer service with 2-minute response times</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cloud-native architecture supporting global scaling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Technology Stack</h3>
            <p className="text-muted-foreground">
              Cutting-edge technologies carefully selected for optimal performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Project Timeline</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strategic approach with clearly defined phases ensuring successful delivery.
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex">
                {/* Timeline line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  {index < phases.length - 1 && (
                    <div className="w-px h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Phase content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h4 className="text-xl font-bold text-foreground">{phase.phase}</h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded border"
                      >
                        {deliverable}
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
      <section className="py-16 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "The digital ecosystem transformation exceeded our expectations. The platform's 
            intuitive design and powerful automation capabilities have revolutionized how we 
            operate globally."
          </blockquote>
          <div className="text-muted-foreground">
            <p className="font-medium">Sarah Johnson</p>
            <p>Chief Technology Officer, Fortune 500 Enterprise</p>
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