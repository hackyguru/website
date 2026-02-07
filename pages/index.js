import React from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Link from "next/link";
import EndFooter from "@/components/ui/end-footer";
import Head from "next/head";

import Scramble from "@/components/hooks/scramble";

export default function SpotlightPreview() {

  const RoleCard = ({ title, date, image, description }) => (
    <div className="p-5 border border-white/10 rounded-2xl mb-4 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-colors group">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-100 group-hover:text-white transition-colors">
            {title} <span className="text-gray-500 text-sm font-normal block md:inline md:ml-2">{date}</span>
          </h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed pr-6">
            {description}
          </p>
        </div>
        <div className="relative w-12 h-12 shrink-0">
          <img
            src={image}
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full rounded-md md:items-center md:justify-center bg-[#121212] antialiased relative overflow-hidden">
      <Head>
        <title>Guru</title>
        <meta name="description" content="Kumaraguru's portfolio website that illustrates his career and life. Learn more about his goals, passions and achievements" />
        <meta property="og:url" content="https://hackyguru.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guru" />
        <meta property="og:description" content="Kumaraguru's portfolio website that illustrates his career and life. Learn more about his goals, passions and achievements" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/caa47c77-8ab6-4f5b-b719-1d62f2c4498b.png?token=VJQa9rxzZRbNh4WeenJ3ssI52YcXZT7OyhGegosTXJ0&height=675&width=1200&expires=33265501302" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="hackyguru.com" />
        <meta property="twitter:url" content="https://hackyguru.com" />
        <meta name="twitter:title" content="Guru" />
        <meta name="twitter:description" content="Kumaraguru's portfolio website that illustrates his career and life. Learn more about his goals, passions and achievements" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/caa47c77-8ab6-4f5b-b719-1d62f2c4498b.png?token=VJQa9rxzZRbNh4WeenJ3ssI52YcXZT7OyhGegosTXJ0&height=675&width=1200&expires=33265501302"></meta>

      </Head>
      <div className="flex justify-center mt-4">
      </div>
      <HeroParallax pictures={pictures} />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">

          <div id="work" className="w-full">
            <h1 className="text-2xl md:text-3xl font-mono mb-8 flex text-zinc-100">{"//"} <span className="ml-2"><Scramble text="work" /></span></h1>
            <hr className="opacity-10 my-8 border-zinc-700" />
            
            <h1 className="text-lg md:text-xl font-mono mt-10 mb-5 flex text-zinc-300">{"/"} <span className="ml-2"><Scramble text="current roles" /></span></h1>
            <RoleCard 
              title="Core contributor @ Logos" 
              date="(Jan, 2023 - now)" 
              image="/logos.svg"
              description="Logos is a foundational stack for building an internet that can evolve into network states that empower uses by upholding civil liberties"
            />

            <h1 className="text-lg md:text-xl font-mono mt-10 mb-5 flex text-zinc-300">{"/"} <span className="ml-2"><Scramble text="previous roles" /></span></h1>
            <RoleCard 
              title="Developer Relations @ WalletConnect" 
              image="/walletconnect.svg"
              description="WalletConnect helps users to seamlessly connect dapps with web3 wallets with an engagging web3 user experience"
            />
            <RoleCard 
              title="Developer Advocate @ Protocol Labs" 
              image="/protocol.png"
              description="Protocol Labs are the builders of groundbreaking distributed technologies like IPFS, Filecoin, Libp2p and much more"
            />
            <RoleCard 
              title="Web Developer Intern @ Ministry of Education, India" 
              image="/ministryofeducation.jpeg"
              description="Worked on building and maintaining web applications for the Ministry of Education's initiatives"
            />

            <h1 className="text-lg md:text-xl font-mono mt-10 mb-5 flex text-zinc-300">{"/"} <span className="ml-2"><Scramble text="academia" /></span></h1>
            <RoleCard 
              title="MSc in Emerging digital technologies - UCL, UK" 
              image="/ucl.svg"
              description="Specializing in blockchain, data science and privacy preserving technologies at University College London"
            />
            <RoleCard 
              title="BE in Computer Engineering - SKCET, India" 
              image="/skcet.png"
              description="Graduated as the 'best outgoing student - Batch of 2023' at Sri Krishna College of Engineering and Technology"
            />

          </div>

          <div id="about" className="w-full mt-10 lg:mt-0 flex flex-col h-full">
             <h1 className="text-2xl md:text-3xl font-mono mb-8 flex text-zinc-100">{"//"} <span className="ml-2"><Scramble text="about me" /></span></h1>
             <hr className="opacity-10 my-8 border-zinc-700" />
             <div className="text-base text-zinc-400 leading-relaxed space-y-6 shadow font-sans font-normal mb-8">
                <p>
                  I am a builder, researcher and a humanist who believes that technology should empower people, not control them. My mission is to build tools that protect civil liberties and enable true digital sovereignty.
                </p>
                <p>
                  My journey into the rabbit hole started when I stumbled upon the cypherpunk manifesto in my early college days. Since then, I have been fascinated by the intersection of cryptography, economics and politics.
                </p>
                <p>
                    I have been traveling the world as a digital nomad for the past 2 years, living in 15+ countries and exploring diverse cultures. To me, travel is not just about seeing new places, but about understanding the human condition in all its forms.
                </p>
             </div>
             <div className="flex-grow w-full min-h-[300px] relative rounded-lg overflow-hidden border border-white/10 opacity-60 hover:opacity-100 transition-opacity">
                 <img src="/art.png" className="absolute inset-0 w-full h-full object-cover" alt="Art" />
             </div>
          </div>
        </div>
      </div>
      <EndFooter />
    </div>
  );
}

export const pictures = [
  {
    title: "Cape Cod, USA",
    thumbnail:
      "/portfolio4.png",
  },
  {
    title: "ETHRome, Italy",
    thumbnail:
      "/gururome.gif",
  },
  {
    title: "Rome, Italy",
    thumbnail:
      "/portfolio2.png",
  },
  {
    title: "Phuket, Thailand",
    thumbnail:
      "/portfolio5.png",
  },
  {
    title: "Phuket, Thailand",
    thumbnail:
      "/portfolio5.png",
  },
  {
    title: "Kasol, India",
    thumbnail:
      "/portfolio8.png",
  },
  {
    title: "ETHDam, The Netherlands",
    thumbnail:
    "/ethdam.gif",
  },
  {
    title: "Mount Fuji, Japan",
    thumbnail:
      "/portfolio14.png",
  },
  {
    title: "Athens, Greece",
    thumbnail:
      "/portfolio6.png",
  },
  {
    title: "Athens, Greece",
    thumbnail:
      "/portfolio12.png",
  },
  {
    title: "Denver, USA",
    thumbnail:
      "/portfolio1.png",
  },
  {
    title: "Wayanad, India",
    thumbnail:
      "/portfolio11.png",
  },
  {
    title: "Istanbul, Turkey",
    thumbnail:
      "/damtalk.gif",
  },
  {
    title: "Lisbon, Portugal",
    thumbnail:
      "/portfolio13.png",
  },
  {
    title: "Chiang Mai, Thailand",
    thumbnail:
      "/portfolio15.png",
  },
];