import React from 'react'
import Header from '../components/layout/Header'
import ExploreFilter from '../components/common/ExploreFilter'
import ImageGrid from '../components/common/ImageGrid'

const Explore = () => {
    return (
        <div className='px-4 py-8 mx-auto lg:py-12 lg:px-20 lg:mx-10'>
            <div className='mb-8'>
                <Header title="Explore Community" description="Discover and connect with our vibrant community" />
            </div>
            <div className='mb-8'>
                <ExploreFilter />
            </div>
            <div className='mb-8'>
                <h2 className='mb-6 text-2xl font-semibold text-left'>Community Gallery</h2>
                <ImageGrid />
            </div>
        </div>
    )
}

export default Explore
