import React from 'react'
import ServicenowFooter from '@/components/ibutton_servicenow_card'


const snowPageFooter = () => {
  return (
    <div className=' h-85 '>
      <div className='my-5 px-10'>
      <div className='font-bold text-3xl italic'>Why Partner with Us for Your Implementation Success?</div>
      <div className='font-medium text-2xl py-5 '>What we will do for you ?</div>
    </div>
    <div className='flex flex-col items-center px-10 gap-5'>
      <div className='flex flex-row h-[150] gap-2'>
       <div><ServicenowFooter
       data = {{
        heading : 'Expertise-Driven Results',
        text : 'Proven Expertise for Flawless Implementation'
       }}
       /></div>
        <div> <ServicenowFooter
        data = {{
          heading : 'Client-Centric Approach',
          text : 'Solutions Tailored to Your Unique Needs'
        }}/></div>
        <div> <ServicenowFooter
        data ={{
          heading : 'End-to-End Support',
          text :'Dedicated Support from Planning to Post-Launch'
        }}
        /></div>
      </div>
      <div className='flex flex-row h-150 gap-6'>
        <div> <ServicenowFooter
        data ={{
          heading : 'Your Goals Drive Every Step of Our Process',
          text : 'Solutions Tailored to Your Unique Needs'
        }}
        /></div>
        <div> <ServicenowFooter
        data = {{
          heading : 'Innovation',
          text : 'Cutting-Edge Practices for Tomorrow’s Challenges.'
        }}
        /></div>

          <div> <ServicenowFooter
        data ={{
          heading : 'ROI-Focused',
          text : 'Maximize ROI with Cost-Effective, Precision Implementation'
        }}/></div>
      
      </div>
    </div>
    </div>
  )
}

export default snowPageFooter