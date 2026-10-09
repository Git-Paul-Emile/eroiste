'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

interface BlogProps {
  onArticleClick?: (articleId: number) => void
}

const articles: Article[] = [
  {
    id: 1,
    title: "Stratégies de croissance pour les entreprises africaines à l'ère de l'Intelligence Artificielle",
    excerpt: "L'Afrique ne gagnera pas en copiant la Silicon Valley, mais en construisant son propre modèle de croissance. Depuis plusieurs années, la Silicon Valley influence profondément la manière dont les entrepreneurs du monde entier pensent la création d'entreprise — mais peut-on appliquer directement ces modèles aux réalités africaines ?",
    category: "Stratégie",
    date: "12 juillet 2025",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1080&q=80"
  },
  {
    id: 2,
    title: "Design Thinking en Afrique : repenser l'expérience utilisateur à travers les réalités culturelles du continent",
    excerpt: "Concevoir pour l'Afrique commence par comprendre l'humain africain. Lorsqu'on parle d'expérience utilisateur en Afrique, une question essentielle mérite d'être posée : de quel utilisateur parle-t-on réellement ? Les usages ne sont jamais séparés de leur contexte culturel, social et économique.",
    category: "Design",
    date: "28 juin 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?w=1080&q=80"
  },
  {
    id: 3,
    title: "Eroïste : construire les entreprises africaines de demain à la rencontre du design, de la technologie et de la stratégie",
    excerpt: "Une nouvelle génération de studio pour accompagner les organisations africaines ambitieuses. Pendant longtemps, les entreprises africaines ont dû faire appel à plusieurs expertises distinctes pour leur transformation. Eroïste réunit design, technologie et stratégie sous un même toit.",
    category: "Studio",
    date: "15 mai 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80"
  }
]

export function Blog({ onArticleClick }: BlogProps) {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log('Email submitted:', email)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Header Section */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-normal text-black mb-4">
              Le manifeste Eroïste.
            </h1>
            <p className="text-base text-gray-600 mb-8">
              Réflexions sur le design, la technologie et la croissance des entreprises africaines. Abonnez-vous pour recevoir nos prochains articles.
            </p>

            {/* Email Subscription */}
            <div className="flex items-center gap-4 max-w-md">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                className="flex-1 px-0 py-2 text-base text-black placeholder:text-gray-400 border-0 border-b border-gray-300 focus:border-black focus:outline-none focus:ring-0 bg-transparent transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 text-sm text-black hover:text-gray-600 transition-colors flex items-center gap-2"
              >
                S'abonner <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="py-12 lg:py-16 border-b border-gray-200 group cursor-pointer"
              onClick={() => onArticleClick?.(article.id)}
            >
              <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">
                {/* Article Image */}
                <div className="w-full h-64 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Article Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-normal text-black mb-4 underline decoration-1 underline-offset-4 group-hover:text-gray-600 transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm text-black group-hover:text-gray-600 transition-colors underline decoration-1 underline-offset-4">
                      Lire l'article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{article.date}</span>
                    <span>/</span>
                    <span>{article.category}</span>
                    <span>/</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
