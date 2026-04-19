import React from 'react'

const ChoiceChip = ({ choice }) => {
  return (
    <button className='px-4 py-2 text-sm transition-all border rounded-lg backdrop-blur-sm border-border hover:border-pink-500/50 hover:bg-pink-500/10 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:ring-offset-2 focus:ring-offset-background'>
      {choice}
    </button>
  )
}

export default ChoiceChip
