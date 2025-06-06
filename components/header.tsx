'use client'

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import hamburger from "@/public/hamburger.svg";
import { useState } from "react";

const header = () => {
    const[openDropdown,setOpenDropDown] = useState(false);
    const[openHamburger,setOpenHamburger] = useState(false);
  return (
    <div className="h-25">
      <div className="bg-[#1A365D] text-white justify-between flex">
        <div>
          <div className="flex">
            <div
            onClick={()=>setOpenHamburger(!openHamburger)}
            >
              <Image
                src={hamburger}
                alt="hamburger"
                className="w-10 h-10 lg:hidden xs:visible sm:visible  md:visible mx-3 my-7"
              ></Image>
            </div>
            <ul className="flex mx-6 my-2">
              <Link href="/">
                <li className="my-1/2">
                  <Image
                    src={logo}
                    alt="logo"
                    width={80}
                    height={80}
                    className="md:mx-1/2"
                  ></Image>
                </li>
              </Link>
              <Link href="/">
                <li className="my-1/2"></li>
                <li className="mx-1/2 my-7.5 hidden lg:block md:block">
                  Zeniotech
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <ul className="flex justify-between">
          <Link href="/">
            <li className="hidden lg:block my-7.5 hover:bg-[#7B61FF] rounded-2xl w-20 h-10 text-center py-1.5">
              Home
            </li>
          </Link>
          <div className="group">
          <div onMouseEnter={ () => setOpenDropDown(true)}
               onMouseLeave={ () => setOpenDropDown(false)}           
              >
          <Link href="/our-services">
            <li className="hidden lg:block my-7.5 hover:bg-[#7B61FF] rounded-2xl w-20 h-10 text-center py-1.5 group cursor-pointer">
              Services
            </li>
          </Link>
          </div>
          </div>
          <Link href="/about-us">
            <li className="hidden lg:block my-7.5 hover:bg-[#7B61FF] rounded-2xl w-20 h-10 text-center py-1.5">
              About Us
            </li>
          </Link>
          <Link href="/contact-us">
            <li>
              <button className=" mx-8 border-2 border-[#767676] bg-[#FF4757] py-4 rounded-2xl w-50 my-5 hover:bg-[#A41622] cursor-pointer">
                Contact Us
              </button>
            </li>
          </Link>
        </ul>
      </div>

      {openDropdown && (
     <div className=" h-60 py-7 w-80 rounded-2xl  bg-[#7B61FF] flex justify-self-end mx-32 my-[-18] group-hover:opacity-100"
     >
     <div className="  rounded-3xl justify-around ">
          <Link href="/">
            <li className="py-1 text-white px-11 rounded-2xl mx-16 bg-[#1A365D] ">
              Home
            </li>
          </Link>
          <Link href="/our-services">
            <li className=" py-1 text-white px-11 my-9 rounded-2xl mx-16 bg-[#1A365D]">
              Services
            </li>
          </Link>
          <Link href="/about-us">
            <li className="text-white py-1 px-11 rounded-2xl  mx-16 bg-[#1A365D]">
              About Us
            </li>
          </Link>
        </div>
      </div>
     )
    }
{openHamburger && (
<div className="h-screen bg-[#7B61FF] opacity-100 relative">
  <div className="relative text-center">
  <ul className = 'text-white'>
    <li className = 'h-20 text-4xl'>Home</li>
    <li className = 'h-20 text-4xl'>Services</li>
    <li className = 'h-20 text-4xl'>About Us</li>
    <li><button className = "border-2 border-[#767676] bg-[#FF4757] py-4 rounded-2xl w-70 my-5 hover:bg-[#A41622] cursor-pointer text-4xl shadow-2xl">Contact Us</button></li>
  </ul>
  </div>
</div>)}
    </div>
  );
};

export default header;
