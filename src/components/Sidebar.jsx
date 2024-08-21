import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPray } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FaBible } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='flex flex-col gap-4'>

        <Link href="/">
            <FaBible className='w-16 h-16 hover:bg-gray-200 p-3 rounded-xl transition-all duration-200'/>
        </Link>

        <Link href="/" className='flex items-center p-3 hover:bg-gray-200  rounded-xl transition-all duration-200 cursor-pointer gap-2 w-fit'>
            <FcHome className='w-10 h-10 cursor-pointer '/>
        <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
      <button className='bg-blue-400 text-white font-bold rounded-full shadow-md hover:brightness-95 transition-all duration-200 w-48 h-9 hidden xl:inline'>
        Sign In
      </button>
      
    </div>
  )
}
