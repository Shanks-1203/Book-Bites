import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import NewsletterForm from './NewsletterForm';
import FooterSocialMedia from './FooterSocialMedia';

const Footer = () => {
  return (
    <div className='w-full h-[28rem] text-white bg-blue-500 mt-[6rem] py-12'>
      <div className='w-[88%] mx-auto flex h-full'>
        <div className='w-[50%] flex flex-col justify-between'>

          <div className='flex items-center'>
            <p className='text-[2.7rem]'><IoBookOutline /></p>
            <p className='text-2xl ml-3'>Book Bites</p>
          </div>

          <div className='flex justify-between w-[85%]'>


            <div>
              <p className='text-xl font-medium mb-3'>Company</p>
              <ul>
                <li><a href="#" className='hover:underline'>About Us</a></li>
                <li><a href="#" className='hover:underline'>Privacy Policy</a></li>
                <li><a href="#" className='hover:underline'>Terms of Use</a></li>
                <li><a href="#" className='hover:underline'>Careers</a></li>
              </ul>
            </div>


            <div>
              <p className='text-xl font-medium mb-3'>Community</p>
              <ul>
                <li><a href="#" className='hover:underline'>Discussions</a></li>
                <li><a href="#" className='hover:underline'>Blogs</a></li>
                <li><a href="#" className='hover:underline'>Podcasts</a></li>
                <li><a href="#" className='hover:underline'>Events</a></li>
              </ul>
            </div>


            <div>
              <p className='text-xl font-medium mb-3'>Support</p>
              <ul>
                <li><a href="#" className='hover:underline'>Contact Us</a></li>
                <li><a href="#" className='hover:underline'>Report</a></li>
                <li><a href="#" className='hover:underline'>FAQs</a></li>
                <li><a href="#" className='hover:underline'>How To Guides</a></li>
              </ul>
            </div>
          </div>

          <p>@2023 Book Bites, Inc. All rights reserved</p>

        </div>

        <div className='w-[50%] flex flex-col justify-between'>
          <p className='text-2xl h-[2.73rem] flex items-center'>Sign up to our Newsletter</p>
          <NewsletterForm/>
          <FooterSocialMedia/>
        </div>

      </div>
    </div>
  )
}

export default Footer