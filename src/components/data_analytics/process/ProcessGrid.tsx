import React from 'react'
import GridSection from './GridSection'

function ProcessGrid() {
    return (
        <div className="w-full  flex items-center justify-center">
            <div className="h-full w-[74%] rounded-[32px] bg-[#F9F6FD] flex justify-center ">
                <div className='h-full w-[92%] flex justify-center flex-col '>
                    <div className="text-[40px] font-[600] leading-[47.73px] text-black  mb-12 mt-10">
                        Understanding the Process
                    </div>
                    <GridSection />
                </div>

            </div>
        </div>

    )
}

export default ProcessGrid
