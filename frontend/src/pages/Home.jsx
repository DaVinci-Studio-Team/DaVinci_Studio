import React from 'react'
import Header from '../components/common/Header'

export default function Home() {
  return (
    <div className='p-12 mx-auto max-w-7xl'>
      <Header
        title="Welcome to DaVinci Studio "
        description="Create stunning visuals from text prompts" 
      />
      <h1 className="text-3xl font-bold">Home</h1>
    </div>
  )
}
