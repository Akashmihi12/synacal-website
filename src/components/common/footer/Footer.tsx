import React from 'react'
import Image from 'next/image'
import IconBar from './IconBar'

function Footer() {
    return (
        <div className='w-full h-[523px] bg-green-500 mt-[100px] flex justify-center mb-12'>
            <div className='w-[79%] h-full bg-red-400'>
                <div className='w-full h-[456px] bg-yellow-500'>
                    <div
                        style={{
                            backgroundImage: `url('/footer/footerbackground.svg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100%",
                        }}
                        className="relative rounded-2xl"
                    >
                        <div className='w-full h-full grid grid-cols-2'>
                            <div className='w-full h-full flex justify-center '>
                                <div className='w-[445px] h-[136px] bg-red-500 mt-[44px]'>
                                    <div className='w-[148px] h-[20px] bg-yellow-300 relative overflow-hidden'>
                                        <Image
                                            src='/logo/synacal_logo.png'
                                            alt='company logo'
                                            layout='fill'
                                            objectFit='contain'
                                            className='absolute '
                                        />
                                    </div>
                                    <div className='w-full h-[48px] bg-yellow-500 mt-4'>
                                        <span className='font-normal text-[14px] leading-[24px] text-[#DCDCDC]'>
                                            At Synacal, we're dedicated to helping businesses like yours achieve their digital transformation goals.</span>
                                    </div>
                                    <div className='w-[353px] h-[24px] bg-yellow-700 mt-7 grid grid-cols-2'>
                                        <div className='w-full h-full bg-green-300'>
                                            <IconBar icon='/logo/linkedin.svg' text='+94 70 457 5691' />
                                        </div>
                                        <div className='w-full h-full bg-green-600'>
                                        <IconBar icon='/logo/linkedin.svg' text='hello@synacal.ai' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='w-[437px] h-[312px] bg-green-200'>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-[67px] bg-yellow-700'>
                </div>
            </div>
        </div>
    )
}

export default Footer
