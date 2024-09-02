import React from 'react'
import Section3Block from './Section3Block'

function SubSection3() {
    return (
        <div className='w-full h-[1448px] bg-red-400 flex justify-center'>
            <div className='w-[74%] h-full bg-green-500 grid grid-rows-3 gap-[80px]'>
                <div className='w-full h-full bg-yellow-100'>
                    <Section3Block  reverse={true}/>
                </div>
                <div className='w-full h-full bg-yellow-300'>
                    <Section3Block  reverse={false}/>
                </div>
                <div className='w-full h-full bg-yellow-500'>
                    <Section3Block reverse={true} />
                </div>

            </div>

        </div>
    )
}

export default SubSection3
