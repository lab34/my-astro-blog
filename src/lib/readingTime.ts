const WORDS_PER_MINUTE = 200;

/** Temps de lecture approximatif d'un texte Markdown, en minutes (minimum 1). */
export function readingTime(text: string): number {
  const words = text
    // retire les blocs de code et le frontmatter éventuel
    .replace(/```[\s\S]*?```/g, ' ')
    // retire la syntaxe Markdown courante
    .replace(/[#>*_`~\[\]()!-]/g, ' ');
  return Math.max(1, Math.round(words.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min de lecture`;
}
