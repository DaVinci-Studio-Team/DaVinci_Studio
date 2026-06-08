import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { apiInstance } from "../../api/apiInstance";

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunityImages = async () => {
      try {
        setLoading(true);
        const res = await apiInstance.get("/image/community");
        setImages(res?.data?.images || []);
        setError(null);
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to load community images");
      } finally {
        setLoading(false);
      }
    };

    fetchCommunityImages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-gray-400">Loading community gallery...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-gray-400">No community images yet. Be the first to share!</div>
      </div>
    );
  }

  return (
    <div className="gap-4 space-y-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-3">
      {images.map((image) => (
        <ImageCard key={image._id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;