import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const NewsletterForm = () => {
    return (
        <div>
            <p>Join the Book Bites newsletter to receive monthly book recommendations, <br /> notifying on new arrivals and more.</p>
            <div className='w-[90%] flex items-center p-[0.3rem] rounded-full h-[3.5rem] bg-blue-100 mt-4'>
                <input type="text" className='w-[80%] h-full rounded-full bg-blue-100 text-black outline-none px-3' />
                <div className='w-[20%] h-full cursor-pointer bg-blue-500 rounded-full grid place-items-center'>
                    <p className='text-3xl'><IoMdCheckmark /></p>
                </div>
            </div>
        </div>
    )
}

export default NewsletterForm