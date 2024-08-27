import React from 'react'
import DataBar from './DataBar'

function DocumentAssistanceText() {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='h-[144px] w-full bg-green-200'>
                <span className='text-[40px] font-semibold leading-[47.73px] text-black'>Discover DOXPLORE
                    Your Intelligent Document Assistant</span>
            </div>
            <div className='h-[96px] w-full bg-green-400 mt-2'>
                <span className='text-[18px] font-normal leading-[32px] text-[#31323E]'>
                    Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets
                </span>
            </div>
            <div className='h-[168px] w-full bg-green-600 mt-3 flex flex-col gap-3'>
                <DataBar/>
                <DataBar/>
                <DataBar/>
            </div>
            <div className='h-[42px] w-full bg-green-800 mt-[68px]'></div>

        </div>
    )
}

export default DocumentAssistanceText