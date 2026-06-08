import React from 'react'

const Header = ({ title, description }) => {
  return (
    <div className='w-full mb-12 text-left '>
      <h1 className='mb-3 text-4xl font-bold text-white'>{title}</h1>
      <p className='text-gray-300 text-muted-foreground'>{description}</p>
    </div>
  )
}

export default Header
