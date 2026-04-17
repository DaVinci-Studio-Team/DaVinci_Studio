import React from 'react'
import PromptButton from './PromptButton';

const PromptSection = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="prompt" className='block text-sm font-bold text-black text-start'>Prompt</label>
        <textarea
          id="prompt"
          className='w-full px-4 py-3 mt-2 text-sm text-gray-800 bg-gray-200 border rounded-lg resize-none placeholder:text-sm h-28 focus:ring-blue-500 bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background'
          placeholder='Describe the image you want to generate...'
        />
      </div>
      <div>
        <PromptButton />
      </div>
      <div className='space-y-1 text-sm text-gray-700 text-muted-foreground text-start'>
        <p>Tips for better results:</p>
        <ul className='ml-2 space-y-1 list-disc list-inside'>
          <li>Be specific and descriptive.</li>
          <li>Include style, lighting, color & composition.</li>
          <li>Use adjectives to enhance the image.</li>
        </ul>
      </div>
    </div>
  )
}

export default PromptSection
