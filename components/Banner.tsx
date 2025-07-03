'use client'

import React from 'react'
import Image from 'next/image'
import banner from '@/public/home-page-banner-image.png'

const Banner = () => {
  return (
    
<div className='h-100 w-screen bg-white flex justify-around'>
  <div className="flex flex-col gap-3 py-10 px-10">
  <div className='text-black text-6xl text-center font-bold'>
    Where Services<br/>Meet Strategy
  </div>
  <div className='text-black text-2xl text-center'>
    We implement, you innovate
  </div>
  <button className = "border-2 border-[#767676] bg-[#FF4757] py-4 rounded-2xl w-70 hover:bg-[#A41622] cursor-pointer text-4xl shadow-2xl text-center mx-20 my-10">Contact Us</button>
  </div>
  <div className = 'my-5'>
    <Image
    src = {banner}
    alt = 'banner image'
    width={335}
    height={335}
    className=''>
    </Image>
  </div>
</div>

  )
}

export default Banner
