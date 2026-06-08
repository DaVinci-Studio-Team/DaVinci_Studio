import React from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";

const PromptButton = ({ onClick, loading, disabled = false, title }) => {
    const isDisabled = loading || disabled;
    
    return (
        <button 
            onClick={onClick} 
            disabled={isDisabled}
            title={title}
            className='relative w-full py-[16px] overflow-hidden font-semibold text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:opacity-50 transition-all duration-200 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] shadow-[0_10_40px_rgba(139,92,246,0.3)] hover:shadow-[0_15_50px_rgba(139,92,246,0.4)] hover:disabled:shadow-[0_10_40px_rgba(139,92,246,0.3)]'
        >
            <FaWandMagicSparkles className='inline-block mr-2 text-xl' />
            <span className='font-semibold'>
                {loading ? "Generating..." : "Generate Image"}
            </span>
        </button>
    )
}

export default PromptButton;
