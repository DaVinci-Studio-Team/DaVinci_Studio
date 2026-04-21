import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa6';
import { MdFileDownload, MdPieChart } from "react-icons/md";

const ImageBoard = () => {
    return (
        <div className='relative w-full px-6 overflow-hidden text-gray-300 aspect-square bg-muted lg:px-0 max-h-[500px] '>
            <div className='flex items-end justify-between w-full mb-8'>
                <h2 className='text-2xl font-semibold'>Generated Image</h2>
                <div className='flex items-center gap-2 text-sm text-gray-400 text-muted-foreground'>
                    <CiImageOn className='w-4 h-4' />
                    <span>4 Images</span>
                </div>
            </div>
            <div className="px-4">
                <div className="flex gap-6 overflow-x-auto pb-4md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div className='relative' key={i}>
                            <div
                                // animate-pulse
                                className="flex-shrink-0 w-64 h-64 overflow-hidden bg-gray-800 rounded-lg hover-effect"
                            >
                                <img src="https://t4.ftcdn.net/jpg/17/48/16/37/360_F_1748163799_GjzTZfrWyNrIKNDtvpdu6LfmbrdsKtsB.jpg" alt="image"
                                    className='w-full h-full' />
                            </div>
                            <div className='absolute inset-0 flex items-center justify-center gap-2 text-sm text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100'>
                                <button className='flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition-all border border-gray-600 rounded-3xl bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20'>
                                    <MdFileDownload /> Download
                                </button>
                                 <button className='flex items-center gap-1 px-3 py-2 text-sm font-medium border border-red-600 rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20'>
                                    <FaHeart className='text-red-600' /> Favorite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageBoard
