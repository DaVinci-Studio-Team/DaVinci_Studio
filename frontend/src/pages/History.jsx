import React from 'react'
import Header from '../components/layout/Header'
import HistoryFilter from '../components/common/HistoryFilter'
import HistoryCard from '../components/common/HistoryCard'

const History = () => {
    return (
        <div className='px-4 py-8 mx-auto lg:py-12 lg:px-20 lg:mx-10'>
            <div className='mb-8'>
                <Header title="Generation History" description="Browse and manage your previously generated images" />
            </div>
            <div className='mb-8'>
                <HistoryFilter />
            </div>
            <div className='mb-8'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </div>
            </div>
        </div>
    )
}

export default History
