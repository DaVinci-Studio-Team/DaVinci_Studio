import React from 'react'

export default function ImageCard({ img, index }) {
    return (
        <div key={index} className="relative overflow-hidden cursor-pointer break-inside-avoid rounded-2xl group">
            <img src={img} alt={`Image ${index + 1}`} className="w-full transition-all duration-300 rounded-2xl group-hover:scale-105" />
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-lg font-semibold">Image Title {index + 1}</h3>
                    <p className="text-sm">Description for image {index + 1}</p>
                </div>
            </div>
        </div>
    )
}
