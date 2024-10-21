import React from 'react'
import { PinContainer } from '@/components/ui/3d-pin'
import { Spotlight } from '@/components/ui/spotlight'
import awardsData from '@/awards-content/awards-data'
import Scramble from '@/components/hooks/scramble'
import Head from 'next/head'
import EndFooter from '@/components/ui/end-footer'
import { Image, Shimmer } from 'react-shimmer'

export default function Awards() {
  return (<>
    <Head>
      <title>Guru&apos;s Awards</title>
      <meta name="description" content="Discover Kumaraguru's hall of fame which has a collection of all the hackathon victories and other 50+ achievements" />
      <meta property="og:url" content="https://hackyguru.com/awards" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Guru's Awards" />
      <meta property="og:description" content="Discover Kumaraguru's hall of fame which has a collection of all the hackathon victories and other 50+ achievements" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/6cef5008-655c-462e-ba1c-77a45d34475b.png?token=n2Y1q5uBJdxBXxS_3b_-l_POBue2ynujzpty4kEDL9k&height=675&width=1200&expires=33265501758" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="hackyguru.com" />
      <meta property="twitter:url" content="https://hackyguru.com/awards" />
      <meta name="twitter:title" content="Guru's Awards" />
      <meta name="twitter:description" content="Discover Kumaraguru's hall of fame which has a collection of all the hackathon victories and other 50+ achievements" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/6cef5008-655c-462e-ba1c-77a45d34475b.png?token=n2Y1q5uBJdxBXxS_3b_-l_POBue2ynujzpty4kEDL9k&height=675&width=1200&expires=33265501758">

      </meta>
    </Head>
    <div className=" bg-black/[0.96] grainy space-y-6 antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen">
      <Spotlight />
      <div className=''>
        <h1
          className="text-4xl font-mono mb-8 mt-32 px-10 flex">{"/"}
          <Scramble text="Awards" /></h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-8  md:py-12">

        {awardsData.map((award, index) => (
          <PinContainer key={index} title={award.place} href={award.href}>
            <a href={award.href}>

              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {award.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-300">{award.conference}</span>
                </div>
                <div className="mt-4 rounded-none">
                  <Image fallback={<Shimmer className='opacity-50 mb-4 mr-4' width={400} height={300} />} width={400} height={300} className='rounded-none mb-4 bg-cover' src={award.image} />
                </div>          </div>
            </a>
          </PinContainer>
        ))}
      </div>
      <h1 className='text-center mt-10 flex w-full justify-center'>
        And more...</h1>
      <EndFooter />
    </div>
  </>

  )
}
