import React, { useState } from 'react';
import PromptButton from './PromptButton';
import ChoiceChip from './ChoiceChip';
import ImageBoard from './ImageBoard';
import { generateImageAPI } from '../../services/prompt.api';

const PromptSection = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const res = await generateImageAPI(prompt, 4);

      if (res.success) {
        setGeneratedImages(res.image[0]);
      }
    } catch (error) {
      console.log("Image generation failed:", error);
      setError("Failed to generate images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChoiceClick = (choice) => {
    setPrompt(choice);
  };

  return (
    <>
      <div className='max-w-3xl px-6 mx-auto mb-12'>
        <div className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20_80px_rgba(139,92,246,0.15)]'>

          <div className='absolute inset-0 opacity-50 pointer-events-none rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl' />

          {/* Prompt Textarea */}
          <textarea
            name="prompt"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className='relative z-10 w-full h-32 mb-6 text-lg tracking-wide text-white bg-transparent resize-none placeholder-white/40 focus:outline-none'
            placeholder='Describe the image you want to generate...'
          />

          {/* Choice Chips */}
          <div className='relative z-10 flex flex-wrap gap-2 mb-6'>
            <div onClick={() => handleChoiceClick("Cyberpunk futuristic city with neon lights")}>
              <ChoiceChip choice="Cyberpunk" />
            </div>

            <div onClick={() => handleChoiceClick("Realistic mountain landscape with river and sunset")}>
              <ChoiceChip choice="Realistic" />
            </div>

            <div onClick={() => handleChoiceClick("Abstract colorful artistic design")}>
              <ChoiceChip choice="Abstract" />
            </div>

            <div onClick={() => handleChoiceClick("Anime character standing in rain")}>
              <ChoiceChip choice="Anime" />
            </div>

            <div onClick={() => handleChoiceClick("Fantasy castle in the sky")}>
              <ChoiceChip choice="Fantasy" />
            </div>

            <div onClick={() => handleChoiceClick("Sci-fi spaceship on Mars")}>
              <ChoiceChip choice="Sci-fi" />
            </div>
          </div>

          {/* Generate Button */}
          <div className='relative z-10'>
            <PromptButton
              onClick={handleGenerateImage}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* Generated Images */}
      <ImageBoard loading={loading} images={generatedImages} error={error} />
    </>
  );
};

export default PromptSection;