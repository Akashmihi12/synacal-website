import React from 'react'
import Image from 'next/Image';

function ImageSection() {
    return (
        <div className=' w-full h-full flex items-center justify-end'>
            <div className='h-[504px] w-[88.5%]  flex gap-[8.89px]'>
                <div className='w-[33.9%] h-full  flex flex-col gap-[8.89px] '>
                    <div className='w-full h-[66.64px]  rounded-[13.88px] overflow-hidden relative'>
                        <Image
                            src="/price.svg"
                            alt="Price Tag"
                            layout="fill"
                            objectFit="cover"
                            className='absolute inset-0' />
                    </div>
                    <div className='w-full h-[213.24px]  rounded-[13.88px] overflow-hidden relative'>
                        <Image
                            src="/Calender.svg"
                            alt="Calender Tag"
                            layout="fill"
                            objectFit="cover"
                            className='absolute inset-0' />
                    </div>
                    <div className='w-full h-[204.35px]  rounded-[13.88px] overflow-hidden relative'>
                        <Image
                            src="/Shedule.svg"
                            alt="Shedule Tag"
                            layout="fill"
                            objectFit="cover"
                            className='absolute inset-0' />

                    </div>
                </div>
                <div className='w-[66.1%] h-full  rounded-[13.88px] overflow-x-hidden relative'>

                    <Image
                        src="/dashboard.svg"
                        alt="dashboard Tag"
                        layout="fill"
                        objectFit="cover"
                        className='absolute inset-0 ' />

                </div>

            </div>

        </div>

    )
}

export default ImageSection