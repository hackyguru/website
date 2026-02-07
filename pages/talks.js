import React from 'react'

import talksContent from '@/talks-content/talks-data'
import Scramble from '@/components/hooks/scramble'
import Head from 'next/head'
import EndFooter from '@/components/ui/end-footer'
import { Image, Shimmer } from 'react-shimmer'

export default function Talks() {
  return (<>
                    <Head>
        <title>Guru&apos;s Talks</title>
      <meta name="description" content="Discover all the talks and workshops hightlighting Kumaraguru, who has shared insights in 25+ conferences around the world" />
      
<meta property="og:url" content="https://hackyguru.com/talks" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Guru's Talks" />
<meta property="og:description" content="Discover all the talks and workshops hightlighting Kumaraguru, who has shared insights in 25+ conferences around the world" />
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/f74bd89a-0d00-4582-a7c6-5532b88d1bf9.png?token=sfQoRS3NGs4RZBbxo0UAC3MJRdVSvRpyZkSzxs2lzR8&height=675&width=1200&expires=33265501641" />

<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="hackyguru.com" />
<meta property="twitter:url" content="https://hackyguru.com/talks" />
<meta name="twitter:title" content="Guru's Talks" />
<meta name="twitter:description" content="Discover all the talks and workshops hightlighting Kumaraguru, who has shared insights in 25+ conferences around the world" />
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/f74bd89a-0d00-4582-a7c6-5532b88d1bf9.png?token=sfQoRS3NGs4RZBbxo0UAC3MJRdVSvRpyZkSzxs2lzR8&height=675&width=1200&expires=33265501641">
</meta>
      </Head>
    <div className=" bg-[#121212] space-y-6 antialiased relative overflow-hidden min-h-screen">

      <div className=''>
        <h1
          className="text-4xl font-mono mb-8 mt-32 px-10 flex">{"/"}
          <Scramble text="Talks" /></h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8 md:px-6 md:py-12">

        {talksContent.map((talk, index) => (
          <a  href={talk.href} key={index} target="_blank" rel="noopener noreferrer" className="block h-full"> 
            <div className="h-full bg-[#121212] border border-white/10 overflow-hidden hover:border-white/20 transition-colors group flex flex-col">
              <div className="w-full aspect-video relative overflow-hidden bg-zinc-900">
                <Image 
                  fallback={<Shimmer width={400} height={300} className="w-full h-full" />} 
                  src={talk.image} 
                  alt={talk.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-base text-zinc-100 mb-2 line-clamp-2">
                  {talk.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                  {talk.conference}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                     {talk.place}
                  </span>
                  <span className="text-xs text-zinc-600 group-hover:text-white transition-colors">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}

      </div>
    <EndFooter />
    </div>
  </>

  )
}
