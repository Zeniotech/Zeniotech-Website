import Image from 'next/image'
import logo from '@/public/logo.png'
import Link from 'next/link'

const header = () => {
  return (
    <div className = "bg-[#1A365D] text-white justify-between flex">
    <div> 
      <ul className = "flex">
        <Link href='/'><li className='my-1/2'><Image src ={logo} alt ="logo" width={80} height={80}></Image></li></Link>
        <Link href='/'><li className='my-1/2'></li><li className ="mx-1/2 my-7.5">Zeniotech</li></Link>
      </ul>
    </div>
    <ul className='flex justify-between'>
      <Link href='/'><li className='my-7.5 hover:bg-[#7B61FF] rounded-2xl w-20 h-10 text-center py-1.5'>Home</li></Link>
      <Link href='/our-services'><li className='my-7.5 hover:bg-[#7B61FF] rounded-2xl w-20 h-10 text-center py-1.5'>Services</li></Link>
      <Link href='/about-us'><li className='my-7.5 hover:bg-[#7B61FF] rounded-2xl w-20 h-10 text-center py-1.5'>About Us</li></Link>
      <Link href='/contact-us'><li><button className = "mx-8 border-2 border-[#767676] bg-[#FF4757] py-4 rounded-2xl w-50 my-5 hover:bg-[#A41622] cursor-pointer"> Contact Us</button></li></Link>
    </ul>
  </div>
  )
}

export default header
