# Product Requirement Document (PRD) - Proto Blog Astro

## 1. Objectif du projet
Créer un prototype de blog ultra-léger, moderne et rapide ("Hello World") pour tester la chaîne de déploiement continu sur Cloudflare Pages.

## 2. Stack Technique
- **Framework :** Astro (mode SSG / statique)
- **Style :** Tailwind CSS
- **Langage :** JavaScript / TypeScript basique
- **Contenu :** Fichiers Markdown / MDX locaux (Content Collections)

## 3. Fonctionnalités & Pages requises
1. **Page d'accueil (`/`) :**
   - Header minimaliste avec le titre du blog et un lien GitHub.
   - Section Hero "Hello World" présentant le projet.
   - Liste des articles récents (titre, date, extrait, temps de lecture).
2. **Page Article (`/blog/[slug]`) :**
   - Rendu fluide du contenu Markdown.
   - Bouton de retour à l'accueil.
   - Métadonnées (date de publication, auteur).
3. **Composants :**
   - Layout global réutilisable (`BaseLayout.astro`).
   - Carte d'article (`PostCard.astro`).
   - Mode sombre / clair par défaut basé sur Tailwind (`dark` class).

## 4. Structure des dossiers attendue

/
├── src/
│   ├── content/
│   │   └── blog/
│   │       ├── hello-world.md
│   │       └── second-post.md
│   ├── components/
│   │   └── PostCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       └── blog/[...slug].astro
├── astro.config.mjs
└── package.json

## 5. Instructions pour l'Agent IA
- Initialise un projet Astro propre.
- Ajoute l'intégration Tailwind CSS (`npx astro add tailwind`).
- Utilise les **Content Collections** d'Astro pour gérer les articles Markdown.
- Crée 2 faux articles Markdown de démonstration dans `src/content/blog/`.
- Assure-toi que la commande `npm run build` génère un dossier `dist` sans aucune erreur.
