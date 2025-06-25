import React from 'react'

const serviceCard = ({heading} : {heading:any}) => {
  return (
    <div>
  <div className='w-50 h-105 border-1 rounded-3xl'>
  <div className = 'py-5 justify-center border-2z'>
  <div className='"flex font-bold text-2xl justify-center bg-[#F5F5F5] h-20 text-center py-2 mx-4'><div>{heading.heading}</div></div>
  <div className = 'py-8 mx-4 font-normal  text-center'>{heading.subText}</div>
  </div>
</div>
</div>
  )
}

export default serviceCard