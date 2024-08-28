import React from 'react'
import Image from 'next/Image'


type DescriptionCardProps={
    text1: string,
    text2: string,
    text3: string,
}


function DescriptionCard({text1,text2,text3}: DescriptionCardProps) {
    return (
        <div className='w-full h-full rounded-[26px]' style={{
            backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
        }}>
            <div className='w-full h-full grid grid-rows-[65%,35%] rounded-[26px]'>
                <div className='relative  rounded-[26px] overflow-hidden flex justify-end items-center'>
                    <div className='w-[65%] h-full flex justify-center items-center'>
                        <Image
                            src='/logo/main_logo.svg'
                            alt='main logo'
                            layout='intrinsic'
                            width={600}
                            height={600}
                            className='object-contain'
                        />
                    </div>
                </div>
                <div className=' rounded-[26px] flex items-center justify-center'>
                    <div className='w-[90%] '>
                        <div className=''>
                            <span className='text-[56px] leading-[64px] font-[600px] text-[#000000]'>{text1}</span>
                            <span className='text-[56px] leading-[64px] font-[600px]' style={{
                                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}> {text2}</span>
                        </div>
                        <div>
                            <span className='text-[32px] leading-[40px] font-[500px] text-[#000000]'>{text3}</span>
                        </div>
                    </div>


                </div>
            </div>



        </div>
    )
}

export default DescriptionCard
