import Link from 'next/link'
import React from 'react'
import Scramble from '../hooks/scramble'

export default function EndFooter() {
  return (
    <div className='bg-transparent flex text-center justify-center p-5 mt-20 opacity-40'>
       <h1 className='p-2 border rounded-xl border-gray-500'><a href='https://github.com/hackyguru/portfolio' className=''>open source</a> :) <Link className='underline' href="https://x.com/hackyguru">@hackyguru</Link></h1>
    </div>
  )
}
