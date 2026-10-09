'use client'

import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

interface ArticleDetailProps {
  articleId: number
  onBack: () => void
}

const articles = [
  {
    id: 1,
    title: "Stratégies de croissance pour les entreprises africaines à l'ère de l'Intelligence Artificielle",
    category: "Stratégie",
    date: "12 juillet 2025",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",
    sections: [
      {
        heading: "L'Afrique ne gagnera pas en copiant la Silicon Valley",
        body: "Depuis plusieurs années, la Silicon Valley influence profondément la manière dont les entrepreneurs du monde entier pensent la création d'entreprise. Les histoires de Google, Amazon, Airbnb, Uber ou Stripe ont popularisé une vision de la croissance basée sur l'innovation technologique, l'expérimentation rapide, la recherche du Product-Market Fit et la capacité à atteindre une croissance exponentielle. En Afrique, cette influence est également très présente. Les incubateurs, les investisseurs et les programmes d'accompagnement entrepreneurial ont largement repris ces méthodes, avec l'ambition légitime de faire émerger une nouvelle génération d'entreprises capables de rivaliser à l'échelle mondiale.\n\nCependant, une question fondamentale mérite d'être posée : peut-on appliquer directement des modèles conçus dans la Silicon Valley aux réalités africaines ? Une entreprise ne se développe jamais indépendamment de son environnement. Elle évolue dans un écosystème composé d'infrastructures, de comportements consommateurs, de systèmes financiers, de réglementations, de compétences disponibles et de réalités culturelles.\n\nL'Afrique présente une configuration différente. Un entrepreneur peut vouloir développer une plateforme de commerce électronique dans plusieurs pays voisins et découvrir que chaque marché possède ses propres moyens de paiement, ses propres habitudes de consommation et ses propres contraintes réglementaires. Un client peut utiliser un smartphone comme principal outil numérique, mais disposer d'une connexion Internet limitée ou d'un appareil peu performant.\n\nCes réalités ne doivent pas uniquement être considérées comme des contraintes. Elles constituent aussi une source d'innovation. C'est dans cette logique que l'Intelligence Artificielle représente aujourd'hui une opportunité majeure. Son intérêt pour les entreprises africaines ne réside pas dans la possibilité de reproduire les modèles américains, mais dans sa capacité à permettre aux organisations locales de devenir plus efficaces, plus agiles et plus compétitives avec des ressources limitées."
      },
      {
        heading: "La véritable leçon des entreprises américaines : construire des systèmes capables d'apprendre",
        body: "Lorsque l'on analyse les entreprises technologiques qui dominent aujourd'hui l'économie mondiale, leur avantage ne repose pas uniquement sur leur technologie. Leur véritable force réside dans leur capacité à construire des systèmes organisationnels capables d'apprendre en permanence.\n\nAmazon n'est pas devenu un leader mondial uniquement grâce à son site e-commerce. Son avantage stratégique repose sur une culture extrêmement avancée de la donnée et de l'amélioration continue. Chaque interaction avec un client produit une information permettant d'améliorer un processus : comprendre les préférences, optimiser la logistique, réduire les délais, améliorer l'expérience utilisateur.\n\nCette approche constitue une source d'inspiration importante pour les entreprises africaines. Beaucoup de dirigeants possèdent une connaissance exceptionnelle de leur marché. Ils comprennent leurs clients, connaissent leurs fournisseurs et savent identifier rapidement les opportunités. Cette intelligence terrain représente une richesse considérable. Toutefois, elle devient beaucoup plus puissante lorsqu'elle est associée à des données structurées.\n\nAujourd'hui, une entreprise peut automatiser une partie importante de ses opérations : génération de devis, suivi commercial, réponses aux questions fréquentes des clients, création de rapports, analyse des ventes ou encore gestion documentaire. L'objectif n'est pas de remplacer les collaborateurs, mais d'augmenter leur capacité d'action."
      },
      {
        heading: "Passer de « AI First » à « System First » : construire les entreprises africaines de demain",
        body: "L'arrivée de l'Intelligence Artificielle crée aujourd'hui une nouvelle forme d'enthousiasme dans l'écosystème entrepreneurial africain. De nombreuses entreprises cherchent à identifier les outils les plus performants, à intégrer des assistants IA dans leurs équipes ou à développer de nouveaux produits basés sur ces technologies. Cette dynamique est positive, car elle témoigne d'une volonté d'innovation. Cependant, elle présente aussi un risque : celui de considérer l'IA comme une solution indépendante, alors qu'elle n'est réellement efficace que lorsqu'elle s'inscrit dans une organisation déjà structurée.\n\nUne entreprise ne devient pas plus intelligente simplement parce qu'elle utilise une intelligence artificielle. Une organisation qui manque de visibilité sur ses opérations, qui ne maîtrise pas ses données ou dont les processus internes reposent encore uniquement sur quelques personnes clés ne pourra pas exploiter pleinement le potentiel de l'IA.\n\nC'est pourquoi la prochaine étape de transformation des entreprises africaines ne sera probablement pas seulement une adoption massive de l'IA. Elle sera une transformation plus profonde des modèles opérationnels. Les entreprises devront passer d'une logique « AI First », où l'on cherche d'abord à appliquer une technologie, à une logique « System First », où l'on construit d'abord un système capable d'intégrer naturellement la technologie."
      }
    ]
  },
  {
    id: 2,
    title: "Et si on Repensait le design a l'africaine ? ",
    category: "Design",
    date: "28 juin 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?w=1400&q=80",
    sections: [
      {
        heading: "Concevoir pour l'Afrique commence par comprendre l'humain africain",
        body: "Depuis plusieurs années, le Design Thinking s'est imposé comme une approche majeure dans la conception de produits et services innovants. Popularisée par les grandes entreprises technologiques, les cabinets de conseil et les startups internationales, cette méthode repose sur une idée fondamentale : avant de créer une solution, il faut comprendre profondément les personnes auxquelles elle s'adresse.\n\nCependant, lorsqu'on parle d'expérience utilisateur en Afrique, une question essentielle mérite d'être posée : de quel utilisateur parle-t-on réellement ? Pendant longtemps, de nombreux produits numériques conçus pour le continent ont été inspirés par des modèles développés dans d'autres marchés. Pourtant, les usages ne sont jamais séparés de leur contexte. Les habitudes de consommation, les mécanismes de confiance, les relations sociales, les traditions et les contraintes économiques influencent profondément la manière dont les individus adoptent ou rejettent un produit.\n\nUn utilisateur africain n'est pas simplement un utilisateur occidental avec une connexion Internet plus faible ou un pouvoir d'achat différent. Il évolue dans un environnement où la famille, la communauté, la réputation et les relations humaines occupent souvent une place centrale dans la prise de décision."
      },
      {
        heading: "La confiance est la première interface utilisateur africaine",
        body: "Dans la conception traditionnelle des produits numériques, l'interface représente souvent le premier contact entre une marque et son utilisateur. Les designers cherchent à créer des parcours simples, intuitifs et agréables. Cette dimension reste essentielle, mais dans de nombreux contextes africains, une autre interface existe avant même l'écran : la confiance.\n\nAvant d'utiliser un nouveau service, beaucoup d'utilisateurs cherchent inconsciemment à répondre à une question fondamentale : « Est-ce que je peux faire confiance à cette entreprise ? » Cette confiance peut venir de plusieurs éléments : la présence d'un représentant local, la recommandation d'une personne connue, la réputation de l'entreprise, la disponibilité d'un service client humain ou encore la capacité de la marque à comprendre les réalités locales.\n\nC'est une différence importante dans la conception des expériences africaines. Une application peut être techniquement excellente, avec une interface moderne et des fonctionnalités avancées, mais échouer si elle ne parvient pas à créer suffisamment de confiance. À l'inverse, une solution plus simple peut réussir parce qu'elle comprend mieux les codes sociaux de son marché."
      },
      {
        heading: "Les contraintes africaines peuvent devenir des principes d'innovation",
        body: "Pendant longtemps, les contraintes africaines ont été considérées uniquement comme des obstacles. Une connexion Internet limitée, une faible bancarisation ou un accès inégal aux infrastructures étaient vus comme des problèmes qu'il fallait simplement compenser. Pourtant, certaines des innovations les plus intéressantes du continent sont justement nées de ces contraintes.\n\nLe Mobile Money en est un exemple majeur. Dans un modèle bancaire traditionnel, l'utilisateur doit souvent disposer d'un compte bancaire, se déplacer dans une agence et respecter plusieurs conditions administratives. Le Mobile Money a proposé une approche différente : utiliser le téléphone mobile et un réseau d'agents de proximité pour rendre les services financiers accessibles.\n\nUne connexion limitée pousse à créer des applications plus légères. Un faible pouvoir d'achat encourage des modèles économiques plus accessibles. Une forte importance de la relation humaine favorise des expériences hybrides combinant digital et proximité. L'innovation africaine montre ainsi qu'un bon design ne consiste pas toujours à ajouter davantage de fonctionnalités. Parfois, il consiste à supprimer la complexité inutile."
      }
      
    ]
  },
  {
    id: 3,
    title: "Nous construisons les ROIS africains de demain à la rencontre du design, de la technologie et de la stratégie",
    category: "Studio",
    date: "15 mai 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    sections: [
      {
        heading: "Une nouvelle génération de studio pour accompagner les organisations africaines ambitieuses",
        body: "Pendant longtemps, les entreprises africaines ont dû faire appel à plusieurs expertises distinctes lorsqu'elles souhaitaient accélérer leur transformation. Elles sollicitaient une agence pour construire leur image, un prestataire technique pour développer leurs outils numériques et un cabinet de conseil pour définir leur stratégie. Chaque acteur intervenait avec sa propre vision, ses propres méthodes et ses propres objectifs, créant parfois un manque de cohérence entre les différentes dimensions d'un même projet.\n\nPourtant, les grandes transformations ne naissent jamais d'une seule discipline. Un produit digital performant ne repose pas uniquement sur la technologie, une marque forte ne dépend pas seulement de son identité visuelle et une stratégie pertinente ne peut exister sans une compréhension profonde des utilisateurs, des marchés et des enjeux business.\n\nC'est de cette conviction qu'est né Eroïste, un studio tech & créatif spécialisé dans la conception d'expériences digitales, de produits technologiques et de stratégies de croissance pour les organisations africaines ambitieuses. Notre approche repose sur une idée simple : le design, la technologie et la stratégie ne doivent pas être pensés séparément, mais réunis dès le début d'un projet afin de créer des expériences cohérentes, performantes et capables de générer un impact durable."
      },
      {
        heading: "Notre différence : un studio intégré, pas une agence traditionnelle",
        body: "Eroïste n'est pas une agence de communication généraliste. Nous ne sommes pas un simple exécutant chargé de produire des livrables selon un cahier des charges défini ailleurs.\n\nNous sommes un partenaire de transformation. Nous intervenons lorsque les organisations cherchent à résoudre des problématiques complexes : créer un nouveau produit numérique, repositionner une marque, automatiser des opérations, moderniser une expérience client, développer une plateforme ou intégrer l'intelligence artificielle dans leurs processus.\n\nNotre valeur ne réside pas uniquement dans notre capacité à produire. Elle réside dans notre capacité à réfléchir, challenger et construire avec nos clients. Nous choisissons nos projets avec une conviction forte : chaque collaboration doit avoir un impact réel, mesurable et durable."
      },
      {
        heading: "EroCore™ : une nouvelle manière de collaborer",
        body: "Les projets complexes nécessitent aujourd'hui plus qu'une prestation classique. C'est pourquoi Eroïste a créé EroCore™, un modèle d'engagement conçu pour accompagner les organisations grâce à une équipe dédiée de spécialistes mobilisée autour d'un objectif commun.\n\nAvec EroCore™, le client n'achète pas simplement des heures ou une succession de livrables ; il active un Core, une cellule opérationnelle réunissant les expertises nécessaires pour faire avancer son projet. Cette équipe fonctionne comme une véritable extension de l'organisation cliente.\n\nEroïste Core Build accompagne la création de produits numériques, plateformes, ERP, applications et solutions basées sur l'intelligence artificielle. Eroïste Core Brand accompagne les organisations dans leur identité, leur direction artistique et leur communication. Eroïste Core Strategy intervient sur la transformation digitale, l'innovation, les études de marché et le pilotage stratégique. Eroïste Core AI développe des agents intelligents, des automatisations, des systèmes RAG et des copilotes métiers. Eroïste Core Secure protège les organisations grâce à des solutions de cybersécurité, de gouvernance et de résilience numérique."
      }
      
    ]
  }
]

export function ArticleDetail({ articleId, onBack }: ArticleDetailProps) {
  const article = articles.find(a => a.id === articleId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [articleId])

  if (!article) return null

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour au manifeste
        </button>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-400 mb-6">
          <span>{article.category}</span>
          <span>/</span>
          <span>{article.date}</span>
          <span>/</span>
          <span>{article.readTime} de lecture</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-light text-black leading-tight mb-16">
          {article.title}
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-black mb-16" />

        {/* Sections */}
        <div className="space-y-16">
          {article.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg lg:text-xl font-semibold text-black mb-6 leading-snug">
                {section.heading}
              </h2>
              <div className="space-y-5">
                {section.body.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Eroïste Studio</p>
          <p className="text-base text-gray-600">
            Vous souhaitez transformer votre organisation ?{' '}
            <button
              className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
              onClick={onBack}
            >
              Parlons-en.
            </button>
          </p>
        </div>
      </article>
    </div>
  )
}
