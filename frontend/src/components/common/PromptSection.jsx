import React, { useState, useEffect } from 'react';
import PromptButton from './PromptButton';
import ChoiceChip from './ChoiceChip';
import ImageBoard from './ImageBoard';
import LoginRequiredModal from '../modals/LoginRequiredModal';
import { generateImageAPI } from '../../services/prompt.api';
import { useAuth } from '../../hooks/useAuth';
import { 
  saveGuestImage, 
  getGuestImage, 
  hasGuestGenerated,
  clearGuestImage 
} from '../../utils/guestImageStorage';

const PromptSection = () => {
  const { user, loading: authLoading } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [style, setStyle] = useState('Normal');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [guestLimitReached, setGuestLimitReached] = useState(false);

  useEffect(() => {
    if (user) {
      setGuestLimitReached(false);
      return;
    }

    if (!authLoading && !user) {
      const guestImage = getGuestImage();
      if (guestImage) {
        setGeneratedImages([guestImage.imageUrl]);
        setGuestLimitReached(true);
      }
    }
  }, [user, authLoading]);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;

    if (!user && hasGuestGenerated()) {
      setShowLoginModal(true);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await generateImageAPI({
        prompt,
        style,
        numImages: 1,
      });

      console.log(res.images[0].imageUrl)
      const response = res.images;

      if (res.success) {
        const images = response.map((img) => img.imageUrl);
        console.log("Images...", images[0])
        setGeneratedImages(images);

        if (!user) {
          saveGuestImage(images[0], prompt, style);
          setGuestLimitReached(true);
        }
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

  const isGenerateDisabled = !user && guestLimitReached;

  return (
    <>
      <LoginRequiredModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      <div className='max-w-3xl px-6 mx-auto mb-12'>
        <div className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20_80px_rgba(139,92,246,0.15)]'>

          <div className='absolute inset-0 opacity-50 pointer-events-none rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl' />

          {isGenerateDisabled && (
            <div className='relative z-10 p-4 mb-6 border rounded-lg bg-amber-500/10 border-amber-500/30'>
              <p className='text-sm text-amber-300'>
                ✨ You've used your guest generation. Sign in to generate more images!
              </p>
            </div>
          )}

          <textarea
            name="prompt"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerateDisabled}
            className='relative z-10 w-full h-32 mb-6 text-lg tracking-wide text-white bg-transparent resize-none placeholder-white/40 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
            placeholder='Describe the image you want to generate...'
          />

          <div className='relative z-10 flex flex-wrap gap-2 mb-6'>
            <div onClick={() => !isGenerateDisabled && handleChoiceClick("Cyberpunk futuristic city with neon lights")}>
              <ChoiceChip choice="Cyberpunk" />
            </div>

            <div onClick={() => !isGenerateDisabled && handleChoiceClick("Realistic mountain landscape with river and sunset")}>
              <ChoiceChip choice="Realistic" />
            </div>

            <div onClick={() => !isGenerateDisabled && handleChoiceClick("Abstract colorful artistic design")}>
              <ChoiceChip choice="Abstract" />
            </div>

            <div onClick={() => !isGenerateDisabled && handleChoiceClick("Anime character standing in rain")}>
              <ChoiceChip choice="Anime" />
            </div>

            <div onClick={() => !isGenerateDisabled && handleChoiceClick("Fantasy castle in the sky")}>
              <ChoiceChip choice="Fantasy" />
            </div>

            <div onClick={() => !isGenerateDisabled && handleChoiceClick("Sci-fi spaceship on Mars")}>
              <ChoiceChip choice="Sci-fi" />
            </div>
          </div>

          <div className='relative z-10'>
            <PromptButton
              onClick={handleGenerateImage}
              loading={loading}
              disabled={isGenerateDisabled}
              title={isGenerateDisabled ? "Sign in to generate more images" : "Generate a new image"}
            />
          </div>
        </div>
      </div>

      <ImageBoard loading={loading} images={generatedImages} error={error} />
    </>
  );
};

export default PromptSection;