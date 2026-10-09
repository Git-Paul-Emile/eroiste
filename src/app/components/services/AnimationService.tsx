'use client'

import { useState } from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { ServiceNavSlider } from '../ServiceNavSlider'

interface AnimationServiceProps {
  onNavigate?: (service: string) => void
}

export function AnimationService({ onNavigate }: AnimationServiceProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Identité visuelle",
      description: "Logotype, typographie propriétaire ou sélectionnée, palette chromatique, système d'icônes, grilles de mise en page : nous concevons des identités visuelles complètes, déclinables sur tous les supports. Chaque choix formel est documenté et justifié pour garantir une application cohérente par vos équipes internes comme par vos partenaires externes."
    },
    {
      title: "Direction artistique",
      description: "Photographie, illustration, motion, mise en scène éditoriale : nous définissons le point de vue visuel qui différencie votre marque. La direction artistique n'est pas un style arbitraire   c'est une conviction exprimée visuellement, calibrée pour toucher votre audience et refléter ce que vous avez de plus singulier."
    },
    {
      title: "Brand guidelines",
      description: "Des chartes graphiques que vos équipes utilisent vraiment : claires, illustrées par des exemples concrets, accessibles en ligne ou en format interactif. Nous documentons les règles d'usage, les à-faire et les à-ne-pas-faire, et formons vos équipes à les appliquer   pour que votre identité reste intacte à mesure que votre organisation grandit."
    },
    {
      title: "Systèmes graphiques",
      description: "Au-delà du logo, nous créons des systèmes visuels complets : traitements typographiques, motifs, textures, templates adaptables. Un système graphique solide permet à votre marque de s'exprimer avec cohérence et créativité simultanément   sans avoir besoin d'une validation à chaque nouvelle production."
    },
    {
      title: "Contenu visuel & motion",
      description: "Vidéo de marque, animations d'interface, micro-interactions, reels et contenus sociaux : nous produisons des créations animées qui donnent du rythme et de la vie à votre identité. Le motion design est aujourd'hui le premier vecteur d'impression de marque   nous l'abordons comme une discipline à part entière, pas comme un effet décoratif."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F0EDE6]">
      {onNavigate && (
        <ServiceNavSlider
          currentService="animation"
          onNavigate={(s) => onNavigate(s)}
        />
      )}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#191924] tracking-tight">
                Brand & Direction Artistique
              </h1>
              <p className="text-base text-[#444240] leading-relaxed">
                Une marque ne se voit pas. Elle se ressent.
              </p>
              <p className="text-base text-[#444240] leading-relaxed">
                Nous construisons des identités visuelles qui ont quelque chose à dire   et la façon de le dire. Logotype, système graphique, direction de contenu : chaque décision formelle est au service d'une vision singulière, cohérente à chaque point de contact. Une marque forte n'est pas un beau logo sur une présentation   c'est un système vivant qui oriente les décisions créatives, génère de la confiance et crée un sentiment d'appartenance durable.
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
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?w=1080&q=80"
                  alt="Brand & Art Direction"
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
