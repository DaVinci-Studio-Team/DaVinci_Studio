import React from 'react'

export default function Spinner() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
        </div>
    )
}
