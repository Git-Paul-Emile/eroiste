'use client'

import { useState, useEffect } from 'react'
import { X, Grid3x3, List, ArrowUpRight, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import samsErpCover from '../../imports/media/sams-erp.jpg'
import agentTrackerCover from '../../imports/media/agent-tracker-wireframes.jpg'
import studiosKouratierCover from '../../imports/media/studios-kouratier.svg'

interface Project {
  id: number
  title: string
  category: string[]
  year: string
  client: string
  description: string
  thumbnail: string
  images: string[]
  liveUrl: string
  size: 'large' | 'small'
  // Logos/vectoriels : affichés entiers plutôt que recadrés
  fit?: 'cover' | 'contain'
}

const projects: Project[] = [
  {
    id: 1,
    title: "SAMS ERP",
    category: ["Web & App", "AI & Tech"],
    year: "2025",
    client: "Savonnerie Moderne du Sénégal",
    description: "ERP industriel sur mesure conçu pour centraliser l'ensemble des activités d'un fabricant de produits d'hygiène : production, stocks, achats, ventes, finance et facturation. Pilotage en temps réel via des tableaux de bord et indicateurs de performance.",
    thumbnail: samsErpCover,
    images: [samsErpCover],
    liveUrl: "#",
    size: "large"
  },
  {
    id: 2,
    title: "Agent Tracker",
    category: ["Mobile", "Web & App"],
    year: "2025",
    client: "Agent Tracker",
    description: "Refonte complète de l'expérience utilisateur d'une application de pilotage des équipes commerciales terrain. Architecture de l'information repensée, approche media-first et interface optimisée pour un usage quotidien sur mobile et tablette.",
    thumbnail: agentTrackerCover,
    images: [agentTrackerCover],
    liveUrl: "#",
    size: "small"
  },
  {
    id: 3,
    title: "Studios Kouratier",
    category: ["Branding"],
    year: "2025",
    client: "Studios Kouratier",
    description: "Conception d'une identité visuelle complète pour une agence audiovisuelle guinéenne. Logo, charte graphique, papeterie institutionnelle et système graphique évolutif pour le digital et l'impression.",
    thumbnail: studiosKouratierCover,
    images: [studiosKouratierCover],
    liveUrl: "#",
    size: "small",
    fit: "contain"
  }
]

const categories = ["All", "Branding", "Web & App", "AI & Tech", "Mobile"]

interface WorkProps {
  onNavigateToContact?: () => void
}

export function Work({ onNavigateToContact }: WorkProps = {}) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter(project => project.category.includes(activeFilter))
      )
    }
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-[#F0EDE6] text-[#191924]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 tracking-tight">
              Selected Works
            </h1>
            <p className="text-lg text-[#444240] mb-8 max-w-2xl leading-relaxed">
              Crafting digital experiences that matter
            </p>
            
            {/* Compteurs animés */}
            <div className="flex flex-wrap gap-8 text-sm text-[#444240]">
              <div>
                <span className="text-2xl font-bold text-[#191924]">{projects.length}</span>
                <span className="ml-2">Projects</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#191924]">6</span>
                <span className="ml-2">Industries</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#191924]">12</span>
                <span className="ml-2">Countries</span>
              </div>
            </div>
          </div>

          {/* Ligne décorative */}
          <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-[#191924]/20 to-transparent" />
        </div>
      </section>

      {/* Barre de filtres */}
      <section className="sticky top-20 z-30 bg-[#F0EDE6]/95 backdrop-blur-xl border-b border-[rgba(8,8,8,0.08)] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filtres */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-[#191924] text-[#F0EDE6]'
                      : 'bg-transparent text-[#444240] border border-[rgba(8,8,8,0.12)] hover:border-[#191924] hover:text-[#191924]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Toggle vue + compteur */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#444240]">
                Showing <span className="text-[#191924] font-medium">{filteredProjects.length}</span> of {projects.length}
              </span>
              <div className="flex gap-2 border border-[rgba(8,8,8,0.12)] rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-[#191924] text-[#F0EDE6]' : 'text-[#444240] hover:text-[#191924]'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-[#191924] text-[#F0EDE6]' : 'text-[#444240] hover:text-[#191924]'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      {viewMode === 'grid' ? (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[rgba(8,8,8,0.08)] animate-fade-in-up ${
                    project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${project.fit === 'contain' ? 'object-contain p-8 bg-white' : 'object-cover'}`}
                    />
                    
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-[#191924]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div>
                        <h3 className="text-2xl font-medium mb-2 text-[#F0EDE6]">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.category.map((cat, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-[#1B5BFF]/20 text-[#1B5BFF] rounded-full border border-[#1B5BFF]/30">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#8A8780]">{project.year}</span>
                        <ArrowUpRight className="w-6 h-6 text-[#1B5BFF]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Vue Liste */
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-1">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group grid grid-cols-12 gap-4 items-center py-6 px-4 border-b border-[rgba(8,8,8,0.08)] hover:bg-white transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="col-span-1 text-[#8A8780] text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="col-span-5 lg:col-span-4">
                    <h3 className="font-medium group-hover:text-[#191924] transition-colors relative inline-block">
                      {project.title}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#191924] group-hover:w-full transition-all duration-300" />
                    </h3>
                  </div>
                  <div className="col-span-3 lg:col-span-4 flex flex-wrap gap-2">
                    {project.category.map((cat, idx) => (
                      <span key={idx} className="text-xs text-[#8A8780]">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-2 lg:col-span-2 text-[#8A8780] text-sm">
                    {project.year}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="w-5 h-5 text-[#8A8780] group-hover:text-[#191924] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#191924] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F0EDE6] mb-6">
            Construisons ensemble
          </h2>
          <p className="text-lg text-[#8A8780] mb-8 max-w-2xl mx-auto">
            Vous avez un projet, une vision ou un défi de transformation ?
            Eroiste accompagne les entreprises, institutions et marques qui souhaitent renforcer leur position grâce au design, à la technologie et à la stratégie.
          </p>
          <button
            onClick={() => {
              if (onNavigateToContact) {
                onNavigateToContact()
              }
            }}
            className="px-8 py-4 bg-[#1B5BFF] text-[#191924] rounded-full font-semibold hover:bg-[#1B5BFF]/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            Nous écrire
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#1B5BFF] rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-[#1B5BFF] rounded-full" />
        </div>
      </section>

      {/* Modale de détail */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191924]/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#191924]/80 hover:bg-[#191924] rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-[#F0EDE6]" />
            </button>

            {/* Image principale */}
            <div className="relative aspect-video">
              <ImageWithFallback
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className={`w-full h-full ${selectedProject.fit === 'contain' ? 'object-contain p-10 bg-white' : 'object-cover'}`}
              />
            </div>

            {/* Contenu */}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.category.map((cat, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-[#191924]/10 text-[#191924] rounded-full border border-[#191924]/20">
                    {cat}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl lg:text-4xl font-light mb-4">{selectedProject.title}</h2>
              
              <div className="flex gap-8 mb-6 text-sm text-[#8A8780]">
                <div>
                  <span className="block text-[#8A8780]">Client</span>
                  <span className="text-[#191924] font-medium">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="block text-[#8A8780]">Year</span>
                  <span className="text-[#191924] font-medium">{selectedProject.year}</span>
                </div>
              </div>

              <p className="text-[#444240] leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <a
                href={selectedProject.liveUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#191924] text-[#F0EDE6] rounded-full font-semibold hover:bg-[#191924]/90 transition-all duration-300"
              >
                Voir le projet
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

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
          
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
            opacity: 0;
          }

          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }
        `
      }} />
    </div>
  )
}