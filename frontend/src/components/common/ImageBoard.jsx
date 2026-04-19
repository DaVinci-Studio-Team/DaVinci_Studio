import React from 'react'
// import { LuSparkles } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";

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
                        <div key={i} 
                        // animate-pulse
                            className="flex-shrink-0 w-64 h-64 overflow-hidden bg-gray-800 rounded-lg "
                        >
                            <img src="https://t4.ftcdn.net/jpg/17/48/16/37/360_F_1748163799_GjzTZfrWyNrIKNDtvpdu6LfmbrdsKtsB.jpg" alt="image"
                                className='w-full h-full' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageBoard
