"use client"
import Form from 'next/form'
import Image from 'next/image'
import contact from '@/public/contact-us-image.png'

const contactUs = () => {
  return (
    <div className="w-screen h-250 bg-gradient-to-b from-slate-200 to-[#1A365D]">

      <div className='mx-auto text-center px-10 py-14'>
      <div className='text-6xl font-bold '>Questions? Ideas? Let's shape them today</div>
     <div className='text-5xl'>Tomorrow’s Too Late to Begin</div>
      </div>
<div className='flex mx-auto justify-center max-w-400 py-10'>
 
<Image src={contact} alt="hamburger" className="rounded-2xl"></Image>

<Form className="max-w-100 px-3 py-8 bg-white rounded-2xl" action={"/submit"}>
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
  <button className="mx-20 border-2 border-[#767676] bg-black py-4 rounded-2xl w-50 my-5 hover:bg-[#FF4757] cursor-pointer text-white">
        Contact Us
  </button>
     </Form>
     </div>
     <div className='bg-[#FF4757] h-35 w-screen my-18'></div>
    </div>
  )
}

export default contactUs