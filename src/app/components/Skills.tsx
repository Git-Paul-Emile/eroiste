'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Palette, Zap, Globe, Smartphone, Database, Brain, Shield } from 'lucide-react'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Skill {
  icon: React.ElementType
  title: string
  description: string
  level: number
  technologies: string[]
  color: string
}

interface ServiceCard {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  gradient: string
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('frontend')
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

  const skillCategories = {
    frontend: [
      {
        icon: Code,
        title: "Développement Frontend",
        description: "Interfaces utilisateur modernes et performantes",
        level: 95,
        technologies: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
        color: "blue"
      },
      {
        icon: Palette,
        title: "Design UI/UX",
        description: "Expériences utilisateur intuitives et engageantes",
        level: 90,
        technologies: ["Figma", "Adobe Creative Suite", "Framer", "Sketch"],
        color: "purple"
      },
      {
        icon: Smartphone,
        title: "Développement Mobile",
        description: "Applications natives et cross-platform",
        level: 85,
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        color: "green"
      }
    ],
    backend: [
      {
        icon: Database,
        title: "Développement Backend",
        description: "Architectures robustes et scalables",
        level: 92,
        technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
        color: "orange"
      },
      {
        icon: Shield,
        title: "Sécurité & DevOps",
        description: "Infrastructure sécurisée et automatisée",
        level: 88,
        technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Security"],
        color: "red"
      },
      {
        icon: Brain,
        title: "Intelligence Artificielle",
        description: "Solutions d'IA et Machine Learning",
        level: 80,
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
        color: "indigo"
      }
    ],
    innovation: [
      {
        icon: Zap,
        title: "Blockchain & Web3",
        description: "Applications décentralisées et crypto",
        level: 75,
        technologies: ["Solidity", "Ethereum", "IPFS", "DeFi", "NFT"],
        color: "yellow"
      },
      {
        icon: Globe,
        title: "IoT & Edge Computing",
        description: "Objets connectés et computing distribué",
        level: 78,
        technologies: ["Arduino", "Raspberry Pi", "MQTT", "Edge AI"],
        color: "teal"
      },
      {
        icon: Code,
        title: "Réalité Virtuelle/Augmentée",
        description: "Expériences immersives innovantes",
        level: 70,
        technologies: ["Unity", "Three.js", "WebXR", "ARKit", "Oculus"],
        color: "pink"
      }
    ]
  }

  const services: ServiceCard[] = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Applications web sur mesure avec les dernières technologies",
      features: ["Sites vitrines", "Applications SPA/PWA", "E-commerce", "Plateformes complexes"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Apps natives et hybrides pour iOS et Android",
      features: ["Apps natives", "Cross-platform", "UI/UX mobile", "Optimisation performance"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Conception centrée utilisateur et identités visuelles",
      features: ["Design systems", "Prototypage", "Tests utilisateurs", "Branding"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Intégration d'IA pour automatiser et optimiser",
      features: ["Chatbots intelligents", "Analyse prédictive", "Computer Vision", "NLP"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Consulting Tech",
      description: "Accompagnement stratégique et audit technique",
      features: ["Architecture système", "Audit sécurité", "Stratégie digitale", "Formation"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation Labs",
      description: "R&D et prototypage de solutions avant-gardistes",
      features: ["Blockchain", "IoT", "AR/VR", "Proof of Concept"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200' },
      red: { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-200' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-600', border: 'border-teal-200' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-200' }
    }
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.blue[type]
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Nos <span className="text-blue-600">Compétences</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Une expertise technique pointue au service de vos ambitions digitales. 
            Découvrez notre stack technologique et nos domaines de spécialisation.
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section ref={sectionRef} className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                    activeTab === category
                      ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                  }`}
                >
                  {category === 'frontend' && 'Frontend & Design'}
                  {category === 'backend' && 'Backend & Infrastructure'}
                  {category === 'innovation' && 'Innovation & Emerging Tech'}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => (
              <div
                key={index}
                className={`group p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 ${getColorClass(skill.color, 'bg')} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Expertise</span>
                    <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded-full ${getColorClass(skill.color, 'text')} ${getColorClass(skill.color, 'border')} bg-white dark:bg-gray-800 border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nos <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes pour accompagner votre transformation digitale, 
              de la conception à la mise en production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Notre <span className="text-green-600">Stack</span> Technologique
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous maîtrisons un écosystème technologique complet pour répondre 
              à tous vos besoins de développement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Vue.js', 'Node.js', 'Python', 'TypeScript', 'Docker',
              'AWS', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'Flutter',
              'TensorFlow', 'Figma', 'Three.js', 'Blockchain', 'Kubernetes', 'Redis'
            ].map((tech, index) => (
              <div
                key={index}
                className="group p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {tech.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer vos idées en réalité ?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Discutons de votre projet et découvrons ensemble comment nos compétences 
            peuvent donner vie à votre vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Démarrer un Projet
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Demander un Devis
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
    </div>
  )
}