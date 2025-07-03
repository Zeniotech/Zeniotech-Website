import React from 'react'
import Image from 'next/image'
import HeaderImage from '@/public/hrsd_dashboard.png'

const snowPageHeader = () => {
  return (
    <div className='flex flex-row items-center h-85 px-10 gap-2 '>
        <div className='flex flex-col  w-1/2 px-4'>
            <div className='font-extrabold text-3xl italic'>HR Service Delivery (HRSD)</div>
            <div  className='font-normal text-xl py-8'><b>Elevate workforce efficiency</b> by centralizing employee support through an intelligent, <b>AI-powered Employee Centre</b>. Simplify<b> HR Service Delivery ( HRSD )</b> with self-service tools, rapid case resolution, and proactive Employee Relations strategies. Reduce costs, enhance compliance, and foster trust by streamlining requests, mitigating risks, and ensuring seamless access to resources—empowering teams to focus on growth and innovation.
          </div>
        </div>
        <div className='w-1/2'>
          <Image src={HeaderImage} alt='Header Image'></Image>
        </div>
    </div>
  )
}

export default snowPageHeader