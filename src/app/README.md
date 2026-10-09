# CreaTech - Creative & Tech Agency Website

Un site web moderne et responsive pour une agence creative & tech, inspiré de la structure de Kaanari.com mais avec une identité propre.

## ✨ Caractéristiques

- **Design moderne** : Interface élégante avec animations fluides
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **Performances** : Images lazy-loading, animations optimisées
- **Accessibilité** : Navigation au clavier, ARIA labels, focus states
- **SEO Ready** : Structure HTML sémantique et meta tags

## 🚀 Sections du site

1. **Header** - Navigation fixe avec menu hamburger mobile
2. **Hero** - Section d'accueil avec animation et CTA
3. **Clients** - Carousel automatique des logos clients
4. **Expertise** - Cartes de services avec animations hover
5. **Portfolio** - Galerie filtrable de projets
6. **Contact** - Formulaire de contact avec validation
7. **Footer** - Liens sociaux et informations

## 🛠 Technologies utilisées

- **React 18** avec TypeScript
- **Tailwind CSS v4** pour le styling
- **Lucide React** pour les icônes
- **ShadCN/UI** pour les composants
- **CSS Animations** pour les micro-interactions

## 📱 Responsive Breakpoints

- **Mobile** : ≤ 640px
- **Tablet** : 641px - 1024px  
- **Desktop** : > 1024px

## 🎨 Design System

### Couleurs
- **Primary** : Bleu (#3B82F6) 
- **Secondary** : Violet (#8B5CF6)
- **Neutral** : Grays (#F8FAFC à #1E293B)
- **Accent** : Orange pour CTAs

### Typographie
- **Titres** : Poppins (300-700)
- **Corps** : Inter (300-600)
- **Base** : 16px

### Espacements
- Système basé sur rem (0.25rem à 6rem)
- Grid responsive avec gap adaptatif

## 🚀 Installation et déploiement local

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [repository-url]
cd createch-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de production
```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

## 📧 Configuration du formulaire de contact

Le formulaire de contact est actuellement configuré avec une validation front-end et une simulation d'envoi.

### Pour une vraie intégration :

#### Option 1: Netlify Forms
1. Ajouter `data-netlify="true"` au formulaire
2. Ajouter un champ caché `<input type="hidden" name="form-name" value="contact" />`

#### Option 2: Formspree
1. Créer un compte sur [Formspree](https://formspree.io)
2. Remplacer l'action du formulaire par votre endpoint Formspree

#### Option 3: Emailjs
1. Installer : `npm install @emailjs/browser`
2. Configurer avec vos identifiants EmailJS

## 🌐 Déploiement

### Netlify (Recommandé)
1. Connecter le repository à Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Connecter le repository à Vercel
2. Configuration automatique pour React

### GitHub Pages
1. Installer gh-pages: `npm install --save-dev gh-pages`
2. Ajouter au package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://[username].github.io/[repository]"
}
```

## 🎯 Optimisations incluses

- **Images** : Lazy loading automatique
- **Animations** : Respect de `prefers-reduced-motion`
- **Performance** : Code splitting et tree shaking
- **SEO** : Meta tags et structure sémantique
- **Accessibilité** : Navigation clavier et ARIA

## 📝 Personnalisation

### Contenu
- Modifier les textes dans chaque composant
- Remplacer les images placeholder par vos assets
- Ajuster les projets portfolio dans `Portfolio.tsx`

### Style
- Personnaliser les couleurs dans `globals.css`
- Modifier les animations dans les composants
- Ajuster les breakpoints responsive

### Fonctionnalités
- Ajouter Google Analytics
- Intégrer un CMS headless
- Connecter à une base de données

## 🔧 Structure des fichiers

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants ShadCN
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Section hero
│   ├── Clients.tsx     # Carousel clients
│   ├── Expertise.tsx   # Services
│   ├── Portfolio.tsx   # Projets
│   ├── Contact.tsx     # Formulaire
│   └── Footer.tsx      # Pied de page
├── styles/
│   └── globals.css     # Styles globaux
└── App.tsx             # Composant principal
```

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation pour vos projets personnels et commerciaux.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 📞 Support

Pour toute question ou assistance :
- Email : hello@createch.com
- Issues GitHub : [Créer une issue]

---

**CreaTech** - Transforming digital experiences through innovative design and technology.