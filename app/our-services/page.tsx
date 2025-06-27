import React from 'react'
import ServiceCard from '@/components/service-card'
import ContactUsBanner from '@/components/contact-us-banner'
import Image from 'next/image'
import serviceBannerImage from '@/public/service-banner-image-1.png'

const ourServices = () => {
  return (
    <div>
      <div>
        <Image src={serviceBannerImage} alt='service Banner Image' className='w-screen'></Image>
      </div>
      <div>
      <div className='bg-[#1A365D] h-48 w-screen'>
        <div className='h-48 flex flex-col justify-center items-center'>
         <div className='bg-white h-20 w-130 rounded-2xl text-black font-bold text-7xl text-center'>Our Services</div>
      </div>
      </div>
 
      <div className='bg-[#F5F5F5] h-20 my-[-40] mx-18 text-3xl font-bold text-center underline py-5 rounded-2xl'>
        Secure, Scalable Tech for Future-Ready Enterprises
      </div>

      </div>
      <div className='flex flex-row justify-around my-15 w-screen'>
        <ServiceCard
          heading={{
            heading: 'Seamless Integration',
            subText: 'Seamless integrations that unify systems, eliminate data silos, and supercharge efficiency with scalable, API-driven connectivity for future-ready businesses.'
          }} />

        <ServiceCard
          heading={{
            heading: 'ServiceNow Implementation',
            subText: 'Expert ServiceNow implementation services that streamline workflows, accelerate digital transformation, and maximize ROI through tailored platform customization, integration, and optimization.'
          }} />

        <ServiceCard
          heading={{
            heading: 'Custom Solutions',
            subText: 'Custom development solutions that empower your business with agile, scalable software engineered to solve unique challenges, streamline operations, and accelerate digital transformation.'
          }} />
          
      </div>
      <div>
        <ContactUsBanner />
      </div>
    </div>
  )
}

export default ourServices
