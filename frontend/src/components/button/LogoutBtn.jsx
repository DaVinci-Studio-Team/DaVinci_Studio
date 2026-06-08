import React from 'react'

const LogoutBtn = ({ handleLogout }) => {
    return (
        <button onClick={handleLogout} 
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            Logout
        </button>
    )
}

export default LogoutBtn
