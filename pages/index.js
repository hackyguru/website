import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";
import Scramble from "@/components/hooks/scramble";

const columnA = [
  { src: "/portfolio14.jpg", title: "Porto, Portugal" },
  { src: "/portfolio6.jpeg", title: "London, UK" },
  { src: "/portfolio4.jpg", title: "Cape Cod, USA" },
  { src: "/portfolio11.jpg", title: "Wayanad, India" },
];

const columnB = [
  { src: "/portfolio13.jpg", title: "Machu Pichu, Peru" },
  { src: "/portfolio8.jpg", title: "London, UK" },
  { src: "/portfolio15.jpg", title: "UCL, London" },
  { src: "/portfolio2.jpg", title: "Los Angeles, USA" },
];

const socials = [
  { href: "https://x.com/hackyguru", label: "X", Icon: Twitter },
  { href: "https://github.com/hackyguru", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/kumaraguru7", label: "LinkedIn", Icon: Linkedin },
  { href: "https://instagram.com/guuru37", label: "Instagram", Icon: Instagram },
  { href: "mailto:guru@status.im", label: "Email", Icon: Mail },
];

const SITE_URL = "https://hackyguru.com";
const SEO_DESCRIPTION =
  "Kumaraguru (Guru) — builder, researcher and humanist. Developer Relations & core contributor at Logos, partner at tiro.vc, working on privacy, web3 and AI.";
const OG_IMAGE =
  "https://opengraph.b-cdn.net/production/images/caa47c77-8ab6-4f5b-b719-1d62f2c4498b.png?token=VJQa9rxzZRbNh4WeenJ3ssI52YcXZT7OyhGegosTXJ0&height=675&width=1200&expires=33265501302";

// Tiny dark placeholder shown while a photo loads (smooth, no pop-in).
const BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='4'%3E%3Crect width='100%25' height='100%25' fill='%23191919'/%3E%3C/svg%3E";

const Marker = () => <span className="text-zinc-100 mr-2 font-mono">{"//"}</span>;

const currentRoles = [
  {
    title: "Core contributor & Developer Relations @ Logos",
    image: "/logos.svg",
    description: "A foundational stack for an internet that upholds civil liberties.",
  },
  {
    title: "Partner @ tiro.vc",
    image: "/tiro-vc.svg",
    description: "Boutique investments in early-stage startups.",
  },
];

const pastRoles = [
  {
    title: "Developer Relations @ WalletConnect",
    image: "/walletconnect.svg",
    description: "Connecting dapps with web3 wallets through a seamless experience.",
  },
  {
    title: "Developer Advocate @ Protocol Labs",
    image: "/protocol.png",
    description: "Builders of IPFS, Filecoin, libp2p and more.",
  },
  {
    title: "Master of Science @ UCL",
    image: "/ucl.svg",
    description: "Computer science and financial technologies",
  },
];

const RoleCard = ({ title, image, description }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/20 hover:bg-white/10">
    <div className="flex items-center justify-between gap-3">
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-100 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-400">{description}</p>
      </div>
      <div className="relative h-9 w-9 shrink-0">
        <Image src={image} alt={title} width={36} height={36} className="h-full w-full object-contain" />
      </div>
    </div>
  </div>
);

// A column of images that scrolls vertically, top to bottom, forever.
const VerticalMarquee = ({ items, duration, reverse = false }) => {
  const loop = [...items, ...items];
  return (
    <motion.div
      className="flex flex-col gap-3"
      animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {loop.map((photo, i) => (
        <div
          key={`${photo.src}-${i}`}
          className="static-noise group relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden border border-white/10"
        >
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            quality={50}
            placeholder="blur"
            blurDataURL={BLUR}
            sizes="(min-width: 1280px) 20vw, 22vw"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
          <span className="absolute bottom-2 left-2 z-20 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {photo.title}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default function NewHome() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kumaraguru",
    alternateName: "Guru",
    url: SITE_URL,
    image: OG_IMAGE,
    jobTitle: "Developer Relations",
    description: SEO_DESCRIPTION,
    worksFor: { "@type": "Organization", name: "Logos", url: "https://logos.co" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University College London" },
    sameAs: socials.filter((s) => !s.href.startsWith("mailto")).map((s) => s.href),
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212] antialiased">
      <Head>
        <title>Guru</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="author" content="Kumaraguru" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#121212" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Guru" />
        <meta property="og:title" content="Guru" />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hackyguru" />
        <meta name="twitter:creator" content="@hackyguru" />
        <meta property="twitter:domain" content="hackyguru.com" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content="Guru" />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </Head>

      {/* Right — vertical marquee, pinned to the edge, full height top to bottom */}
      <section className="absolute right-0 top-0 z-0 hidden h-screen w-[42%] overflow-hidden lg:block xl:w-[38%]">
        <div className="grid h-full grid-cols-2 gap-3">
          <VerticalMarquee items={columnA} duration={40} />
          <VerticalMarquee items={columnB} duration={50} reverse />
        </div>
        {/* fade edges into the background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#121212] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#121212] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#121212] to-transparent" />
      </section>

      <main className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
        {/* Left — text */}
        <section className="flex flex-col lg:max-w-2xl">
          <h1 className="font-mono text-5xl font-bold text-zinc-100 md:text-6xl">
            <Scramble text="@hackyguru" />
          </h1>

          <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
            i&apos;m a builder, researcher &amp; humanist who believes technology
            should empower people, not control them. coding since i was 11,
            travelled to 40+ countries and a lifelong learner at heart.
          </p>

                    <p className="mt-4 flex items-center gap-2 text-base leading-relaxed text-zinc-400 md:text-lg">
            <MapPin className="h-5 w-5" /> london
          </p>


          <div className="mt-12">
            <h2 className="mb-4 font-mono text-base font-semibold text-zinc-100">
              <Marker />current
            </h2>
            <div className="space-y-2">
              {currentRoles.map((role) => (
                <RoleCard key={role.title} {...role} />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 font-mono text-base font-semibold text-zinc-100">
              <Marker />past
            </h2>
            <div className="space-y-2">
              {pastRoles.map((role) => (
                <RoleCard key={role.title} {...role} />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap gap-6">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
