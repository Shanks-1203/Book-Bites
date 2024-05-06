import React, { useState } from 'react'
import { IoBookOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderDropDown from './HeaderDropDown';
import { FaBookmark } from "react-icons/fa6";
import './header.css'
const Header = ({search, setSearch}) => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const openDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    }

    let loc = window.location.pathname.split("/")[1];

    return (
        <div className='w-full'>
            <div className='w-[88%] py-6 px-5 border-b-2 border-blue-500 mx-auto h-full flex items-center justify-between'>

                <div className='flex justify-between w-[8rem]'>
                    <p className='text-3xl'><IoBookOutline /></p>
                    <p className='text-lg'>Book Bites</p>
                </div>

                <div className='w-[40%] h-[3rem] bg-blue-100 rounded-lg px-4'>
                    <div className='flex items-center h-full justify-between'>
                        <p className='text-3xl'><IoSearchSharp /></p>
                        <form action="/" className='w-full px-4'>
                            <input type="text" className='w-full outline-none bg-blue-100' value={search} onChange={(event)=>setSearch(event.target.value)} placeholder='Search' />
                        </form>
                    </div>
                </div>

                <div className=' w-[27rem]'>
                    <ul className='flex justify-between text-lg items-center homeOptions'>
                        <a href="/"><li>Home</li></a>
                        <a href="/store"><li>Store</li></a>
                        <li className='flex items-center ' onClick={openDropDown}>Community<span className='ease-in-out duration-200' style={{ transform: dropDownOpen ? "rotate(180deg)" : "rotate(0)" }}><IoMdArrowDropdown /></span></li>
                        <a href="/feeds"><li>Feeds</li></a>
                        <li className='text-3xl'><CgProfile /></li>
                    </ul>
                </div>

                {loc === "" && <p className='bookmark right-[32.6rem]'><FaBookmark /></p>}
                {loc === "store" && <p className='bookmark right-[27.4rem]'><FaBookmark /></p>}
                {(loc === "discussions" || loc === "blogs" || loc === "podcasts") && <p className='bookmark right-[20rem]'><FaBookmark /></p>}
                {loc === "feeds" && <p className='bookmark right-[12.5rem]'><FaBookmark /></p>}

            </div>

            <HeaderDropDown dropDownOpen={dropDownOpen} />

        </div>
    )
}

export default Header