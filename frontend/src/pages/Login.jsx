import React from 'react'
import LoginForm from '../components/common/LoginForm'
import { Link } from 'react-router-dom'
import { LuSparkles } from "react-icons/lu";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-screen px-6 py-12">
            <div className='w-full max-w-md text-center'>
                <div className="flex justify-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 transition bg-purple-500 opacity-50 blur-xl group-hover:opacity-80 animate-pulse"></div>
                        <LuSparkles className='relative z-10 text-purple-500 w-9 h-9' />
                    </div>

                    <span className="text-4xl font-bold text-transparent engagement-font bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text">
                        DaVinci Studio
                    </span>
                </div>
            </div>
            <div className='w-full p-8 md:p-10'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
