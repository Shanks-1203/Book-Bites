import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const FooterSocialMedia = () => {
  return (
    <div className='w-[30%] flex justify-between text-[2.5rem]'>
        <div className='cursor-pointer'><FaXTwitter /></div>
        <div className='cursor-pointer'><FaInstagram /></div>
        <div className='cursor-pointer'><FaFacebookSquare /></div>
    </div>
  )
}

export default FooterSocialMedia