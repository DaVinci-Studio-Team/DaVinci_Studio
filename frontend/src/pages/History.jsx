import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import HistoryFilter from '../components/common/HistoryFilter'
import HistoryCard from '../components/common/HistoryCard'
import LoginRequiredModal from '../components/modals/LoginRequiredModal'
import { useAuth } from '../hooks/useAuth'
import { useMyImages } from '../hooks/useMyImages '

const History = () => {
    const { user, loading: authLoading } = useAuth()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const { images: fetchedImages, loading: imagesLoading, error } = useMyImages();

    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(fetchedImages);
    }, [fetchedImages]);

    useEffect(() => {
        if (!authLoading && !user) {
            setIsLoginModalOpen(true)
        }
    }, [authLoading, user])

    if (authLoading) {
        return (
            <div className='flex items-center justify-center min-h-screen px-4 py-8 mx-auto lg:py-12 lg:px-20 lg:mx-10'>
                <div className='text-gray-400'>Loading...</div>
            </div>
        )
    }

    if (!user) {
        return (
            <>
                <div className='px-4 py-8 mx-auto lg:py-12 lg:px-20 lg:mx-10'>
                    <div className='mb-8'>
                        <Header title="Generation History" description="Browse and manage your previously generated images" />
                    </div>
                </div>
                <LoginRequiredModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
            </>
        )
    }

    return (
        <div className='px-4 py-8 mx-auto lg:py-12 lg:px-20 lg:mx-10'>
            <div className='mb-8'>
                <Header title="Generation History" description="Browse and manage your previously generated images" />
            </div>
            <div className='mb-8'>
                <HistoryFilter />
            </div>
            <div className='mb-8'>
                {imagesLoading ? (
                    <div className='flex items-center justify-center py-12'>
                        <div className='text-gray-400'>Loading your images...</div>
                    </div>
                ) : error ? (
                    <div className='flex items-center justify-center py-12'>
                        <div className='text-red-400'>{error}</div>
                    </div>
                ) : images.length > 0 ? (
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {images.map((image) => (
                            <HistoryCard key={image._id} image={image} setImages={setImages} />
                        ))}
                    </div>
                ) : (
                    <div className='flex items-center justify-center py-12'>
                        <div className='text-gray-400'>No images generated yet. Start creating!</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default History
