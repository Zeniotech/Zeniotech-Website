import React from 'react'
import SnowCard from '@/components/snow-card'
import snowModuleBannerImage from '@/public/servicenow-page-banner-image-test.png'
import Image from 'next/image'
import ContactUsBanner from '@/components/contact-us-banner'

const servicenowPage = () => {
  return (
    <div>

      <div>
      <Image
      src={snowModuleBannerImage}
      alt = 'servicenow banner image'
      className='h-70 w-screen'
     />
     </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-8 content-around'>
      <SnowCard
       data = {{heading : 'ITSM',
         subText: 'Transform IT with ServiceNow ITSM: Predictive AI, cloud workflows, Service Analytics unify tools, Virtual Agent, Mobile App, scalable workflows.',
         feature1:'Incident',
         feature2:'Problem',
         feature3:'Change',
         feature4:'Knowledge',
         feature5:'Request'
       }}/>


     <SnowCard
       data = {{heading : 'GRC',
         subText: 'Elevate GRC with ServiceNow:Risk Intelligence automate audits, unify compliance, monitor threats/vendor risks, scalable resilience',
         feature1:'IRM',
         feature2:'Policy & Compliance',
         feature3:'TPRM',
         feature4:'Audit Management',
         feature5:'Regulatory Management'
       }}/>


       <SnowCard
       data = {{heading : 'HRSD',
         subText: 'Elevate HR with ServiceNow HRSD:Employee Portal automate onboarding/compliance, Virtual Agent, Mobile App engage talent.',
         feature1:'HR Case Management',
         feature2:'HR Profile',
         feature3:'ESC Portal',
         feature4:'Employee Journey',
         feature5:'Integration'
       }}/>

      <SnowCard
       data = {{heading : 'SecOps',
         subText: 'Elevate SecOps with ServiceNow: Automated Playbooks, Vulnerability Management unify IT/security, proactive cyber resilience.',
         feature1:'Security Incident Response',
         feature2:'Integration',
         feature3:'Vulnerbility response',
         feature4:'Threat Intelligence',
         feature5:''
       }}/>


     <SnowCard
       data = {{heading : 'ITAM',
         subText: 'Elevate ITAM with ServiceNow: Automation Engine, SAM streamline lifecycle, optimize costs, enforce compliance.',
         feature1:'SAM',
         feature2:'HAM',
         feature3:'Cloud & Contract Management',
         feature4:'SAAS License Management',
         feature5:'EAM'
       }}/>

     

     <SnowCard
       data = {{heading : 'ITOM',
         subText: 'Elevate ITOM with ServiceNow: AIOps, Cloud Insights, ServiceMap automate monitoring, prevent outages, slash multi-cloud costs.',
         feature1:'Discovery',
         feature2:'Service Mapping',
         feature3:'CMDB',
         feature4:'Service Graph Connector',
         feature5:'Agentic Workflow'
       }}/>


     <SnowCard
       data = {{heading : 'CSM',
         subText: 'Elevate CSM with ServiceNow: Predictive AI, Customer Portal, Agent Workspace slash costs via GenAI, real-time analytics.',
         feature1:'Case Management',
         feature2:'Portals',
         feature3:'AI Agents',
         feature4:'Engagement Messenger',
         feature5:'Workspance'
       }}/>



     <SnowCard
       data = {{heading : 'SPM',
         subText: 'Elevate SPM with ServiceNow: AI roadmaps, Agile portfolios, demand planning align strategy, spend, outcomes.',
         feature1:'Idea',
         feature2:'Project',
         feature3:'Agile',
         feature4:'Demand',
         feature5:'Innovation'
       }}/>


       <SnowCard
       data = {{heading : 'CAD',
         subText: 'Build Apps on ServiceNow: App Engine, Studio empower low/pro-code workflows, IntegrationHub, secure enterprise agility.',
         feature1:'Customized Solution',
         feature2:'Knowledge',
         feature3:'',
         feature4:'',
         feature5:''
       }}/>

       </div>
     
      <ContactUsBanner />

    </div>
  )
}

export default servicenowPage
