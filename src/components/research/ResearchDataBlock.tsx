import React from 'react'

function ResearchDataBlock() {
    return (
        <div className='w-full h-full bg-red-700 grid grid-rows-[70%,30%] relative'>
            <div className='w-full h-full bg-purple-300 relative'>
                <div style={{
                    backgroundImage: '/research/research1.svg',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',


                }}
                    className='relative'
                ></div>
            </div>
            <div className='w-full h-full bg-purple-500'></div>

        </div>
    )
}

export default ResearchDataBlock
