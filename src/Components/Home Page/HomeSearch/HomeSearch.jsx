import React from 'react'
import { FaHeart } from "react-icons/fa";

const HomeSearch = (props) => {
    return (
        <div className='w-[88%] mx-auto py-[4rem]'>


            <p className='text-[2.1rem] font-medium'>Books</p>
            {
                props.filteredBooks.length > 0 ?
                    <div className='flex flex-wrap'>
                        {props.filteredBooks.map((item) => {
                            return (
                                <div className='w-[24.39%] m-1 h-[35rem] p-[1rem] text-center flex flex-col items-center relative'>
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
                    : 
                    <div className='w-full'>
                        <p className='text-blue-500'>No Books found.</p>
                    </div>}


            <p className='text-[2.1rem] font-medium mt-[4rem]'>Discussions</p>
            {
                props.filteredDiscussions.length > 0 ?
                    <div className='flex flex-wrap'>
                        {props.filteredDiscussions.map((item) => {
                            return (
                                <div className='w-[23rem] mr-[2rem] h-[15rem] bg-blue-100 mt-6 py-3 px-3 rounded-xl hover:scale-[1.02] ease-in-out duration-100 flex flex-col justify-between'>
                                    <p className='text-[1.6rem] font-medium'>{item.discussionsName}</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Veritatis facere alias, officiis ducimus voluptatem corrupti sint molestiae quo eos quod debitis repellat, ea quia dolores.</p>
                                    <p>Created by: {item.creator}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                    :
                    <div className='w-full'>
                        <p className='text-blue-500'>No Discussions found.</p>
                    </div>
            }

            <p className='text-[2.1rem] font-medium mt-[4rem]'>Blogs</p>
            {
                props.filteredBlogs.length > 0 ?
                    <div className='flex flex-wrap'>
                        {props.filteredBlogs.map((item) => {
                            return (
                                <div className='mr-[2rem]'>
                                    <div className='w-[23rem] h-[15rem] bg-blue-100 mt-6 py-3 px-3 rounded-xl hover:scale-[1.02] ease-in-out duration-100 flex flex-col justify-between'>
                                        <p className='text-[1.6rem] font-medium'>{item.blogName}</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere alias, officiis ducimus voluptatem corrupti sint molestiae quo eos quod debitis repellat, ea quia dolores.</p>
                                        <p>Published by: {item.blogAuthor}</p>
                                    </div>
                                    <p className='mt-2 ml-2'>{item.reactions} people reacted to this blog.</p>
                                </div>
                            )
                        })

                        }
                    </div>
                    :
                    <div className='w-full'>
                        <p className='text-blue-500'>No Blogs found.</p>
                    </div>
            }

        </div>
    )
}

export default HomeSearch