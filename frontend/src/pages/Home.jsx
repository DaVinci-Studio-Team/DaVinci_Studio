import React from 'react'
import Header from '../components/common/Header'
import ImageBoard from '../components/common/ImageBoard'

export default function Home() {
  return (
    <div className='p-12 mx-auto lg:px-16 max-w-7xl'>
      <Header
        title="Welcome to DaVinci Studio "
        description="Create stunning visuals from text prompts" 
      />
      <div className='flex flex-col grid-cols-3 mt-16 md:px-8 lg:px-12 lg:grid md:grid gap-14'>
        <div className='col-span-2'>
          <ImageBoard />
        </div>
        <div className='col-span-1'>

        </div>
      </div>
    </div>
  )
}
