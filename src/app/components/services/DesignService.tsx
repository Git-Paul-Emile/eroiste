'use client'

import { useState } from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { ServiceNavSlider } from '../ServiceNavSlider'
import heroVideo from '../../../imports/media/experience.mp4'

interface DesignServiceProps {
  onNavigate?: (service: string) => void
}

export function DesignService({ onNavigate }: DesignServiceProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Conception UI / UX",
      description: "Du wireframe à l'interface finale, nous concevons des parcours utilisateurs clairs, cohérents et engageants. Chaque écran est pensé pour guider, réduire la friction et maximiser la valeur perçue à chaque étape du flux   que ce soit pour une app mobile, un SaaS ou une plateforme e-commerce."
    },
    {
      title: "Systèmes de conception",
      description: "Nous créons des design systems évolutifs   bibliothèques de composants, tokens, règles d'usage   qui permettent à vos équipes produit et développement de travailler plus vite, avec plus de cohérence, quel que soit le canal ou la surface de l'interface."
    },
    {
      title: "Identité de marque",
      description: "Nous traduisons votre positionnement en langage visuel : logotype, typographie, palette, iconographie et principes graphiques. Une identité construite pour tenir dans le temps, s'adapter à tous les formats et rester immédiatement reconnaissable dans un environnement saturé."
    },
    {
      title: "Recherche UX",
      description: "Avant de dessiner, nous écoutons. Entretiens utilisateurs, tests d'usabilité, analyse heuristique, cartes d'empathie : nous collectons et synthétisons les insights qui fondent des décisions de design justes, réduisant les risques et accélérant les arbitrages produit."
    },
    {
      title: "Prototypage",
      description: "Des maquettes statiques aux prototypes interactifs haute-fidélité, nous matérialisons vos idées rapidement pour les tester, les valider et les itérer   avant d'engager les ressources de développement. Un moyen efficace de convaincre les parties prenantes et d'affiner le produit en conditions réelles."
    },
    {
      title: "Conception & communication visuelle",
      description: "Motion design, direction de contenu, templates éditoriaux, supports de présentation : nous donnons une cohérence visuelle à l'ensemble de vos communications digitales et print, pour que votre marque s'exprime avec la même force partout où elle apparaît."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F0EDE6]">
      {onNavigate && (
        <ServiceNavSlider
          currentService="design"
          onNavigate={(s) => onNavigate(s)}
        />
      )}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#191924] tracking-tight">
                Design & Expérience Digitale
              </h1>
              <p className="text-base text-[#444240] leading-relaxed">
                L'interface que vos utilisateurs méritent. L'expérience qui les retient.
              </p>
              <p className="text-base text-[#444240] leading-relaxed">
                Nous concevons des produits digitaux où chaque interaction est intentionnelle. De la recherche utilisateur au design system, nos équipes façonnent des expériences qui ne se contentent pas d'être belles, elles convertissent, fidélisent et marquent les esprits. Nous croyons que la forme doit toujours être au service de la fonction, et que les meilleurs designs sont ceux que les utilisateurs ne remarquent pas parce qu'ils fonctionnent exactement comme ils s'y attendent.
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
