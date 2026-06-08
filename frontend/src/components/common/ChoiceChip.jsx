import React from 'react'

const ChoiceChip = ({ choice }) => {
  return (
    <button className='px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-white/80 transition-all 
    duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-pink-400/40 
      hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] focus:outline-none'>
      {choice}
    </button>
  )
}

export default ChoiceChip
