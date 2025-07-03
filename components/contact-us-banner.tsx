import React from 'react'
import Image from "next/image";
import arrow from "@/public/right-arrow-1.png";
import Link from 'next/link';


const contactUsBanner = () => {
    return (
        <div className='bg-[#1A365D] h-35 w-screen'>
            <div className='flex justify-around'>
            <div className='flex flex-row'>
                <div className="text-white py-10 font-bold h-9 w-75 text-center text-2xl">Ready to make magic happen? Let’s chat</div>
                <div>
                    <Image
                        src={arrow}
                        width={180}
                        height={35}
                        alt="Right Arrow"
                        className="py-16"
                    ></Image>
                </div>
                <div>  <Link href={'/contact-us'}> <button className=" text-white text-2xl mx-8 border-2 border-[#767676] bg-[#FF4757] py-5 rounded-2xl w-50 my-8 hover:bg-[#A41622] cursor-pointer font-extrabold">
                    Contact Us
                </button>
                </Link>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default contactUsBanner