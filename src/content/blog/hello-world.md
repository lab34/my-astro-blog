---
title: "Hello World"
description: "Le premier article de ce blog prototype : un test complet de la chaîne Astro → Tailwind → Cloudflare Pages."
pubDate: 2026-09-11
author: "Labouc"
---

Bienvenue sur **Hello World**, le premier article de ce blog prototype. L'objectif est simple : valider de bout en bout la chaîne de publication — des fichiers Markdown locaux jusqu'à un site statique déployé sur Cloudflare Pages.

## Pourquoi ce prototype ?

Avant d'écrire du vrai contenu, on veut s'assurer que les fondations sont solides :

- **Astro** en mode statique (SSG) pour des pages ultra-légères ;
- **Tailwind CSS** pour styler rapidement sans fichier CSS custom ;
- Les **Content Collections** pour gérer les articles avec un schéma validé ;
- Un build `npm run build` qui produit un dossier `dist/` prêt à déployer.

## Un peu de Markdown pour tester le rendu

Le rendu des articles doit rester fluide. Voici un extrait de code :

```js
export function hello(name = 'world') {
  return `Hello, ${name}!`;
}
```

Une citation pour la route :

> Simplicity is a great virtue but it requires hard work to achieve it.
> — Edsger W. Dijkstra

Et une liste de vérification du prototype :

1. Le contenu Markdown est bien rendu
2. Les métadonnées (date, auteur) s'affichent
3. Le temps de lecture est calculé automatiquement

Si vous lisez ces lignes sur le site déployé, c'est que toute la chaîne fonctionne. 🎉
