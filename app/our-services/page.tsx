import React from 'react'
import ServiceCard from '@/components/service-card'
import ContactUsBanner from '@/components/contact-us-banner'

const ourServices = () => {
  return (
    <div >
      <div>
     <ContactUsBanner />
        
      </div>


      <div className='flex flex-row justify-around'>
       <ServiceCard 
       heading = {{heading : 'Seamless Integration',
         subText: 'Seamless integrations that unify systems, eliminate data silos, and supercharge efficiency with scalable, API-driven connectivity for future-ready businesses.'
       }}/>

         <ServiceCard 
       heading = {{heading : 'ServiceNow',
         subText: 'Expert ServiceNow implementation services that streamline workflows, accelerate digital transformation, and maximize ROI through tailored platform customization, integration, and optimization.'
       }}/>

         <ServiceCard 
       heading = {{heading : 'Custom Solutions',
         subText: 'Custom development solutions that empower your business with agile, scalable software engineered to solve unique challenges, streamline operations, and accelerate digital transformation.'
       }}/>

       </div>

       
    </div>
  )
}

export default ourServices
