import React from 'react'
import Header from '../components/common/Header'
import PromptSection from '../components/common/PromptSection'
import ImageBoard from '../components/common/ImageBoard'

export default function Home() {
  return (
    <div className='py-12 mx-auto lg:px-16 max-w-7xl'>
      <Header
        title="Welcome to DaVinci Studio "
        description="Create stunning visuals from text prompts"
      />
      <div className='flex flex-col mt-16 md:px-8 lg:px-12 gap-14'>
        <PromptSection />
      </div>
      <div>
        <ImageBoard />
      </div>
    </div>
  )
}
