import { useState } from "react";
import Image from "next/image";

// Desaturated fractal-noise texture, encoded as an inline SVG data URI.
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")";

// Stable hash so each article gets its own (but consistent) gradient.
function seedFrom(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

// A random-but-deterministic noisy gray gradient that suits the dark theme.
export function NoisyGradient({ seed = "" }) {
  const s = seedFrom(seed || "article");
  const angle = s % 360;
  const l1 = 16 + (s % 14); // ~16–29
  const l2 = 30 + ((s >> 5) % 24); // ~30–53
  return (
    <div
      aria-hidden
      className="h-full w-full"
      style={{
        backgroundImage: `${NOISE}, linear-gradient(${angle}deg, rgb(${l1},${l1},${l1 + 2}), rgb(${l2},${l2},${l2 + 4}))`,
      }}
    />
  );
}

// Article thumbnail that falls back to a noisy gray gradient if the image
// is missing or fails to load. Expects a positioned (relative) parent.
export default function ArticleThumbnail({ src, alt, className = "", sizes, seed }) {
  const [failed, setFailed] = useState(!src);

  if (failed) return <NoisyGradient seed={seed || alt || src} />;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
