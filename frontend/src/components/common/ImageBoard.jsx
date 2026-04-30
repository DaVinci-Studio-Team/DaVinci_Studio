import React from 'react';
import { CiImageOn } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa6';
import { MdFileDownload } from "react-icons/md";

const ImageBoard = ({ images = [] }) => {
  const handleDownload = async (imgUrl, index) => {
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `generated-image-${index + 1}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Download failed:", error);
    }
  };

  return (
    <div className='relative w-full px-6 overflow-hidden text-gray-300 lg:px-0'>
      <div className='flex items-end justify-between w-full mb-8'>
        <h2 className='text-2xl font-semibold'>
          Generated Images
        </h2>

        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <CiImageOn className='w-4 h-4' />
          <span>{images.length} Images</span>
        </div>
      </div>

      <div className="px-4">
        {images.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-gray-400 border border-dashed rounded-xl border-white/10">
            No images generated yet
          </div>
        ) : (
          <div className="flex gap-6 pb-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
            {images.map((img, i) => (
              <div className='relative group' key={i}>
                <div className="flex-shrink-0 w-64 h-64 overflow-hidden bg-gray-800 rounded-lg md:w-full hover-effect">
                  <img
                    src={img}
                    alt={`generated-${i}`}
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='absolute inset-0 flex items-center justify-center gap-2 text-sm text-white transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100'>
                  
                  <button
                    onClick={() => handleDownload(img, i)}
                    className='flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition-all border border-gray-600 rounded-3xl bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20'
                  >
                    <MdFileDownload />
                    Download
                  </button>

                  <button
                    className='flex items-center gap-1 px-3 py-2 text-sm font-medium border border-red-600 rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  >
                    <FaHeart className='text-red-600' />
                    Favorite
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBoard;