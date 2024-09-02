import React from 'react'

function ButtonSection() {
    return (
        <div className='w-[80%] h-full'>
            <div className="w-full h-full flex flex-col  justify-start p-4">

                <div className="flex space-x-4">
                    <div

                        className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
            text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
                    >
                        <span className="cursor-pointer">Button 1</span>
                    </div>
                    <div

                        className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
                    >
                        <span className="cursor-pointer">Button 1</span>
                    </div>
                    <div

                        className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
                    >
                        <span className="cursor-pointer">Button 1</span>
                    </div>
                </div>

                {/* Bottom 2 Buttons */}
                <div className="flex space-x-4">
                    <div

                        className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
                    >
                        <span className="cursor-pointer">Button 1</span>
                    </div>
                    <div

                        className="py-[10px] px-[24px] rounded-[57px] border-[1px] border-black text-center flex items-center justify-center 
text-black font-semibold text-[14px] cursor-grab hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]"
                    >
                        <span className="cursor-pointer">Button 1</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ButtonSection
