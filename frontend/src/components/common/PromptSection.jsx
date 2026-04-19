import React from 'react'
import PromptButton from './PromptButton';
import ChoiceChip from './ChoiceChip';

const PromptSection = () => {
  return (
    <div className='max-w-3xl mx-auto mb-12'>
      <div className='p-8 border shadow-2xl rounded-2xl border-border backdrop-blur-xl'>
        <textarea
          name="prompt"
          id="prompt"
          className='w-full h-32 mb-6 bg-transparent resize-none focus:outline-none text-foreground placeholder-muted-foreground'
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
