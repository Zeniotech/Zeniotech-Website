import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'

const header = () => {
  return (
    <div className = "bg-[#1A365D] text-white justify-between flex">
    <div> 
      <ul className = "flex">
        <li className='my-1/2'><Image src ={logo} alt ="logo" width={80} height={80}></Image></li>
        <li className ="mx-1/2 my-7.5">Zeniotech</li>
      </ul>
    </div>
    <ul className='flex justify-between'>
      <li className='my-7.5'>Home</li>
      <li className='mx-5 my-7.5'>Services</li>
      <li className='my-7.5'>About Us</li>
      <li><button className = "mx-8 border-2 border-[#767676] bg-[#FF4757] py-4 rounded-2xl w-50 my-3"> Contact Us</button></li>
    </ul>
  </div>
  )
}

export default header
