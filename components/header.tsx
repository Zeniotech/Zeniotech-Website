import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className = "bg-[#1A365D] text-amber-50 justify-between flex">
    <div className ="my-3"> 
      <ul className = "flex my-3">
        <li><Image src="/public/logo.png" alt ="logo" width={50} height={50}></Image></li>
        <li className ="mx-2">Zeniotech</li>
      </ul>
    </div>
    <ul className="flex">
      <div className = "my-3"><li>test1</li></div>
      <div className = "mx-5 my-3"><li>test2</li></div>
      <div className = "my-3"><li>test3</li></div>
    </ul>
      <button className = "mx-10 border-2 bg-[#FF4757] rounded-2xl w-50 my-3"> Contact Us</button>
  </div>
  )
}

export default header
