import React from 'react'
import Image from 'next/image'
import Ibutton from '@/public/i_button.svg'

const ibuttonServicenowCard = ({data} : {data:any}) => {
  return (
    <div>
         <div className='flex flex-row gap-4'>
          <div className='h-[50] w-[50]'><Image src={Ibutton} alt='I Button Image'></Image> </div>
          <div className='flex flex-col h-[300] w'>
            <div className=' text-2xl font-medium'>{data.heading}</div>
            <div className='text-xl'>{data.text}</div>    
          </div>
        </div>
    </div>
  )
}

export default ibuttonServicenowCard