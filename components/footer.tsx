import React from 'react'
import Image from "next/image";
import logo from "@/public/logo.png";

const footer = () => {
  return (
<div className = 'bg-[#1A365D] h-80'>
<div className = 'flex justify-around'>
<div className = 'h-80 w-80'>
<div className='flex flex-row'>
<Image src={logo} alt="logo" width={150} height={150} className="md:mx-1/2"></Image>
<div className='text-white'>Zeniotech</div>
</div>
<div className='text-white'>empowering excellence through innovative solution</div>
</div>
<div className = 'bg-amber-800 h-80 w-80'></div>
<div className = 'bg-amber-600 h-80 w-80'></div>
</div>
</div>
  )
}

export default footer
