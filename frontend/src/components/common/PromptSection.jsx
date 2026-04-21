import React from 'react'
import PromptButton from './PromptButton';
import ChoiceChip from './ChoiceChip';

const PromptSection = () => {
  return (
    <div className='max-w-3xl px-6 mx-auto mb-12'>
      <div className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20_80px_rgba(139,92,246,0.15)]'>
        <div className='absolute inset-0 opacity-50 pointer-events-none rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl' />
        <textarea
          name="prompt"
          id="prompt"
          className='w-full h-32 mb-6 text-lg tracking-wide bg-transparent resize-nonetext-white/90 placeholder-white/40 focus:outline-none'
          placeholder='Describe the image you want to generate...'
        />
        <div className='flex flex-wrap gap-2 mb-6'>
          <ChoiceChip choice="Cyberpunk" />
          <ChoiceChip choice="Realistic" />
          <ChoiceChip choice="Abstract" />
          <ChoiceChip choice="Anime" />
          <ChoiceChip choice="Fantasy" />
          <ChoiceChip choice="Sci-fi" />
        </div>
        <div className=''>
          <PromptButton />
        </div>
      </div>
    </div>
  )
}

export default PromptSection
