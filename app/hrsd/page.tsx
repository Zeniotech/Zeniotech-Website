import React from 'react'
import ServicenowIntegrationTools from '@/components/servicenow-integration-tools'
import BannerHeader from '@/components/snow_page_header'
import ContactUsBanner from '@/components/contact-us-banner'
import Footer from '@/components/snow_page_footer'

const servicenowItsm = () => {
  return (
    <div className='my-10'>
      <BannerHeader/>
      <div className=''>
         <ServicenowIntegrationTools />
         <ContactUsBanner/>
      </div>

      <div>
        <Footer/>
      </div>

       
    </div>
  )
}

export default servicenowItsm
