import React from 'react'
import ResearchDataBlock from './ResearchDataBlock'

function LatestResearch() {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='w-[72%] h-[1076px] bg-red-500 flex flex-col gap-y-[40px] ' >

                <div className='w-full h-[48px] bg-yellow-300'></div>
                <div className='w-full h-[988px] bg-green-500 grid grid-rows-[57%,43%]'>
                    <div className='w-full h-full bg-pink-500 grid grid-cols-2 gap-1'>
                        <ResearchDataBlock />
                        <ResearchDataBlock />

                    </div>
                    <div className='w-full h-full bg-pink-700'></div>
                </div>
            </div>
        </div>

    )
}

export default LatestResearch
