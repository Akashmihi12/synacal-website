import React from 'react'
import Image from 'next/image'
type IconBarProps = {
    icon: string;
    text: string;

}
function IconBar({ icon, text }: IconBarProps) {
    return (
        <div className='w-full h-full grid grid-col-[20%,80%] justify-center items-center'>
            <div className='w-full h-full relative overflow-hidden'>
                <Image
                    src={icon}
                    alt='company logo'
                    layout='fill'
                    objectFit='contain'
                    className='absolute inset-0'
                />
            </div>
            <div className='text-[16px] leading-[24px] font-medium'>{text}</div>


        </div>
    )
}

export default IconBar
