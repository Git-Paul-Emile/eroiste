'use client'

import { useState } from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { ServiceNavSlider } from '../ServiceNavSlider'
import heroVideo from '../../../imports/media/strategie-transformation.mp4'

interface AnalyticsServiceProps {
  onNavigate?: (service: string) => void
}

export function AnalyticsService({ onNavigate }: AnalyticsServiceProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Innovation numérique",
      description: "Identification des opportunités technologiques, exploration de nouveaux modèles de valeur, ateliers d'idéation structurés : nous aidons vos équipes à sortir des angles morts et à imaginer ce que votre produit ou service pourrait devenir. L'innovation n'est pas un événement c'est un processus que nous rendons opérationnel au sein de votre organisation."
    },
    {
      title: "Expérience client",
      description: "Cartographie des parcours, identification des points de friction, définition des moments de vérité : nous construisons une vision complète de l'expérience que votre client vit à chaque point de contact en ligne, hors ligne, avant, pendant et après l'achat pour en faire un levier de différenciation et de fidélisation."
    },
    {
      title: "Recherche concurrentielle",
      description: "Analyse approfondie de votre marché, benchmarking des acteurs en présence, identification des espaces blancs et des tendances émergentes : nous vous donnons une lecture nette du terrain pour que vos décisions stratégiques s'appuient sur des faits, pas des intuitions. Un avantage concurrentiel commence par une connaissance supérieure de son environnement."
    },
    {
      title: "Gestion de projet",
      description: "Cadrage des périmètres, planification, coordination des parties prenantes, suivi des livrables et gestion des risques : nous pilotons vos projets complexes avec rigueur et transparence. Nos chefs de projet assurent la liaison entre les équipes créatives, techniques et métiers pour que rien ne soit perdu dans la traduction entre vision et exécution."
    },
    {
      title: "Étude de marché & audit de marque",
      description: "Analyse du positionnement actuel, perception de marque, interviews parties prenantes, audit de la cohérence visuelle et éditoriale : nous établissons un diagnostic complet avant toute recommandation. Un audit honnête est la fondation d'une stratégie crédible il révèle ce qui fonctionne vraiment, ce qui freine et ce qui reste inexploité."
    },
    {
      title: "Architecture de marque & offre",
      description: "Structuration de votre portefeuille de marques, de produits ou de services : nous clarifions les relations entre vos offres, définissons les hiérarchies et les territoires, et construisons une architecture lisible pour vos clients comme pour vos équipes commerciales. Une architecture bien pensée simplifie les décisions futures et renforce la clarté de votre positionnement."
    },
    {
      title: "Stratégie de communication",
      description: "Définition des messages clés, des cibles prioritaires, des canaux et du calendrier éditorial : nous construisons un plan de communication qui sert votre stratégie de marque et vos objectifs commerciaux. Chaque prise de parole est cohérente avec votre positionnement, calibrée pour votre audience et mesurable dans ses effets."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F0EDE6]">
      {onNavigate && (
        <ServiceNavSlider
          currentService="analytics"
          onNavigate={(s) => onNavigate(s)}
        />
      )}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#191924] tracking-tight">
                Stratégie & Transformation Digitale
              </h1>
              <p className="text-base text-[#444240] leading-relaxed">
                Décider avec clarté. Avancer avec cohérence.
              </p>
              <p className="text-base text-[#444240] leading-relaxed">
                Nous travaillons aux côtés des dirigeants pour aligner vision, marque et produit autour d'une stratégie actionnée. Audit, positionnement, feuille de route : notre méthode traduit les ambitions en décisions concrètes et les décisions en résultats mesurables. Nous ne livrons pas des recommandations, nous construisons les conditions de leur exécution, en restant engagés aux côtés de vos équipes à chaque étape de la transformation.
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
