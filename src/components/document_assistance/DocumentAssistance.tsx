import React from 'react'
import DocumentAssistanceText from './DocumentAssistanceText'

function DocumentAssistance() {
    return (
        <div className='w-full h-[1492.71px] '>
            <div className='h-full w-full grid grid-rows-2 gap-y-[113.29px] grid-cols-2 gap-x-[0.8%]'>
                <div className='w-full h-full rounded-2xl ' style={{
                    backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
                }}></div>
                <div className='w-full h-full flex ml-[15%] items-center '>
                    <div className='w-[65%] h-[538px] bg-red-600'>
                        <DocumentAssistanceText />
                    </div>
                </div>
                <div className='w-full h-full flex ml-[20%] items-center'>
                    <div className='w-[65%] h-[538px] bg-red-600'>
                        <DocumentAssistanceText />
                    </div>
                </div>
                <div className='w-full h-full rounded-2xl' style={{
                    backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
                }}></div>

            </div>
        </div>
    )
}

export default DocumentAssistance