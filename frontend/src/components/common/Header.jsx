import React from 'react'
import { LuSparkles } from "react-icons/lu";

const Header = () => {
    return (
        <div className='mb-4 text-center lg:mb-16'>
            <div className="inline-block mb-6 group">
                <div className="relative flex items-center justify-center w-24 h-24">
                    <div className="absolute inset-0 transition rounded-full opacity-50 animate-pulse blur-2xl bg-gradient-to-r from-purple-800 via-blue-700 to-pink-700 group-hover:opacity-80"></div>
                    <LuSparkles className='relative z-10 w-20 h-20 text-purple-500' />
                </div>
            </div>
            <h1 className='mb-6 text-5xl font-bold leading-tight text-transparent md:text-6xl bg-gradient-to-r from-white via-purple-500 to-pink-500 bg-clip-text'>
                DaVinci Studio
            </h1>
            <p className='max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-muted-foreground'>
                Empowering creators to turn bold ideas into breathtaking visuals — experience the art of innovation with DaVinci Studio.
            </p>

        </div>
    )
}

export default Header