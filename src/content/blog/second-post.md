---
title: "Deuxième article : la suite du prototype"
description: "Un second article pour vérifier le tri par date, la navigation entre pages et le thème sombre."
pubDate: 2026-09-10
author: "Labouc"
---

Voici un **second article** de démonstration. Avoir au moins deux posts permet de vérifier que la liste d'accueil trie bien les articles par date décroissante, et que chaque page `/blog/[slug]` est générée indépendamment.

## Ce que ce second article valide

- Le **tri des articles** : celui-ci doit apparaître *après* « Hello World » ;
- Les **cartes d'article** avec extrait et temps de lecture ;
- Le **mode sombre / clair** via le bouton dans le header.

## Et côté déploiement ?

Chaque commit poussé déclenche un nouveau build sur Cloudflare Pages. Le site étant entièrement statique, il n'y a ni serveur ni base de données à maintenir : juste des fichiers HTML servis depuis le edge.

À la prochaine étape pour de vrais articles !
