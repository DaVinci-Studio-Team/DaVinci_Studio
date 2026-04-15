import React from 'react'
import Header from '../components/common/Header'
import PromptSection from '../components/common/PromptSection'

export default function Home() {
  return (
    <div className='py-12 mx-auto lg:px-16 max-w-7xl'>
      <Header
        title="Welcome to DaVinci Studio "
        description="Create stunning visuals from text prompts" 
      />
      <div className='flex grid-cols-3 px-12 mt-16 lg:grid md:grid gap-14'>
        <div className='col-span-2'>
          
        </div>
        <div className='lg:col-span-1 '>
          <PromptSection />
        </div>
      </div>
    </div>
  )
}
