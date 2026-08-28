import { Sparkles } from 'lucide-react';

const DEFAULT_NOTE =
  'Parts of this article were drafted with the help of AI. Every claim here was reviewed and edited by the author.';

// Rendered above the article body when a post sets `aiAssisted: true` in its
// frontmatter. `aiNote` overrides the default wording per post.
export default function AiDisclosure({ note }) {
  return (
    <div className="mb-10 flex flex-col gap-3 border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:gap-4">
      <span className="inline-flex w-fit shrink-0 items-center gap-1.5 border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-xs text-emerald-300">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        ai-assisted
      </span>
      <p className="text-sm leading-relaxed text-zinc-400">{note || DEFAULT_NOTE}</p>
    </div>
  );
}
