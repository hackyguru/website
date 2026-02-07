import React from 'react'
import Scramble from '@/components/hooks/scramble'

export default function NotFound() {
  return (
    <div className='flex justify-center h-screen items-center'>
                      <h1
  className="text-xl font-mono mt-10 flex">{"/"}
  <Scramble  text="404 Not found" /></h1>
    </div>
  )
}
