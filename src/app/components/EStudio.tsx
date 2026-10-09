"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, ArrowLeft } from "lucide-react";

const ventures = [
  {
    number: "01",
    name: "Fééti Store",
    category: "Billetterie & Événementiel",
    tag: "culture & divertissement",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=85",
    description:
      "Plateforme numérique tout-en-un dédiée à la promotion, la billetterie et la diffusion d'événements culturels, artistiques et sportifs en Afrique.",
    longDescription:
      "Fééti Store répond à un manque structurel : en Afrique, l'organisation d'événements reste fragmentée, opaque et peu accessible au grand public. Notre plateforme centralise la découverte, la vente de billets, la gestion des entrées et la promotion en un seul outil, accessible sur mobile comme sur desktop.",
    metrics: [
      { label: "Marchés cibles", value: "8 pays" },
      { label: "Secteurs", value: "Musique, Sport, Art" },
      { label: "Modèle", value: "Commission + SaaS" },
    ],
    features: [
      "Billetterie digitale avec QR code sécurisé",
      "Outils de promotion intégrés (réseaux, SMS)",
      "Dashboard organisateur en temps réel",
      "Paiements mobiles (Wave, Orange Money, Stripe)",
      "Live streaming events intégré",
    ],
    problem: "Les organisateurs d'événements africains n'ont aucun outil centralisé pour vendre, promouvoir et gérer leurs événements. La vente de billets se fait encore majoritairement en cash ou via WhatsApp.",
    vision: "Devenir le Ticketmaster africain — la référence incontournable pour tout événement culturel, sportif ou artistique sur le continent.",
  },
  {
    number: "02",
    name: "Fééti Play",
    category: "Streaming & Contenu",
    tag: "médias & créateurs",
    status: "Lancement 2026",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85",
    description:
      "Une plateforme permettant aux créateurs africains de monétiser directement leurs contenus grâce à un modèle pay-per-content et abonnement.",
    longDescription:
      "Fééti Play est la couche monétisation de l'écosystème créatif africain. Là où YouTube garde 45% des revenus et Spotify verse des fractions de centime, Fééti Play reverse 80% aux créateurs et leur donne le contrôle total sur leur catalogue et leur audience.",
    metrics: [
      { label: "Modèle revenue", value: "80% créateur" },
      { label: "Formats", value: "Vidéo, Audio, Live" },
      { label: "Monétisation", value: "PPV + Abonnement" },
    ],
    features: [
      "Pay-per-view et abonnements flexibles",
      "Studio de diffusion live intégré",
      "Analytics audience détaillés",
      "Paiements locaux (Mobile Money)",
      "Gestion des droits et licences",
    ],
    problem: "Les créateurs africains produisent des contenus de qualité mondiale mais ne peuvent pas les monétiser correctement. Les plateformes globales ne sont pas adaptées aux réalités de paiement locales.",
    vision: "La première plateforme de streaming africaine qui met les créateurs au centre — un Netflix-meets-Patreon conçu pour le continent.",
  },
  {
    number: "03",
    name: "Zougo",
    category: "Infrastructure & Mobilité",
    tag: "transport & logistique",
    status: "En développement",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    description:
      "SaaS cloud qui digitalise le transport en Afrique subsaharienne. Une infrastructure pensée pour les acteurs de la mobilité urbaine et interurbaine.",
    longDescription:
      "Le transport en Afrique subsaharienne représente un marché de 180 milliards de dollars, presque entièrement informel. Zougo apporte la couche technologique manquante : gestion de flotte, réservation en ligne, suivi GPS, et facturation numérique pour les opérateurs de bus, taxis et véhicules de tourisme.",
    metrics: [
      { label: "Marché adressable", value: "$180Mds" },
      { label: "Cible", value: "Opérateurs transport" },
      { label: "Modèle", value: "SaaS mensuel" },
    ],
    features: [
      "Gestion de flotte en temps réel",
      "Système de réservation en ligne",
      "Suivi GPS et alertes chauffeurs",
      "Facturation et comptabilité intégrées",
      "API ouverte pour partenaires logistiques",
    ],
    problem: "Les opérateurs de transport africains gèrent leurs flottes avec des carnets papier. Aucune visibilité sur les revenus, les trajets ou l'état des véhicules. Une inefficacité qui coûte des milliards chaque année.",
    vision: "L'OS du transport africain — la plateforme qui structure la mobilité de 1,4 milliard de personnes.",
  },
  {
    number: "04",
    name: "Orale OS",
    category: "Infrastructure & IA",
    tag: "IA & industrie musicale",
    status: "En développement",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=85",
    description:
      "Infrastructure numérique intelligente pour structurer et accélérer l'industrie musicale africaine grâce à l'intelligence artificielle.",
    longDescription:
      "L'industrie musicale africaine génère des milliards de streams mondiaux mais les artistes et labels africains ne perçoivent qu'une fraction des revenus qui leur sont dus. Orale OS est l'infrastructure qui corrige ça : gestion des droits, distribution intelligente, analytics et outils IA pour artistes et labels.",
    metrics: [
      { label: "Streams africains", value: "+40Mds/an" },
      { label: "Récupération droits", value: "IA-powered" },
      { label: "Cible", value: "Artistes & Labels" },
    ],
    features: [
      "Enregistrement et gestion des droits d'auteur",
      "Distribution multi-plateforme automatisée",
      "IA de détection de plagiat et contrefaçon",
      "Analytics revenus par territoire",
      "Contrats intelligents pour le partage de royalties",
    ],
    problem: "Des artistes africains génèrent des centaines de millions de streams sans recevoir les royalties correspondantes. L'absence d'infrastructure de gestion des droits coûte des revenus considérables à l'industrie musicale africaine.",
    vision: "Le système d'exploitation de l'industrie musicale africaine — donnant aux créateurs le contrôle total de leur catalogue et de leurs revenus.",
  },
];

type Venture = typeof ventures[number]

interface EStudioProps {
  onNavigateToQuote?: () => void;
}

function VentureDetail({ venture, onBack, onNavigateToQuote }: { venture: Venture; onBack: () => void; onNavigateToQuote?: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={venture.image}
          alt={venture.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)' }} />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
          style={{ paddingTop: '80px' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>

        {/* Status tag */}
        <div className="absolute top-8 right-8 z-10" style={{ paddingTop: '80px' }}>
          <span className="text-xs font-mono uppercase tracking-widest text-white/70 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/15">
            {venture.status}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-3">{venture.tag}</p>
          <h1 className="text-white leading-none tracking-tight" style={{ fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 700 }}>
            <span className="text-white/40">{venture.number}/</span> {venture.name}
          </h1>
          <p className="text-white/60 text-base mt-3 max-w-xl">{venture.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#1B5BFF] font-mono mb-6">Le projet</p>
            <p className="text-xl lg:text-2xl text-[#191924] leading-relaxed font-light">
              {venture.description}
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed mt-6">
              {venture.longDescription}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-[rgba(25,25,36,0.07)]">
              {venture.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-[#191924]">{m.value}</p>
                  <p className="text-xs text-[#9A9A9A] mt-1 font-mono uppercase tracking-wide">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-12">
            {/* Problem */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#AAAAAA] font-mono mb-4">Le problème</p>
              <p className="text-base text-[#191924] leading-relaxed">{venture.problem}</p>
            </div>

            {/* Vision */}
            <div className="bg-[#191924] rounded-2xl p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#1B5BFF] font-mono mb-4">La vision</p>
              <p className="text-base text-white leading-relaxed">{venture.vision}</p>
            </div>

            {/* Features */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#AAAAAA] font-mono mb-6">Fonctionnalités clés</p>
              <ul className="space-y-3">
                {venture.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B5BFF] mt-2 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-[rgba(25,25,36,0.07)] flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#191924]">Intéressé par {venture.name} ?</h2>
            <p className="text-[#6B6B6B] mt-1">Rejoignez l'aventure ou investissez dans ce projet.</p>
          </div>
          <div className="flex gap-3">
            {onNavigateToQuote && (
              <button
                onClick={onNavigateToQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#191924] text-white text-sm font-semibold hover:bg-[#1B5BFF] transition-colors duration-300"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(25,25,36,0.15)] text-[#191924] text-sm font-medium hover:border-[rgba(25,25,36,0.35)] transition-colors duration-300"
            >
              ← Tous les projets
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EStudio({
  onNavigateToQuote,
}: EStudioProps = {}) {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null)

  if (selectedVenture) {
    return (
      <VentureDetail
        venture={selectedVenture}
        onBack={() => setSelectedVenture(null)}
        onNavigateToQuote={onNavigateToQuote}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — large editorial headline */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[rgba(25,25,36,0.07)]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#1B5BFF] font-mono mb-8"></p>
          <h1
            className="leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(42px, 7vw, 96px)" }}
          >
            <span className="block font-bold text-[#191924]">
              Construire{" "}
            </span>
            <span className="block font-bold text-[#191924]">
              {" "}
              les entreprises technologiques{" "}
            </span>
            <span className="block font-light text-[#BBBBBB]">
              africaines de demain.
            </span>
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 mt-4">
            <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xl">
              Eroiste Ventures est un venture studio africain
              qui identifie les grands défis du continent et
              construit les startups technologiques capables d’y
              répondre. Nous combinons stratégie, technologie,
              design, expertise opérationnelle et capital pour
              transformer des opportunités de marché en
              entreprises scalables.
            </p>
            <p className="text-base text-[#AAAAAA] leading-relaxed max-w-xl lg:text-right"></p>
          </div>
        </div>
      </section>

      {/* Ventures cards row */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-end justify-center">
            {ventures.map((venture, idx) => {
              const offsets = [0, -32, -14, -42]
              const offset = offsets[idx % offsets.length]

              return (
                <div
                  key={venture.number}
                  className="group relative flex-1 min-w-[200px] max-w-[270px] cursor-pointer"
                  style={{ marginBottom: Math.abs(offset), transform: `translateY(${offset}px)` }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: 24,
                      aspectRatio: '3 / 4.6',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-10px)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 36px 72px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.1)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  >
                    {/* Full-bleed image */}
                    <img
                      src={venture.image}
                      alt={venture.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.08) 100%)' }}
                    />

                    {/* Top row: tag left + arrow right */}
                    <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider text-white/85 px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        {venture.tag}
                      </span>
                      <button
                        onClick={() => setSelectedVenture(venture)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white/50 text-[11px] font-bold font-mono mb-1.5">
                        {venture.number}/
                      </p>
                      <h3 className="text-white font-bold leading-tight mb-1" style={{ fontSize: 'clamp(15px, 2vw, 19px)' }}>
                        {venture.name}
                      </h3>
                      <p className="text-white/55 text-xs mb-4">{venture.category}</p>

                      {/* Explore pill */}
                      <button
                        onClick={() => setSelectedVenture(venture)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-200 hover:gap-3"
                        style={{
                          background: 'rgba(255,255,255,0.14)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.22)',
                        }}
                      >
                        Explorer
                        <span className="w-1 h-1 rounded-full bg-white/70" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How we build — numbered list */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.2em] text-[#AAAAAA] font-mono mb-4">
                LE PROBLEMES
              </p>
              <h2
                className="font-bold text-[#191924] leading-tight tracking-tight"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                L’Afrique possède d’immenses opportunités,
                <br />
              
              </h2>

              <p className="text-base text-[#6B6B6B] leading-relaxed mt-6 max-w-sm">
                Créer un portefeuille de champions africains dans les secteurs qui façonneront le futur du continent.Transformer les défis africains en entreprises à impact mondial.
              </p>
              {onNavigateToQuote && (
                <button
                  onClick={onNavigateToQuote}
                  className="mt-8 text-sm font-mono text-[#191924] underline underline-offset-4 hover:text-[#1B5BFF] transition-colors"
                >
                  Rejoindre l'E.Venture
                </button>
              )}
            </div>

            {/* Right — numbered steps */}
            <div className="space-y-0 divide-y divide-[rgba(25,25,36,0.07)]">
              {[
                {
                  n: "01",
                  title: "Venture Creation",
                  body: "Nous créons nos propres startups à partir d’opportunités identifiées,Secteurs prioritaires (Fintech,Healthtech,Edtech,Agritech, SaaS & outils pour entreprises, Commerce digital,Industries créatives.) ",
                },




      
                {
                  n: "02",
                  title: "Venture Partnership",
                  body: "Nous collaborons avec des entreprises, institutions et entrepreneurs pour transformer une expertise, un réseau ou une opportunité en nouvelle entreprise technologique.",
                },
                {
                  n: "03",
                  title: "3. Venture Investment",
                  body: "Nous investissons dans des startups à fort potentiel et apportons un accompagnement stratégique, produit et opérationnel.",
                },
                {
                  n: "04",
                  title: "Venture catalogue",
                  body: "Créer un portefeuille de startups africaines capables de devenir des leaders régionaux et internationaux.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group py-8 grid grid-cols-12 gap-6"
                >
                  <div className="col-span-2">
                    <span
                      className="font-bold text-[#E8E8E8] group-hover:text-[#1B5BFF] transition-colors duration-300"
                      style={{
                        fontSize: "clamp(28px, 3vw, 40px)",
                      }}
                    >
                      {step.n}.
                    </span>
                  </div>
                  <div className="col-span-10">
                    <h3 className="text-lg font-semibold text-[#191924] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#2A2A35]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-light text-[#F0EDE6] leading-tight mb-10"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            Construisez,
            <br />
            Rejoindre aujourd'hui
            <br />
            l'E.venture
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {onNavigateToQuote && (
              <button
                onClick={onNavigateToQuote}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#191924] text-sm font-semibold hover:bg-[#F0EDE6] transition-colors duration-300"
              >
                Nous écrire
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors duration-300">
            Télechargez le pitch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}