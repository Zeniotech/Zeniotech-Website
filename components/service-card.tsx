import React from 'react'

const serviceCard = ({heading} : {heading:any}) => {
  return (
    <div>
  <div className='w-80 h-125 border-1 rounded-3xl shadow-xl'>
  <div className = 'py-5 justify-center'>
  <div className='bg-[#F5F5F5] h-30 mx-4'>
    <div className='flex flex-col text-center font-bold text-4xl py-5'>{heading.heading}</div>
  </div>
  <div className = 'py-8 mx-4 font-normal  text-center text-2xl'>{heading.subText}</div>
  </div>
</div>
</div>
  )
}

export default serviceCard