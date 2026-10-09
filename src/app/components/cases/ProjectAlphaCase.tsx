'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Calendar, Users, Zap, Brain, Cpu, Bot, Lightbulb, Shield } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Button } from '../ui/button'

interface CasePageProps {
  onBack: () => void
}

export function ProjectAlphaCase({ onBack }: CasePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeDemo, setActiveDemo] = useState(0)
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

  const innovations = [
    { label: "AI Accuracy", value: "99.7%", icon: <Brain className="w-6 h-6" /> },
    { label: "Processing Speed", value: "10x Faster", icon: <Zap className="w-6 h-6" /> },
    { label: "Cost Reduction", value: "-75%", icon: <Cpu className="w-6 h-6" /> },
    { label: "Automation Level", value: "95%", icon: <Bot className="w-6 h-6" /> }
  ]

  const technologies = [
    "Machine Learning", "Neural Networks", "Natural Language Processing", "Computer Vision",
    "Deep Learning", "PyTorch & TensorFlow", "Kubernetes & Docker", "Cloud AI Services"
  ]

  const researchPhases = [
    {
      phase: "Research & Analysis",
      duration: "4 weeks",
      description: "Comprehensive research into AI capabilities and market requirements.",
      objectives: ["Market Analysis", "Technology Assessment", "Feasibility Study", "Use Case Definition"]
    },
    {
      phase: "Prototype Development",
      duration: "6 weeks", 
      description: "Building and testing initial AI prototypes with core functionalities.",
      objectives: ["MVP Development", "Algorithm Training", "Performance Testing", "User Feedback"]
    },
    {
      phase: "Advanced Implementation",
      duration: "8 weeks",
      description: "Full-scale development with advanced AI features and optimization.",
      objectives: ["Production System", "AI Model Optimization", "Integration Testing", "Security Implementation"]
    },
    {
      phase: "Deployment & Scaling",
      duration: "3 weeks",
      description: "Production deployment with continuous monitoring and scaling capabilities.",
      objectives: ["Production Launch", "Performance Monitoring", "Auto-scaling Setup", "Documentation"]
    }
  ]

  const aiCapabilities = [
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting with 99.7% accuracy using machine learning algorithms.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Real-time Processing",
      description: "Lightning-fast data processing and decision making in milliseconds.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Intelligent Automation",
      description: "Smart automation that learns and adapts to optimize workflows.",
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: "Secure AI Infrastructure",
      description: "Enterprise-grade security with end-to-end encryption and privacy protection.",
      icon: <Shield className="w-8 h-8" />
    }
  ]

  // Auto-cycle through demos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % aiCapabilities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [aiCapabilities.length])

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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50/20 via-background to-purple-50/10 dark:from-blue-950/10 dark:via-background dark:to-purple-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium px-4 py-2 rounded-full">
                  Innovation Lab
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Project Alpha
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Next-generation AI-powered solutions and prototypes that push the boundaries of 
                artificial intelligence, delivering unprecedented automation and intelligent insights.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">21 weeks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">12 experts</p>
                  </div>
                </div>
              </div>

              {/* Innovation Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800/30 rounded-full px-4 py-2">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Patent-Pending Technology</span>
              </div>
            </div>

            {/* Right Content - AI Visualization */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbiUyMGxhYnxlbnwxfHx8fDE3NTc3NjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Innovation Lab"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent rounded-2xl" />
                
                {/* Floating AI elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute top-12 right-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Neural network pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    <defs>
                      <pattern id="neural-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="currentColor" className="text-blue-400">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" className="text-blue-300" opacity="0.5" />
                        <line x1="20" y1="20" x2="20" y2="40" stroke="currentColor" strokeWidth="1" className="text-blue-300" opacity="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#neural-pattern)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Innovations */}
      <section ref={sectionRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">AI Breakthrough Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Revolutionary improvements in performance, efficiency, and intelligence through advanced AI implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-background rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full mb-4">
                  {innovation.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{innovation.value}</div>
                <div className="text-muted-foreground">{innovation.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Demo */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">AI Capabilities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced artificial intelligence features that redefine what's possible in automation and decision-making.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Capabilities List */}
            <div className="space-y-6">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeDemo === index
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20'
                      : 'border-border bg-card hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${
                      activeDemo === index ? 'bg-blue-500 text-white' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                    }`}>
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{capability.title}</h4>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Visualization */}
            <div className="relative h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl border border-border overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Demo Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    {aiCapabilities[activeDemo].icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {aiCapabilities[activeDemo].title}
                  </h4>
                </div>
                
                {/* Animated Progress Indicator */}
                <div className="w-full max-w-xs">
                  <div className="bg-border rounded-full h-2 mb-4">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: activeDemo === 0 ? '99%' : activeDemo === 1 ? '95%' : activeDemo === 2 ? '98%' : '96%' }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Processing: {activeDemo === 0 ? '99.7%' : activeDemo === 1 ? '10x Speed' : activeDemo === 2 ? '98% Automated' : '256-bit Encrypted'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">AI Technology Stack</h3>
            <p className="text-muted-foreground">
              Cutting-edge AI frameworks and technologies powering next-generation solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg border border-border text-center hover:border-blue-500/50 transition-colors duration-200 group"
              >
                <Brain className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Research & Development Timeline</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Systematic approach to AI innovation ensuring breakthrough results and practical implementation.
            </p>
          </div>

          <div className="space-y-8">
            {researchPhases.map((phase, index) => (
              <div key={index} className="flex">
                {/* Timeline line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-background shadow-lg" />
                  {index < researchPhases.length - 1 && (
                    <div className="w-px h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Phase content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h4 className="text-xl font-bold text-foreground">{phase.phase}</h4>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {phase.objectives.map((objective, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded border"
                      >
                        {objective}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Testimonial */}
      <section className="py-16 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "Project Alpha represents a quantum leap in AI capabilities. The accuracy and speed 
            improvements have transformed our entire operational framework and competitive advantage."
          </blockquote>
          <div className="text-muted-foreground">
            <p className="font-medium">Dr. Elena Rodriguez</p>
            <p>Chief Innovation Officer, TechForward Inc.</p>
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