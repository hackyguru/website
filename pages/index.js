import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import Navbar from "@/components/ui/navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Link from "next/link";
import EndFooter from "@/components/ui/end-footer";
import Head from "next/head";

import Scramble from "@/components/hooks/scramble";

export default function SpotlightPreview() {

  return (
    <div className="min-h-screen grainy w-full rounded-md md:items-center md:justify-center bg-black antialiased bg-dot-white/[0.1] relative overflow-hidden">
      <Head>
        <title>Guru</title>
        <meta name="description" content="Kumaraguru's portfolio website that illustrates his career and life. Learn more about his goals, passions and achievements" />
      </Head>
      <div className="flex justify-center mt-4">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
      </div>
      <HeroParallax pictures={pictures} />
      <div className="py-80 md:py-20">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
        <div id="work" className="p-5 md:p-10">
          <h1 className="text-3xl">about my work</h1>
          <hr className="opacity-50 my-5" />
          <h1
            className="text-xl font-mono mt-10 flex">{"/"}
            <Scramble text="current roles" /></h1>
          <div className="p-5 border mt-5 border-gray-600 mb-3">
          <div className="flex justify-between items-start space-x-3">
              <h1>Developer Relations @ Codex {"(Jan, 2023 - now)"}</h1>
            <img width={50} height={50} src="https://codex.storage/theme/image/logo.svg" />
            </div>
              <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Codex is the storage/archival layer of the Logos technology stack which is powered by a censorship-resistant Decentralised Durability Engine</h4>
          </div>
          <div className="p-5 border mt-5 border-gray-600 mb-3">
          <div className="flex justify-between items-start space-x-3">
              <h1>Developer Relations @ Waku {"(Jan, 2023 - now)"}</h1>
            <img width={50} height={50} src="https://waku.org/theme/image/logo.svg" />
            </div>
            <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Waku is a family of privacy preserving, decentralised and DoS resistant web3 communications protocols powering the communication layer of Logos technology stack</h4>
          </div>
          <div className="p-5 border mt-5 border-gray-600 mb-3">
          <div className="flex justify-between items-start space-x-3">
              <h1>Core contributor @ Logos {"(Jan, 2023 - now)"}</h1>
            <img width={50} height={50} src="https://logos.co/theme/image/logo.svg" />
            </div>
              <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Logos is a foundational stack for building an internet that can evolve into network states that empower uses by upholding civil liberties</h4>
          </div>
          <h1
            className="text-xl font-mono mt-10 flex">{"/"}
            <Scramble text="previous roles" /></h1>
            <div className="p-5 border mt-5 border-gray-600 mb-3">
            <div className="flex justify-between items-start space-x-3">
              <h1>Developer Relations @ WalletConnect</h1>
            <img width={50} height={50} src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" />
            </div>
            <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">WalletConnect helps users to seamlessly connect dapps with web3 wallets with an engagging web3 user experience</h4>
          </div>
          <div className="p-5 border mt-5 border-gray-600 mb-3">
          <div className="flex justify-between items-start space-x-3">
              <h1>Community Developer Advocate @ Protocol Labs</h1>
            <img width={50} height={50} src="https://cdn.filepicker.io/api/file/AUKOvpYVS3GtJ7xp1NMV" />
            </div>
              <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Protocol Labs are the builders of groundbreaking distributed technologies like IPFS, Filecoin, Libp2p and much more</h4>
          </div>
          <div className="p-5 border mt-5 border-gray-600 mb-3">
          <div className="flex justify-between items-start space-x-3">
              <h1>Web Developer Intern @ Ministry of Education, India</h1>
            <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUfmMmAnRk_Zz3fhgWxDaE_caY_i0AAG6AYaq3uK7WQ&s" />
            </div>
              <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Protocol Labs are the builders of groundbreaking distributed technologies like IPFS, Filecoin, Libp2p and much more</h4>
          </div>

          <h1
            className="text-xl font-mono mt-10 flex">{"/"}
            <Scramble text="academia" /></h1>
            <div className="p-5 border mt-5 border-gray-600 mb-3">
            <div className="flex justify-between items-start space-x-3">
              <h1>Master of Science in Emerging digital technologies (Blockchain) - University College London, UK</h1>
            <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEL7XDjBhifKhuDkuxs25pwGw6F01SMBnGA&s" />
            </div>
            <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Pursuing post-graduate education specializing in blockchain, data science and privacy preserving technologies at University College London</h4>
          </div>
          <div className="p-5 border mt-5 border-gray-600 mb-3">
          <div className="flex justify-between items-start space-x-3">
              <h1>Bachelor of Computer Engineering - Sri Krishna College of Engineering and Technology, India</h1>
            <img width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/a/aa/SKI-Coimbatore-Logo.webp" />
            </div>
              <h4 className="text-sm text-gray-400 mt-5 md:mt-0 w-full">Graduated as the &lsquo;best outgoing student - Batch of 2023&lsquo; at Sri Krishna College of Engineering and Technology, India</h4>
          </div>


          <div className="md:flex md:justify-between">

            <div className="md:w-1/2">
              <h1
                className="text-xl font-mono mt-10 flex">{"/"}
                <Scramble text="areas of expertise" /></h1>
              <div className="pr-10 py-5">
                <img src="expertise.png" />
              </div>
              <div className="text-sm text-gray-400 mt-5 space-y-5">
                <h4>
                  {"> "} Full stack web3 development (serverless & blockchain based)
                </h4>
                <h4>
                  {"> "} Solidity based EVM smart contracts development and debugging
                </h4>
                <h4>
                  {"> "} Design and implementation of distributed computing systems
                </h4>
                <h4>
                  {"> "} Cross platform mobile / desktop application development
                </h4>
                <h4>
                  {"> "} Building SDKs, developer tooling and other developer resources
                </h4>
                <h4>
                  {"> "} Developer outreach and advocacy for principle driven projects
                </h4>
                <h4>
                  {"> "} Delivering hands-on workshops for technologies that i love
                </h4>
                <h4>
                  {"> "} Technical research, product design and business modelling
                </h4>
              </div>
            </div>
            <div className="md:w-1/2 text-start">

              <h1
                className="text-xl font-mono mt-10 flex">{"/"}
                <Scramble text="key shilling points" /></h1>
              <div className="pr-10 py-5">
                <img src="shills.png" />
              </div>
              <div className="text-sm text-gray-400 mt-5 space-y-5">
                <h4>
                  {"> "} Hackathon veteran. <Link className="underline" href="/awards">Winner at 50+ international hackathons {"(web2 and web3)"}</Link>
                </h4>
                <h4>
                  {"> "} I was the First developer relations hire in both <Link className="underline" href="https://walletconnect.com">WalletConnect</Link> and <Link className="underline" href="/https://waku.org">Waku</Link>
                </h4>
                <h4>
                  {"> "} I received honorary recognitions from 4 nation states till date
                </h4>
                <h4>
                  {"> "} I&lsquo;ve presented keynote speeches and hosted workshops at 25+ conferences
                </h4>
                <h4>
                  {"> "} I graduated my Bachelors in CS Engineering with &lsquo;the best outgoing student&lsquo; award
                </h4>
                <h4>
                  {"> "} I&lsquo;ve worked in asynchronous remote work environments and never been to an physical office
                </h4>
                <h4>
                  {"> "} I wrote technical documentation for projects with over 20k developers in their ecosystem
                </h4>
                <h4>
                  {"> "} I made my first open source contribution when I was 13
                </h4>
              </div>
            </div>
          </div>

        </div>

        <div id="life" className="p-5 md:p-10">
          <h1 className="text-3xl">my life</h1>
          <hr className="opacity-50 my-5" />
          <div className="md:flex md:justify-between">

            <div className="md:w-1/2">
              <h1
                className="text-xl font-mono mt-10 flex">{"/"}
                <Scramble text="goals and values" /></h1>
              <div className="pr-10 py-5">
                <img src="shills.png" />
              </div>
              <div className="text-sm text-gray-400 mt-5 space-y-5">
                <h4>
                  {"> "} I travel as much as I can. I&lsquo;ve set foot in 35 countries at the age of 22
                </h4>
                <h4>
                  {"> "} I try to feed strays and pat pat everytime i come across a paw buddy
                </h4>
                <h4>
                  {"> "} I try to live as local as possible when i visit new places
                </h4>
                <h4>
                  {"> "} I love riding cruiser bikes in mountains & I ride my harley when i&lsquo;m back home
                </h4>
                <h4>
                  {"> "} I would not say no to people who are in need of food
                </h4>
                <h4>
                  {"> "} I strongly belive that equality and equity are different things in a society
                </h4>
                <h4>
                  {"> "} I give and take respect regardless of the person&lsquo;s social profile
                </h4>
              </div>
              <h1
                className="text-xl font-mono mt-10 flex">{"/"}
                <Scramble text="manifesto" /></h1>
              <div className="pr-10 py-5">
                <img src="manifesto.png" />
              </div>
              <div className="text-sm text-gray-400 mt-5 space-y-5">
                <h4>
                  {"> "} Experiences over materialism. People over beliefs. Exploration over regrets
                </h4>
              </div>
            </div>
            <div className="md:w-1/2 text-start">

              <h1
                className="text-xl font-mono mt-10 flex">{"/"}
                <Scramble text="faith" /></h1>
              <div className="pr-10 py-5">
                <img src="faith.png" />
              </div>
              <div className="text-sm text-gray-400 mt-5 space-y-5">
                <h4>
                  {"> "} Deeper your faith, quieter you become
                </h4>
                <h4>
                  {"> "} I&lsquo;m deeply spiritual but i do not associate myself with a specific religious belief
                </h4>
              </div>
              <h1
                className="text-xl font-mono mt-10 flex">{"/"}
                <Scramble text="sports & art" /></h1>
              <div className="pr-10 py-5">
                <img src="art.png" />
              </div>
              <div className="text-sm text-gray-400 mt-5 space-y-5">
                <h4>
                  {"> "} I love Manchester United, Real Madrid and I ocassionally play football
                </h4>
                <h4>
                  {"> "} I love visiting art galleries and museums on any random weekday
                </h4>
                <h4>
                  {"> "} I enjoy reading Franz Kafka, Dan Brown and journals from various independent scientific authors
                </h4>
                <h4>
                  {"> "} Music plays a huge part of my everyday-life
                </h4>
              </div>

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
    title: "Denver, USA",
    thumbnail:
      "/portfolio1.png",
  },
  {
    title: "Rome, Italy",
    thumbnail:
      "/portfolio2.png",
  },
  {
    title: "James bond island, Thailand",
    thumbnail:
      "/portfolio3.png",
  },

  {
    title: "Cape Cod, USA",
    thumbnail:
      "/portfolio4.png",
  },
  {
    title: "Phuket, Thailand",
    thumbnail:
      "/portfolio5.png",
  },
  {
    title: "Athens, Greece",
    thumbnail:
      "/portfolio6.png",
  },

  {
    title: "Istanbul, Turkey",
    thumbnail:
      "/portfolio7.png",
  },
  {
    title: "Kasol, India",
    thumbnail:
      "/portfolio8.png",
  },
  {
    title: "Chiang Rai, Thailand",
    thumbnail:
      "/portfolio9.png",
  },
  {
    title: "Lisbon, Portugal",
    thumbnail:
      "/portfolio10.png",
  },
  {
    title: "Munnar, India",
    thumbnail:
      "/portfolio11.png",
  },

  {
    title: "Athens, Greece",
    thumbnail:
      "/portfolio12.png",
  },
  {
    title: "Lisbon, Portugal",
    thumbnail:
      "/portfolio13.png",
  },
  {
    title: "Mount Fuji, Japan",
    thumbnail:
      "/portfolio14.png",
  },
  {
    title: "Chiang Mai, Thailand",
    thumbnail:
      "/portfolio15.png",
  },
];