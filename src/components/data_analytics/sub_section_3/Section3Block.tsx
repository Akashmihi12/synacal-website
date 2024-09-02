import React from 'react'
import Section3Data from './Section3Data'

type Section3BlockProps = {
  reverse: boolean
}
function Section3Block({ reverse }: Section3BlockProps
) {
  return (
    <div className={`w-full h-full flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='w-[55%] h-full bg-gray-400 flex justify-end items-center py-[3.77%] '>
        <div className={`w-full h-full  bg-red-500  ${reverse ? 'ml-[7.54%]' : 'mr-[7.54%]'} `}>
          <Section3Data />
        </div>

      </div>
      <div className='w-[45%] h-full bg-sub-section-gradient rounded-[16px]'>

      </div>

    </div>
  )
}

export default Section3Block
