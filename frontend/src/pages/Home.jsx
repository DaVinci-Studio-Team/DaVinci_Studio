import React from 'react'
import Header from '../components/common/Header'
import PromptSection from '../components/common/PromptSection'
import ImageBoard from '../components/common/ImageBoard'

export default function Home() {
  return (
    <div className='py-12 mx-auto lg:px-16 max-w-7xl'>
      <Header/>
      <div className='flex flex-col grid-cols-3 mt-16 md:px-8 lg:px-12 lg:grid md:grid gap-14'>
        <div className='col-span-2'>
          <ImageBoard />
        </div>
        <div className='lg:col-span-1 '>
          <PromptSection />
        </div>
      </div>
    </div>
  )
}
