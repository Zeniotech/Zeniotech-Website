import React from 'react'
<<<<<<< HEAD
import ServicenowIntegrationTools from '@/components/servicenow-integration-tools'
import BannerHeader from '@/components/snow_page_header'
import ContactUsBanner from '@/components/contact-us-banner'
import Footer from '@/components/snow_page_footer'
=======
import Image from 'next/image'
import docuSign from '@/public/docusign.png'
import firstAdvantage from '@/public/first_advantage.png'
import workDay from '@/public/workday_logo.png'
import abService from '@/public/abservice.png'
>>>>>>> 8b8bb512fbc959b6c9bde0049db4065e987b2d7d


const servicenowHrsd = () => {
  return (
    <div className='my-10'>
<<<<<<< HEAD
      <BannerHeader/>
      <div className=''>
         <ServicenowIntegrationTools />
         <ContactUsBanner/>
      </div>

      <div>
        <Footer/>
      </div>

       
=======
       <div>
      <div className='bg-[#1A365D] h-40 flex flex-row justify-around items-center'>
       <Image src={workDay} alt='docusign logo' className='h-30 w-30'></Image>
       <Image src={docuSign} alt='docusign logo' className='h-30 w-30'></Image>
       <Image src={firstAdvantage} alt='docusign logo' className='h-30 w-30'></Image>
       <Image src={abService} alt='docusign logo' className='h-30 w-30'></Image>
      </div>
    </div>
>>>>>>> 8b8bb512fbc959b6c9bde0049db4065e987b2d7d
    </div>
  )
}

export default servicenowHrsd
