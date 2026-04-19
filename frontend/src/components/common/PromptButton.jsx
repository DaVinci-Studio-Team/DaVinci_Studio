import React from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";

const PromptButton = () => {
    return (
        <>
            <button className='relative w-full py-[16px] overflow-hidden font-semibold text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] shadow-[0_10_40px_rgba(139,92,246,0.3)] transform-none'>
                <FaWandMagicSparkles className='inline-block mr-2 text-xl' />
                <span className='font-semibold'>Generate Image</span>
            </button>
        </>
    )
}

export default PromptButton
