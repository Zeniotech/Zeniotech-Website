    import React from 'react'
    import Image from "next/image";
    import arrow from "@/public/right-arrow.svg";


    const contactUsBanner = () => {
    return (
    <div className=' flex flex-row justify-around bg-[#1A365D] h-35 w-screen my-18'>

    <div className="text-white py-10 font-bold h-9 w-45 text-center">Ready to make magic happen? Let’s chat</div>
    <div>
        <Image
                src={arrow}
                 width={180}
                 height={15}
                alt="Right Arrow"
                className="py-6 "
              ></Image>
    </div>
    <div>  <button className=" text-white text-2xl mx-8 border-2 border-[#767676] bg-[#FF4757] py-5 rounded-2xl w-50 my-8 hover:bg-[#A41622] cursor-pointer">
                    Contact Us
                </button> </div>        
        
    </div>
    )
    }

    export default contactUsBanner