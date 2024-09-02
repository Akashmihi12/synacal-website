import React from 'react';
import ButtonSection from './ButtonSection';

function Section3Data() {
    return (
        <div className='w-full h-full flex flex-col justify-between'>
            {/* First div - Top */}
            <div className="flex-shrink-0 text-[40px] leading-[47.73px] font-[600px]">
                Actionable Insights for Informed Decision Making
            </div>

            {/* Second div - Middle */}
            <div className="flex-grow flex items-center justify-center text-[18px] leading-[32px] font-[400px] text-[#31323E]">
                Our data analytics service provides you with actionable insights that help you make informed decisions, optimize operations, and drive business growth.
            </div>

            {/* Third div - Bottom */}
            <div className="flex-shrink-0">
                <ButtonSection />
            </div>
        </div>
    );
}

export default Section3Data;
