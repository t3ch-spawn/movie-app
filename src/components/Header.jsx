import React from 'react'
import search from "../../public/images/search-icon.png"
import logo from "../../public/images/logo.png"

export default function Header() {
  return (

    // Container for Header
    <div className='flex w-[100%] justify-between items-center absolute top-10 left-0 px-8'>
        {/* container for logo */}
        <div>
            <img src={logo} alt="" />
        </div>

        {/* container for search bar */}
        <div className='relative w-[50%]'>
            <input className='bg-transparent border-2 border-white px-4 py-2 text-white w-[100%] rounded' type="text" placeholder='What do you want to watch?'/>
            <img className='absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer' src={search} alt="" />
        </div>

        {/* container for sign in and hamburger */}
        <div className='flex justify-center items-center text-white gap-4'>
            <p>Sign In</p>
            <div className='bg-mainRed w-[40px] h-[40px] p-2 rounded-[50%] flex flex-col justify-center items-center gap-[6px]'>
                <div className='w-[90%] rounded-[3px] bg-white h-[3px]'></div>
                <div className='w-[90%] rounded-[3px] bg-white h-[3px]'></div>
            </div>
        </div>

    </div>
  )
}
