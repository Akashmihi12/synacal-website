import React from 'react'
import DivideLine from '../common/header/Divider'
import TopServicesGrid from './TopServicesGrid'

function TopServices() {
    return (
        <div className='h-[908px] w-full '>
            <div className='w-[65%]  h-[908px] ml-[24%] rounded-[28px] flex flex-col items-center bg-top-services-bg'>
                <div className='h-[32px] w-[80%]  mt-[32px]'>
                    <span className='text-[24px] font-semibold leading-[32px] text-[#000000]'>Top Services to Meet Your Needs</span>
                </div>
                <DivideLine color="#D7D7E7" thickness="1px" width="80%" margin="48px 0" />
                <div className='h-[716px] w-[80%]   '>
                    <TopServicesGrid />
                </div>
            </div>
        </div>
    )
}

export default TopServices