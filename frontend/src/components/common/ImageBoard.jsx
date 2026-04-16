import React from 'react'
import { LuSparkles } from "react-icons/lu";

const ImageBoard = () => {
    return (
        <div className='relative overflow-hidden text-gray-700 aspect-square bg-muted rounded-xl lg:max-w-[650px] lg:max-h-[650px] w-full'>
            <div className='absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md'>
                <div className='text-center'>
                    <LuSparkles className='inline-block mb-2 text-4xl' />
                    <p>Your generated image will appear here</p>
                </div>
            </div>
        </div>
    )
}

export default ImageBoard
