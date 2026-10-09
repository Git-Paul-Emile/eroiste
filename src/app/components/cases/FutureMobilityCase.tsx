'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Calendar, Users, Car, Zap, Wifi, MapPin, Battery, Shield } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Button } from '../ui/button'

interface CasePageProps {
  onBack: () => void
}

export function FutureMobilityCase({ onBack }: CasePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(0)
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

  const mobilityMetrics = [
    { label: "Fuel Efficiency", value: "+75%", icon: <Battery className="w-6 h-6" /> },
    { label: "Connected Vehicles", value: "2.5M+", icon: <Wifi className="w-6 h-6" /> },
    { label: "Safety Improvement", value: "+90%", icon: <Shield className="w-6 h-6" /> },
    { label: "Route Optimization", value: "-40% Time", icon: <MapPin className="w-6 h-6" /> }
  ]

  const technologies = [
    "IoT Sensors & Telematics", "5G Connectivity", "AI Route Optimization", "Blockchain Security",
    "Electric Vehicle Integration", "Real-time Analytics", "Cloud Infrastructure", "Mobile Applications"
  ]

  const developmentPhases = [
    {
      phase: "Research & Innovation",
      duration: "6 weeks",
      description: "Deep research into automotive technology trends and mobility solutions.",
      deliverables: ["Market Research", "Technology Assessment", "Innovation Roadmap", "Prototype Planning"]
    },
    {
      phase: "Smart Platform Design",
      duration: "8 weeks", 
      description: "Designing intelligent transportation systems and connected vehicle architecture.",
      deliverables: ["System Architecture", "UX/UI Design", "IoT Integration Plan", "Security Framework"]
    },
    {
      phase: "Connected Development",
      duration: "16 weeks",
      description: "Building comprehensive mobility platform with IoT and AI integration.",
      deliverables: ["IoT Platform", "Mobile Apps", "AI Algorithms", "Vehicle Integration"]
    },
    {
      phase: "Smart Deployment",
      duration: "4 weeks",
      description: "Rolling out smart transportation solutions with continuous monitoring.",
      deliverables: ["Fleet Deployment", "Real-time Monitoring", "Performance Analytics", "Support Systems"]
    }
  ]

  const smartFeatures = [
    {
      title: "Intelligent Route Planning",
      description: "AI-powered routing that adapts to traffic, weather, and road conditions in real-time.",
      icon: <MapPin className="w-8 h-8" />,
      metrics: "40% faster routes"
    },
    {
      title: "Predictive Maintenance",
      description: "IoT sensors monitor vehicle health and predict maintenance needs before issues occur.",
      icon: <Car className="w-8 h-8" />,
      metrics: "85% reduced breakdowns"
    },
    {
      title: "Energy Optimization",
      description: "Smart charging and energy management for electric and hybrid vehicle fleets.",
      icon: <Battery className="w-8 h-8" />,
      metrics: "75% improved efficiency"
    },
    {
      title: "Connected Safety Systems",
      description: "Real-time safety monitoring with automatic emergency response capabilities.",
      icon: <Shield className="w-8 h-8" />,
      metrics: "90% safety improvement"
    }
  ]

  const vehicleTypes = [
    { name: "Electric Vehicles", percentage: 45, color: "#10b981" },
    { name: "Hybrid Systems", percentage: 30, color: "#f59e0b" },
    { name: "Connected Cars", percentage: 85, color: "#3b82f6" },
    { name: "Autonomous Features", percentage: 60, color: "#8b5cf6" }
  ]

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature((prev) => (prev + 1) % smartFeatures.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [smartFeatures.length])

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
                  Automotive Innovation
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Future Mobility
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Smart transportation solutions and connected vehicle platforms that revolutionize 
                urban mobility through intelligent automation and sustainable technology integration.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">34 weeks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">18 specialists</p>
                  </div>
                </div>
              </div>

              {/* Innovation Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800/30 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Next-Gen Transportation Technology</span>
              </div>
            </div>

            {/* Right Content - Future Vehicle Visualization */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647658152065-cce38706e21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBtb2JpbGl0eXxlbnwxfHx8fDE3NTc1Mzg5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Future Mobility Solutions"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent rounded-2xl" />
                
                {/* Smart connectivity indicators */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute top-8 right-12 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                
                {/* Connection network overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                  <circle cx="80" cy="60" r="3" fill="#3b82f6">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="80" r="2" fill="#06b6d4">
                    <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="240" r="4" fill="#8b5cf6">
                    <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <line x1="80" y1="60" x2="320" y2="80" stroke="#3b82f6" strokeWidth="1" opacity="0.6" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="320" y1="80" x2="100" y2="240" stroke="#06b6d4" strokeWidth="1" opacity="0.6" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.5s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobility Innovation Metrics */}
      <section ref={sectionRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Transportation Revolution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in efficiency, safety, and sustainability through smart mobility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobilityMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-background rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features Interactive */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Smart Mobility Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced features that transform traditional transportation into intelligent, connected mobility solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6">
              {smartFeatures.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedFeature === index
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20'
                      : 'border-border bg-card hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${
                      selectedFeature === index ? 'bg-blue-500 text-white' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-foreground">{feature.title}</h4>
                        <span className="text-sm font-medium text-blue-600">{feature.metrics}</span>
                      </div>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Visualization */}
            <div className="relative h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl border border-border overflow-hidden">
              {/* Vehicle Dashboard Simulation */}
              <div className="absolute inset-0 p-8">
                <div className="h-full bg-gray-900 rounded-lg p-6 text-white relative overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold">{smartFeatures[selectedFeature].title}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400">CONNECTED</span>
                    </div>
                  </div>

                  {/* Dynamic Content Based on Selected Feature */}
                  <div className="space-y-4">
                    {selectedFeature === 0 && (
                      <>
                        <div className="flex items-center space-x-4">
                          <MapPin className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="text-sm text-gray-300">Current Route</p>
                            <p className="font-medium">Downtown → Airport</p>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded p-3">
                          <p className="text-xs text-gray-400 mb-1">ETA Optimization</p>
                          <div className="bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full w-3/4 transition-all duration-1000" />
                          </div>
                          <p className="text-xs text-blue-400 mt-1">40% faster route calculated</p>
                        </div>
                      </>
                    )}
                    
                    {selectedFeature === 1 && (
                      <>
                        <div className="flex items-center space-x-4">
                          <Car className="w-6 h-6 text-green-400" />
                          <div>
                            <p className="text-sm text-gray-300">Vehicle Health</p>
                            <p className="font-medium text-green-400">Optimal</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-800 rounded p-2 text-center">
                            <p className="text-xs text-gray-400">Engine</p>
                            <p className="text-green-400 font-bold">98%</p>
                          </div>
                          <div className="bg-gray-800 rounded p-2 text-center">
                            <p className="text-xs text-gray-400">Brakes</p>
                            <p className="text-green-400 font-bold">95%</p>
                          </div>
                        </div>
                      </>
                    )}

                    {selectedFeature === 2 && (
                      <>
                        <div className="flex items-center space-x-4">
                          <Battery className="w-6 h-6 text-yellow-400" />
                          <div>
                            <p className="text-sm text-gray-300">Energy Status</p>
                            <p className="font-medium">Optimizing</p>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded p-3">
                          <p className="text-xs text-gray-400 mb-1">Efficiency Improvement</p>
                          <div className="bg-gray-700 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full w-4/5 transition-all duration-1000" />
                          </div>
                          <p className="text-xs text-yellow-400 mt-1">75% efficiency gained</p>
                        </div>
                      </>
                    )}

                    {selectedFeature === 3 && (
                      <>
                        <div className="flex items-center space-x-4">
                          <Shield className="w-6 h-6 text-purple-400" />
                          <div>
                            <p className="text-sm text-gray-300">Safety Systems</p>
                            <p className="font-medium text-purple-400">Active</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Collision Detection</span>
                            <span className="text-green-400">✓ Active</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Emergency Response</span>
                            <span className="text-green-400">✓ Ready</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Floating particles for tech feel */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Integration Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Vehicle Integration</h3>
            <p className="text-muted-foreground">
              Comprehensive integration across different vehicle types and transportation modes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-foreground">{vehicle.name}</h4>
                  <span className="text-lg font-bold" style={{ color: vehicle.color }}>
                    {vehicle.percentage}%
                  </span>
                </div>
                <div className="bg-border rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ 
                      backgroundColor: vehicle.color,
                      width: `${vehicle.percentage}%`
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Integration rate across fleet
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Mobility Technology Stack</h3>
            <p className="text-muted-foreground">
              Advanced technologies enabling the next generation of connected and autonomous transportation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-lg border border-border text-center hover:border-blue-500/50 transition-colors duration-200 group"
              >
                <Wifi className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Development Journey</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic development approach ensuring cutting-edge mobility solutions and seamless integration.
            </p>
          </div>

          <div className="space-y-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="flex">
                {/* Timeline line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-background shadow-lg" />
                  {index < developmentPhases.length - 1 && (
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

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "The future mobility platform has revolutionized our transportation fleet. The intelligent 
            routing and predictive maintenance have transformed our operational efficiency and sustainability."
          </blockquote>
          <div className="text-muted-foreground">
            <p className="font-medium">David Kumar</p>
            <p>Head of Innovation, SmartTransit Corp</p>
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