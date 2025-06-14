import React from 'react'
import Image from "next/image";
import logo from "@/public/logo.png";

const footer = () => {
  return (
<div className = 'bg-[#1A365D] h-120 w-screen'>
<div className = 'flex justify-around'>
<div className = 'h-100 w-100'>
<div className='my-20'>
<ul className='flex'>
<li><Image src={logo} alt="logo" width={150} height={180} className=""></Image></li>
<li className='py-15'><div className='text-white text-3xl'>Zeniotech</div></li>
</ul>
</div>
<div className='text-white text-2xl text-left -my-20 font-bold'>"empowering excellence through innovative solution"</div>
</div>
<div className = 'h-100 w-100 hidden lg:block md:block'>
  <div className='text-3xl text-white font-bold  py-10'>Our Core Services</div>
  <ul className='text-left text-xl text-white py-0.5 justify-around'>
    <li>Servicenow</li>
    <li>Custom Application</li>
    <li>GRC</li>
    <li>HRSD</li>
    <li>SecOps</li>
    <li>ITOM</li>
    <li>Integrating Existing Solution</li>
  </ul>
</div>
<div className = 'h-100 w-100'>
<div className='text-3xl text-white font-bold py-10'>Contact Us</div>
  <div>
    <ul className='text-white text-2xl'>
      <li>📩Sharmaabhinay28@zeniotech.com</li>
      <li>📞+91 8847406838</li>
      <li>📍 [New Delhi, Delhi]</li>
      <li>Stay Updated</li>
      <li>Abhinay@zeniotech</li>
      <li><button className="my-5 py-10 w-100 border-2 rounded-2xl border-[#767676] bg-[#FF4757] hover:bg-[#A41622] cursor-pointer">Contact Us
      </button>
      </li>
    </ul>
  </div>
</div>
</div>
</div>
  )
}

export default footer
