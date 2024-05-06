import React from 'react'
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";
import { RiMic2Fill } from "react-icons/ri";

const HeaderDropDown = ({ dropDownOpen }) => {
    return (

        <div className='w-[13rem] absolute right-[14.5rem] flex flex-col bg-white rounded-b-lg shadow-md shadow-blue-500 overflow-hidden z-10 ease-in-out duration-200' style={{ height: dropDownOpen ? "12rem" : "0rem" }}>
            <div className='w-full h-[7rem] flex justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-100'>
                <a href="/discussions" className='w-[80%] flex items-center'><div className='flex'>
                    <p className='text-[2rem]'><GoCommentDiscussion /></p>
                    <p className='text-xl ml-[1rem]'>Discussions</p>
                </div></a>
            </div>
            <div className='w-full h-[7rem] flex justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-100'>
                <a href="/blogs" className='w-[80%] flex items-center'><div className='flex'>
                    <p className='text-[2rem]'><HiOutlineNewspaper /></p>
                    <p className='text-xl ml-[1rem]'>Blogs</p>
                </div></a>
            </div>
            <div className='w-full h-[7rem] flex justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-100'>
                <a href="/podcasts" className='w-[80%] flex items-center'><div className='flex'>
                    <p className='text-[2rem]'><RiMic2Fill /></p>
                    <p className='text-xl ml-[1rem]'>Podcasts</p>
                </div></a>
            </div>
        </div>

    )
}

export default HeaderDropDown