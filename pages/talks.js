import React from 'react'
import { PinContainer } from '@/components/ui/3d-pin'
import { Spotlight } from '@/components/ui/spotlight'
import talksContent from '@/talks-content/talks-data'
import Scramble from '@/components/hooks/scramble'
import Head from 'next/head'
import EndFooter from '@/components/ui/end-footer'

export default function Talks() {
  return (<>
                    <Head>
        <title>Guru&apos;s Talks</title>
      <meta name="description" content="Discover all the talks and workshops hightlighting Kumaraguru, who has shared insights in 25+ conferences around the world" />
      </Head>
    <div className=" bg-black/[0.96] grainy space-y-6 antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen">
      <Spotlight />
      <div className=''>
        <h1
          className="text-4xl font-mono mb-8 mt-32 px-10 flex">{"/"}
          <Scramble text="Talks" /></h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-8 md:px-6 md:py-12 ">

        {talksContent.map((talk, index) => (
          <PinContainer key={index} title={talk.place} href={talk.href}>
            <a  href={talk.href}>

            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {talk.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-300">{talk.conference}</span>
              </div>
              <div className="mt-4 rounded-none">
                <img className='rounded-none mb-4 bg-cover' src={talk.image} />
              </div>
            </div>
            </a>
          </PinContainer>
        ))}

      </div>
    <EndFooter />
    </div>
  </>

  )
}
