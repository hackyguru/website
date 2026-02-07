import Link from 'next/link'
import React from 'react'
import { Github } from 'lucide-react'

export default function EndFooter() {
  return (
    <div className='w-full border-t border-white/10 bg-[#121212] mt-20 py-8'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4'>
         <div className="flex items-center gap-2">
            <span className='text-zinc-500 font-mono text-sm'>
                crafted by
            </span>
            <Link className='text-zinc-300 hover:text-white transition-colors font-mono text-sm font-bold' href="https://x.com/hackyguru">
                @hackyguru
            </Link>
         </div>

         <div className='flex items-center gap-6'>
            <a 
                href='https://github.com/hackyguru/portfolio' 
                target="_blank"
                rel="noreferrer"
                className='flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group'
            >
                <Github size={14} className="group-hover:text-white transition-colors"/>
                <span className='font-mono text-sm'>open source</span>
            </a>
         </div>
      </div>
    </div>
  )
}
