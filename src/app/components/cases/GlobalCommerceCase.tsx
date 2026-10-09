'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Calendar, Users, Globe, ShoppingCart, Package, TrendingUp, MapPin, CreditCard } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Button } from '../ui/button'

interface CasePageProps {
  onBack: () => void
}

export function GlobalCommerceCase({ onBack }: CasePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState(0)
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

  const globalMetrics = [
    { label: "Global Revenue", value: "+450%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Active Markets", value: "67 Countries", icon: <Globe className="w-6 h-6" /> },
    { label: "Order Processing", value: "99.9% Uptime", icon: <Package className="w-6 h-6" /> },
    { label: "Transaction Volume", value: "$2.8B Annual", icon: <CreditCard className="w-6 h-6" /> }
  ]

  const platforms = [
    "React & Next.js", "Node.js Microservices", "MongoDB & Redis", "Kubernetes Orchestration",
    "Payment Gateway APIs", "Logistics Integration", "Multi-language Support", "Analytics Dashboard"
  ]

  const developmentPhases = [
    {
      phase: "Market Research & Strategy",
      duration: "3 weeks",
      description: "Comprehensive analysis of global markets and logistics requirements.",
      deliverables: ["Market Analysis", "Competitive Research", "Business Strategy", "Technical Architecture"]
    },
    {
      phase: "Platform Architecture",
      duration: "4 weeks", 
      description: "Designing scalable, multi-region e-commerce infrastructure.",
      deliverables: ["System Design", "Database Schema", "API Architecture", "Security Framework"]
    },
    {
      phase: "Core Development",
      duration: "12 weeks",
      description: "Building robust e-commerce platform with integrated logistics.",
      deliverables: ["E-commerce Platform", "Payment Integration", "Inventory Management", "Order Processing"]
    },
    {
      phase: "Global Integration",
      duration: "6 weeks",
      description: "Implementing multi-region deployment and logistics partnerships.",
      deliverables: ["Global Deployment", "Logistics Integration", "Currency Support", "Compliance Setup"]
    }
  ]

  const regions = [
    {
      name: "North America",
      growth: "+340%",
      orders: "2.4M",
      description: "Strong market penetration with premium logistics partnerships"
    },
    {
      name: "Europe",
      growth: "+290%", 
      orders: "1.8M",
      description: "Multi-language support across 27 countries with GDPR compliance"
    },
    {
      name: "Asia Pacific",
      growth: "+520%",
      orders: "3.2M", 
      description: "Rapid expansion with mobile-first approach and local payment methods"
    },
    {
      name: "Latin America",
      growth: "+180%",
      orders: "980K",
      description: "Emerging market success with localized currency and logistics solutions"
    }
  ]

  const features = [
    {
      title: "Smart Inventory Management",
      description: "AI-powered inventory optimization across global warehouses",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Multi-Currency Processing",
      description: "Real-time currency conversion with competitive exchange rates",
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: "Global Logistics Network",
      description: "Integrated shipping solutions with 200+ logistics partners worldwide",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive business intelligence and market insights dashboard",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ]

  // Auto-cycle through regions
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedRegion((prev) => (prev + 1) % regions.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [regions.length])

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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50/20 via-background to-green-50/10 dark:from-emerald-950/10 dark:via-background dark:to-green-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm font-medium px-4 py-2 rounded-full">
                  E-commerce Platform
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Global Commerce
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                International marketplace with advanced logistics integration, enabling seamless 
                cross-border commerce and revolutionizing global e-commerce operations.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">25 weeks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">15 specialists</p>
                  </div>
                </div>
              </div>

              {/* Global Scale Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200 dark:border-emerald-800/30 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Operating in 67 Countries</span>
              </div>
            </div>

            {/* Right Content - Global Map Visualization */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzU3NDcwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Global E-commerce Platform"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent rounded-2xl" />
                
                {/* Global connection indicators */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <div className="absolute top-8 right-8 w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-8 left-1/3 w-4 h-4 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                  <line x1="50" y1="50" x2="350" y2="80" stroke="#10b981" strokeWidth="1" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="150" y1="250" x2="300" y2="100" stroke="#10b981" strokeWidth="1" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.5s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Performance Metrics */}
      <section ref={sectionRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transformative results achieved through strategic global expansion and advanced logistics integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-background rounded-xl border border-border hover:border-emerald-500/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Performance */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Regional Performance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic expansion across key global markets with localized solutions and optimized logistics networks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Region Selector */}
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedRegion(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedRegion === index
                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                      : 'border-border bg-card hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-foreground">{region.name}</h4>
                    <span className="text-emerald-600 font-bold">{region.growth}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{region.orders} orders</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{region.description}</p>
                </div>
              ))}
            </div>

            {/* Performance Visualization */}
            <div className="relative h-80 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl border border-border overflow-hidden">
              {/* World Map Background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Simplified world map outline */}
                  <path
                    d="M50 150 Q100 120 150 140 Q200 130 250 145 Q300 140 350 150 Q320 180 280 170 Q220 180 180 175 Q130 185 100 175 Q75 165 50 150"
                    fill="currentColor"
                    className="text-emerald-300"
                  />
                </svg>
              </div>

              {/* Regional Data Display */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {regions[selectedRegion].name}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {regions[selectedRegion].description}
                  </p>
                </div>
                
                {/* Growth Chart */}
                <div className="w-full max-w-xs">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <span className="text-lg font-bold text-emerald-600">{regions[selectedRegion].growth}</span>
                  </div>
                  <div className="bg-border rounded-full h-3">
                    <div 
                      className="bg-emerald-500 h-3 rounded-full transition-all duration-1000"
                      style={{ 
                        width: selectedRegion === 0 ? '85%' : selectedRegion === 1 ? '70%' : selectedRegion === 2 ? '95%' : '45%'
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">Orders: {regions[selectedRegion].orders}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Platform Features</h3>
            <p className="text-muted-foreground">
              Comprehensive e-commerce capabilities designed for global scale and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Infrastructure */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Technology Infrastructure</h3>
            <p className="text-muted-foreground">
              Robust, scalable technology stack engineered for global e-commerce operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-lg border border-border text-center hover:border-emerald-500/50 transition-colors duration-200 group"
              >
                <Globe className="w-6 h-6 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Development Timeline</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic development approach ensuring seamless global deployment and market entry.
            </p>
          </div>

          <div className="space-y-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="flex">
                {/* Timeline line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-background shadow-lg" />
                  {index < developmentPhases.length - 1 && (
                    <div className="w-px h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Phase content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h4 className="text-xl font-bold text-foreground">{phase.phase}</h4>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm rounded-full">
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

      {/* Success Story */}
      <section className="py-16 bg-gradient-to-r from-emerald-50/50 via-transparent to-green-50/50 dark:from-emerald-950/10 dark:via-transparent dark:to-green-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "The global commerce platform transformed our business model completely. We went from 
            regional operations to international success, with seamless logistics and exceptional user experience."
          </blockquote>
          <div className="text-muted-foreground">
            <p className="font-medium">Marcus Chen</p>
            <p>CEO, WorldTrade Solutions</p>
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