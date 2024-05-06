import React from 'react'
import Header from '../Header/Header'
// import StoreHeader from '../Store Page/StoreHeader'
import StoreSidebar from '../Store Page/StoreSidebar'
import books from '../Store Page/booksList'
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const BookDisplay = () => {

    const arr = books[1];

    console.log(arr);

    return (
        <div>
            <Header />
            <div className='w-[88%] mx-auto h-[30rem] mt-[4rem]'>
                <div className='h-full'>
                    <div className='flex h-full'>
                        <div className='w-[20%] grid place-items-center'>
                            <img src={arr.bookImg} alt="bookImg" className='w-[15rem]' style={{ aspectRatio: 1 / 1.6 }} />
                        </div>
                        <div className='w-[80%] h-full py-[3rem] px-6'>
                            <p className='text-[2.1rem] text-blue-500'>{arr.bookName} ({arr.language})</p>
                            <p>Author: {arr.author}</p>
                            <hr className='border-blue-100 mt-4' />
                            <p className='mt-2'>{arr.rating ? `Rating: ${arr.rating}` : "Rating Unavailable"}</p>
                            
                            <div>
                                <p>{arr.genre}</p>
                            </div>

                            <div className='flex items-end mt-[3rem]'>
                                <p className='text-green-500 text-3xl'>₹{arr.price}</p>
                                <p className='line-through ml-3 opacity-60'>₹{arr.oriPrice}</p>
                            </div>


                            <div className='w-[40%] h-[3rem] mt-[3rem] flex justify-between'>
                                <div className='w-[49%] h-full border-2 border-blue-500 rounded-sm cursor-pointer '>
                                    <p className='flex justify-center items-center h-full'><span className='mr-2 text-2xl text-orange-500'><FaCartPlus /></span>Add to Cart</p>
                                </div>
                                <div className='w-[49%] h-full border-2 border-blue-500 rounded-sm cursor-pointer'>
                                    <p className='flex justify-center items-center h-full'><span className='mr-2 text-2xl text-red-500'><FaHeart /></span>Add to Wishlist</p>
                                </div>
                            </div>
                            <div className='w-[40%] text-white h-[3rem] mt-2 grid place-items-center bg-blue-500 rounded-sm cursor-pointer'>
                                <p>Buy Now</p>
                            </div>
                        

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BookDisplay