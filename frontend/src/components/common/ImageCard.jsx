import React from 'react'

export default function ImageCard({ image }) {

    return (
        <div className="relative overflow-hidden cursor-pointer break-inside-avoid rounded-2xl group">
            <img src={image?.imageUrl} alt={image?.prompt || "Community image"} className="w-full transition-all duration-300 rounded-2xl group-hover:scale-105" />
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-lg font-semibold line-clamp-2">{image?.prompt || "Generated Image"}</h3>
                    <p className="mt-1 text-sm">{image?.style || "Style"}</p>
                </div>
            </div>
        </div>
    )
}
