'use client'

import { useState } from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { ServiceNavSlider } from '../ServiceNavSlider'
import heroVideo from '../../../imports/Programming_code_scrolling_on_sc__202609061935.mp4'

interface SoftwareServiceProps {
  onNavigate?: (service: string) => void
}

export function SoftwareService({ onNavigate }: SoftwareServiceProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Développement web",
      description: "Applications web performantes, plateformes métier, interfaces complexes : nous maîtrisons les stacks modernes (React, Next.js, Vue, Node.js, Django) pour livrer des produits rapides, accessibles et optimisés SEO. Architecture front-end pensée pour la scalabilité, avec une attention particulière aux Core Web Vitals et à l'expérience sur tous les appareils."
    },
    {
      title: "Applications mobiles",
      description: "Apps iOS et Android natives ou cross-platform (React Native, Flutter) : nous concevons des expériences mobiles fluides, intuitives et performantes, de la définition des fonctionnalités à la publication sur les stores. Intégration poussée des APIs système (caméra, GPS, notifications, biométrie) pour des usages contextuels riches."
    },
    {
      title: "Solutions d'IA",
      description: "Nous intégrons l'intelligence artificielle là où elle crée de la valeur réelle : automatisation de processus, analyse prédictive, NLP, recommandation, génération de contenu. De la sélection des modèles au fine-tuning et au déploiement, nous construisons des solutions IA opérationnelles, explicables et adaptées à vos contraintes métiers."
    },
    {
      title: "Blockchain",
      description: "Smart contracts, tokenisation d'actifs, solutions DeFi, traçabilité et authentification décentralisée : nous accompagnons les entreprises qui souhaitent tirer parti de la technologie blockchain avec une approche pragmatique   en choisissant le protocole adapté à votre cas d'usage et en garantissant la sécurité et l'auditabilité du code déployé."
    },
    {
      title: "Architecture cloud",
      description: "Conception et déploiement d'infrastructures cloud-native sur AWS, GCP ou Azure : microservices, conteneurisation (Docker, Kubernetes), CI/CD, autoscaling, monitoring. Nous dimensionnons vos environnements pour absorber les pics de charge, réduire les coûts opérationnels et garantir une disponibilité maximale."
    },
    {
      title: "Développement d'API",
      description: "REST, GraphQL, webhooks, gestion des authentifications OAuth2 et clés API : nous concevons et documentons des APIs robustes, sécurisées et faciles à intégrer. Que ce soit pour exposer vos données à des partenaires, connecter vos systèmes internes ou alimenter vos interfaces front-end, nos APIs sont pensées pour être maintenables et versionables dans le temps."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F0EDE6]">
      {onNavigate && (
        <ServiceNavSlider
          currentService="software"
          onNavigate={(s) => onNavigate(s)}
        />
      )}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#191924] tracking-tight">
                Ingénierie & Technologie
              </h1>
              <p className="text-base text-[#444240] leading-relaxed">
                Des architectures qui tiennent la charge. Des produits qui tiennent la distance.
              </p>
              <p className="text-base text-[#444240] leading-relaxed">
                Nous développons des solutions logicielles sur mesure   web, mobile, IA, cloud  conçues pour performer en production, pas seulement en démonstration. De l'API au déploiement, notre approche transforme vos besoins métiers en systèmes fiables, maintenables et prêts à évoluer avec votre croissance. Chaque ligne de code que nous écrivons répond à une exigence fonctionnelle précise, dans une architecture pensée pour durer.
              </p>
              <div className="space-y-4 pt-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="border-b border-[rgba(8,8,8,0.08)] pb-4 cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <h3 className={`text-base lg:text-lg transition-all duration-300 ease-in-out ${
                      index === activeIndex ? 'text-[#191924] font-semibold' : 'text-[#444240] font-normal'
                    }`}>
                      {service.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      index === activeIndex ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                    }`}>
                      <p className="text-sm lg:text-base text-[#444240] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
