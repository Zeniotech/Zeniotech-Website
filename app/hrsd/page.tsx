import React from 'react'
import ServicenowIntegrationTools from '@/components/servicenow-integration-tools'
import BannerHeader from '@/components/snow_page_header'
import ContactUsBanner from '@/components/contact-us-banner'
import Footer from '@/components/snow_page_footer'
import Image from 'next/image'
import docuSign from '@/public/docusign.png'
import firstAdvantage from '@/public/first_advantage.png'
import workDay from '@/public/workday_logo.png'
import abService from '@/public/abservice.png'


const servicenowHrsd = () => {
  return (
    <div className='my-10'>
      <BannerHeader/>
      <div className=''>
         <ServicenowIntegrationTools />
      
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default servicenowHrsd
