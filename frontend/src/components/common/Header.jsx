import React from 'react'
import { LuSparkles } from "react-icons/lu";

const Header = ({ title, description }) => {
    return (
        <div className='mb-5 lg:mb-15'>
            <div className='flex items-center gap-3 mb-2 text-gray-900 text-start font-sans-serif'>
                <LuSparkles className='inline-block mb-1 text-3xl' />
                <h1 className='text-[21px] font-semibold lg:text-3xl md:text-3xl'>{title}</h1>
            </div>
            <p className='mt-2 text-center text-gray-400 md:text-start lg:text-start '>{description}</p>
        </div>
    )
}

export default Header
