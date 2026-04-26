import React from "react";
import ImageCard from "./ImageCard";

const images = [
  "https://images.unsplash.com/photo-1713188090500-a4fb0d2cf309?w=600&q=80",
  "https://images.unsplash.com/photo-1763931504138-3b9fb539f737?w=600&q=80",
  "https://images.unsplash.com/photo-1713188090500-a4fb0d2cf309?w=600&q=80",
  "https://images.unsplash.com/photo-1763931504138-3b9fb539f737?w=600&q=80",
  "https://images.unsplash.com/photo-1770520218894-d9f464825dfa?w=600&q=80",
  "https://images.unsplash.com/photo-1713188090500-a4fb0d2cf309?w=600&q=80",
  "https://plus.unsplash.com/premium_vector-1711987729272-386d6eed3653?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const ImageGrid = () => {
  return (
    <div className="gap-4 space-y-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-3">
      {images.map((img, index) => (
        <ImageCard key={index} img={img} index={index} />
      ))}
    </div>
  );
};

export default ImageGrid;