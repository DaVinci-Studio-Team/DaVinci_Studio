import React from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";

const PromptButton = () => {
    return (
        <div>
            <button className='w-full px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                <FaWandMagicSparkles className='inline-block mr-2 text-xl' />
                <span className='font-semibold'>Generate Image</span>
            </button>
        </div>
    )
}

export default PromptButton
