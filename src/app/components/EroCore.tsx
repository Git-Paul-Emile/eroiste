"use client";

import { ArrowRight } from "lucide-react";

interface EroCoreProps {
  onNavigateToQuote?: () => void;
}

const cores = [
  {
    name: "Eroïste Core Build",
    tag: "01",
    description:
      "Création de produits numériques, plateformes, ERP, applications et solutions basées sur l'intelligence artificielle.",
    services: [
      "Développement web & mobile",
      "Architecture cloud",
      "Intégration IA",
      "Plateformes métier",
      "APIs & microservices",
    ],
  },
  {
    name: "Eroïste Core Brand",
    tag: "02",
    description:
      "Accompagnement des organisations dans leur identité, leur direction artistique et leur communication.",
    services: [
      "Identité visuelle",
      "Direction artistique",
      "Brand guidelines",
      "Motion & contenu",
      "Systèmes graphiques",
    ],
  },
  {
    name: "Eroïste Core Strategy",
    tag: "03",
    description:
      "Transformation digitale, innovation, études de marché et pilotage stratégique.",
    services: [
      "Stratégie produit",
      "Audit de marque",
      "Innovation numérique",
      "Gestion de projet",
      "Expérience client",
    ],
  },
  {
    name: "Eroïste Core AI",
    tag: "04",
    description:
      "Développement d'agents intelligents, d'automatisations, de systèmes RAG et de copilotes métiers.",
    services: [
      "Agents IA",
      "Automatisation",
      "Systèmes RAG",
      "Copilotes métier",
      "Analyse prédictive",
    ],
  },
  {
    name: "Eroïste Core Secure",
    tag: "05",
    description:
      "Protection des organisations grâce à des solutions de cybersécurité, de gouvernance et de résilience numérique.",
    services: [
      "Audit de sécurité",
      "Pentest",
      "Protection cloud",
      "RGPD & conformité",
      "Réponse à incident",
    ],
  },
];

const levels = [
  {
    name: "Core Start",
    target: "Startups & PME",
    description:
      "Premier niveau d'engagement pour les organisations en démarrage ou en structuration.",
  },
  {
    name: "Core Growth",
    target: "Entreprises en expansion",
    description:
      "Pour les organisations qui accélèrent et souhaitent un accompagnement plus soutenu.",
  },
  {
    name: "Core Scale",
    target: "Projets multiples",
    description:
      "Pour les organisations qui gèrent plusieurs projets simultanément et nécessitent une équipe dédiée.",
  },
  {
    name: "Core Enterprise",
    target: "Grands programmes",
    description:
      "Pour les transformations d'envergure avec des enjeux multiples et des équipes larges.",
  },
];

export function EroCore({
  onNavigateToQuote,
}: EroCoreProps = {}) {
  return (
    <div className="min-h-screen pt-20 bg-[#191924]">
      {/* Hero */}
      <section className="py-20 lg:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
           
            
            <h1 className="text-5xl lg:text-7xl font-light text-[#F0EDE6] leading-tight tracking-tight mb-8">
              Ero Core
              <span className="align-super text-2xl lg:text-3xl">
                ™
              </span>
            </h1>
            <p className="text-lg text-[#8A8780] leading-relaxed max-w-2xl mb-12">
              Chaque projet démarre par l’activation d’un
              EroCore™ : une cellule opérationnelle réunissant
              les expertises nécessaires pour atteindre vos
              objectifs en entreprise. <br /> Un modèle conçu
              pour accompagner les organisations grâce à une
              équipe dédiée de spécialistes mobilisée autour
              d’un objectif commun. Pas des livrables un Core.
            </p>
            <button
              onClick={onNavigateToQuote}
              className="group inline-flex items-center gap-3 text-sm font-medium text-[#1B5BFF] uppercase tracking-widest font-mono hover:gap-5 transition-all duration-300"
            >
              Activer votre Core
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Core offerings */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#444] mb-16 font-mono"></h2>
          <div className="space-y-0 divide-y divide-white/5">
            {cores.map((core) => (
              <div
                key={core.tag}
                className="group py-10 grid lg:grid-cols-12 gap-6 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-300"
              >
                <div className="lg:col-span-1">
                  <span className="text-xs font-mono text-[#333]">
                    {core.tag}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-light text-[#F0EDE6] group-hover:text-[#1B5BFF] transition-colors duration-300">
                    {core.name}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#8A8780] leading-relaxed">
                    {core.description}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <ul className="space-y-1">
                    {core.services.map((s) => (
                      <li
                        key={s}
                        className="text-xs text-[#444] font-mono"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement levels */}
      <section className="py-20 lg:py-28 bg-[#F0EDE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#191924] tracking-tight leading-tight">
                Les Modèles
                <br />
                d'engagement
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-base text-[#444240] leading-relaxed">
                Chaque organisation peut activer un niveau
                d'engagement adapté à son ambition, sa maturité
                et son volume de projets.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, i) => (
              <div
                key={level.name}
                className="p-8 border border-[rgba(8,8,8,0.08)] bg-white group hover:border-[#1B5BFF] transition-colors duration-300"
              >
                <div className="text-xs font-mono text-[#1B5BFF] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-[#191924] mb-1">
                  {level.name}
                </h3>
                <p className="text-xs text-[#888] uppercase tracking-wide mb-4">
                  {level.target}
                </p>
                <p className="text-sm text-[#444240] leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#191924]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#444] font-mono mb-6">
            Prêt à devenir le ROI,
          </p>
          <h2 className="text-4xl lg:text-6xl font-light text-[#F0EDE6] leading-tight mb-8">
            Quel Core
            <br />
            activez-vous ?
          </h2>
          <button
            onClick={onNavigateToQuote}
            className="group inline-flex items-center gap-3 bg-[#1B5BFF] text-white text-sm font-medium uppercase tracking-widest px-8 py-4 hover:bg-[#1B5BFF]/90 transition-all duration-300"
          >
            Parler à notre équipe
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}