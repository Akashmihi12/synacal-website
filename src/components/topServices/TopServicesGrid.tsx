import React from 'react'
import TopServicesBlock from './TopServicesBlock'

function TopServicesGrid() {
    return (
        <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-[40px] ">
            <div className=" h-full w-full"><TopServicesBlock imageUrl='/Soundwave.png' title='AI Solution' description='We develop custom solutions using AI/ML to automate operations and enhance customer experience' /></div>
            <div className=" h-full w-full"><TopServicesBlock imageUrl='/Round Graph.png' title='Data Analytics' description='We help businesses make informed decisions and drive growth through actionable insights.' /></div>
            <div className=" h-full w-full"><TopServicesBlock imageUrl='/Sidebar Code.png' title='Digital Transformation' description='We help businesses modernize their operations and processes using emerging technologies.' /></div>
            <div className=" h-full w-full"><TopServicesBlock imageUrl='/CPU.png' title='Software Development' description='We provide end-to-end software solutions for developing, testing, and deploying applications' /></div>
        </div>

    )
}

export default TopServicesGrid