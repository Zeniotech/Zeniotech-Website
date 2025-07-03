import React from 'react'
import Image from 'next/image'
import docuSign from '@/public/docusign.png'
import firstAdvantage from '@/public/first_advantage.png'
import workDay from '@/public/workday_logo.png'
import abService from '@/public/abservice.png'


const servicenowHrsd = () => {
  return (
    <div className='my-10'>
       <div>
      <div className='bg-[#1A365D] h-40 flex flex-row justify-around items-center'>
       <Image src={workDay} alt='docusign logo' className='h-30 w-30'></Image>
       <Image src={docuSign} alt='docusign logo' className='h-30 w-30'></Image>
       <Image src={firstAdvantage} alt='docusign logo' className='h-30 w-30'></Image>
       <Image src={abService} alt='docusign logo' className='h-30 w-30'></Image>
      </div>
    </div>
    </div>
  )
}

export default servicenowHrsd
