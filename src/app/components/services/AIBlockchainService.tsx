'use client'

import { useState } from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { ServiceNavSlider } from '../ServiceNavSlider'
import heroVideo from '../../../imports/media/cybersecurite.mp4'

interface AIBlockchainServiceProps {
  onNavigate?: (service: string) => void
}

export function AIBlockchainService({ onNavigate }: AIBlockchainServiceProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Audit de sécurité",
      description: "Évaluation complète de votre posture de sécurité : revue de l'architecture réseau et applicative, analyse des politiques d'accès, cartographie des actifs exposés et identification des vulnérabilités critiques. Nous livrons un rapport priorisé avec des recommandations concrètes   pas une liste de risques abstraits, mais un plan d'action séquencé selon votre niveau d'exposition réel."
    },
    {
      title: "Tests d'intrusion (Pentest)",
      description: "Simulation d'attaques réelles menées par nos experts en sécurité offensive : tests black box, grey box et white box sur vos applications web, APIs, réseaux et infrastructures cloud. L'objectif n'est pas de cocher une case de conformité c'est de trouver les failles avant vos adversaires, en conditions aussi proches que possible d'une attaque réelle."
    },
    {
      title: "Protection des données",
      description: "Chiffrement des données au repos et en transit, gestion des droits d'accès, anonymisation, détection des fuites : nous mettons en place les mesures techniques et organisationnelles qui protègent vos données sensibles celles de vos clients, de vos collaborateurs et de votre propriété intellectuelle. Une protection qui répond aux exigences du RGPD et aux standards sectoriels."
    },
    {
      title: "Sécurité cloud",
      description: "Configuration sécurisée de vos environnements AWS, GCP ou Azure, gestion des identités et des permissions (IAM), surveillance des configurations à risque, isolation des environnements et chiffrement des volumes : nous sécurisons vos infrastructures cloud sans compromettre leur performance ni leur flexibilité opérationnelle."
    },
    {
      title: "Réponse à incident",
      description: "En cas d'attaque ou de compromission, chaque heure compte. Nos équipes interviennent rapidement pour contenir la menace, analyser les vecteurs d'attaque, évaluer l'étendue de la compromission et restaurer vos systèmes dans les meilleurs délais. Nous construisons également avec vous les plans de réponse et les procédures qui réduisent le temps de réaction lors des prochains incidents."
    },
    {
      title: "Conformité & RGPD",
      description: "Accompagnement à la mise en conformité réglementaire : RGPD, ISO 27001, SOC 2, NIS2, PCI-DSS. Nous aidons vos équipes à documenter les traitements de données, mettre en place les processus requis, préparer les audits et maintenir la conformité dans la durée   sans transformer la sécurité en frein opérationnel."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F0EDE6]">
      {onNavigate && (
        <ServiceNavSlider
          currentService="ai-blockchain"
          onNavigate={(s) => onNavigate(s)}
        />
      )}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#191924] tracking-tight">
                Cybersécurité & Résilience Numérique
              </h1>
              <p className="text-base text-[#444240] leading-relaxed">
                Vos actifs numériques méritent d'être protégés.
              </p>
              <p className="text-base text-[#444240] leading-relaxed">
                Nous anticipons les menaces avant qu'elles se concrétisent. Audit de vulnérabilités, protection des infrastructures, conformité réglementaire, réponse à incident : notre approche de la cybersécurité est aussi rigoureuse que discrète. Nous travaillons avec les équipes techniques et les dirigeants pour construire une posture de sécurité solide, pragmatique et adaptée à votre exposition réelle  parce que la meilleure sécurité est celle qui protège sans paralyser.
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
