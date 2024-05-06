import React from 'react'
import { FaHeart } from "react-icons/fa";

const BooksPage = ({ books }) => {
    return (
        <div className='flex flex-wrap w-full'>
            {books.map((item) => {
                return (
                    <div key={item.id} className='w-[24.39%] m-1 h-[32rem] p-[1rem] text-center flex flex-col items-center relative'>
                        <p className='absolute right-2 top-4 text-gray-400 text-lg cursor-pointer'><FaHeart /></p>
                        <img src={item.bookImg} alt="book-image" className='w-[70%] cursor-pointer hover:scale-[1.02] ease-in-out duration-100' style={{ aspectRatio: 1 / 1.6 }} />
                        <p className='text-lg mt-2 font-medium text-blue-500 cursor-pointer hover:underline'>{item.bookName}</p>
                        <p>{item.author}</p>
                        <p className='mt-3'>{item.rating ? `Rating: ${item.rating}` : "Rating Unavailable"}</p>
                        <div className='mt-auto flex justify-between'>
                            <p className='line-through opacity-60'>₹{item.oriPrice}</p>
                            <p className='text-green-500 ml-3'>₹{item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BooksPage