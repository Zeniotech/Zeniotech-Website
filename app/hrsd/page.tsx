import React from 'react'
import ServicenowIntegrationTools from '@/components/servicenow-integration-tools'
import BannerHeader from '@/components/snow_page_header'
import Footer from '@/components/snow_page_footer'

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
