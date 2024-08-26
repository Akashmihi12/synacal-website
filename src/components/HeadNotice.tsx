import React from 'react'

function HeadNotice() {
    return (
        <div className='w-full '>
            <div className='w-[70%]   h-[286px] ml-[20%]  flex flex-col'>
                <div className='flex flex-col items-center h-[144px] bg-background-color font-semibold text-[64px] leading-[72px]'>
                    <div>
                        <span style={{
                            backgroundImage: 'linear-gradient(90deg, #272727, #191919)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Tech boosts</span>
                        <span style={{
                            backgroundImage: 'linear-gradient(90deg, #CF71ED, #3335E2)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}> biz growth.</span>
                    </div>

                    <span style={{
                        backgroundImage: 'linear-gradient(90deg, #272727, #191919)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}> We’ve got you Covered.</span>
                </div>

                <div className='flex justify-center items-center '>
                    <div className=' w-[72%] h-[48px] mt-[20px] flex items-center justify-center'>
                        <span className='text-[16px] font-medium leading-[24px] text-head-notice-text-color text-center'>
                            Embracing technology is crucial for the growth of your business, and our cutting-edge solutions empower you to thrive in the ever-evolving digital landscape.
                        </span>
                    </div>
                </div>
                <div className=' w-full h-full flex items-end justify-center'>

                    <div className='h-[42px] rounded-[57px] w-[192px] gap-[4px] border-[1px] border-black text-center flex items-center justify-center text-black font-semibold text-[14px]'>
                        Let’s Innovate Together
                    </div>


                </div>



            </div>

        </div>
    )
}

export default HeadNotice