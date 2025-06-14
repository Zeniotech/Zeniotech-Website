"use client"
import Form from 'next/form'
import Image from 'next/image'
import contact from '@/public/contact-us-image.png'

const contactUs = () => {
  return (
    <div className="w-screen h-200 bg-gradient-to-b from-slate-200 to-blue-800">
     <div className='text-7xl mx-auto text-center font-bold'>Questions? Ideas? Let's shape them today</div>
     <div className='text-5xl mx-auto text-center'>Tomorrow’s Too Late to Begin</div>
     
<div className='flex mx-auto justify-center max-w-400'>
 
<Image src={contact} alt="hamburger" className="rounded-2xl"></Image>

<Form className="max-w-100 px-3  bg-white rounded-2xl" action={"/submit"}>
  <div className="mb-5 flex flex-col gap-2">
    <label className='text-black'>First Name</label>
    <input type="text" id="email" className=" border-2" />
  </div>
  <div className="mb-5 flex flex-col gap-2">
    <label className="mb-2 text-gray-900">Last Name</label>
    <input type="text" id="password" className='border-2'/>
  </div>
  <div className="mb-5 flex flex-col gap-2">
    <label className='text-black'>Your email</label>
    <input type="email" id="email" className=" border-2" />
  </div>
  <div className="mb-5 flex flex-col gap-2">
    <label className="mb-2 text-gray-900">Your Query</label>
    <input type="password" className='border-2'/>
  </div>
  <button className="mx-20 border-2 border-[#767676] bg-[#FF4757] py-4 rounded-2xl w-50 my-5 hover:bg-[#A41622] cursor-pointer">
        Contact Us
  </button>
     </Form>
     </div>
     
    </div>
  )
}

export default contactUs