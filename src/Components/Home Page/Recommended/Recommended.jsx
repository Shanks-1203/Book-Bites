import React from 'react'
import recommendedList from './recommendedList'

const Recommended = () => {
    return (
        <div className='w-[88%] bg-blue-100 rounded-xl mt-12 h-full mx-auto px-6 py-[2rem]'>
            <p className='text-[2.1rem] font-medium'>Recommendations <span className='text-base text-blue-500 font-normal'>based on your interests</span></p>
            <div className='w-full'>
                {recommendedList.map((item) => {
                    return (
                        <div className='w-full my-[2rem]'>
                            <p className='text-[1.6rem] font-medium'>{item.type === "interest" ? "You Might Also Like" : item.genreName}</p>
                            <div className='w-full'>
                                <div className='w-full overflow-x-auto overflow-hidden flex'>
                                    {item.books.map((item) => {
                                        return (
                                            <div className='p-6 flex flex-col text-center items-center w-[24%] h-[37rem] m-2' style={{ aspectRatio: 1 / 1.5 }}>
                                                <img src={item.bookImg} alt="book" className='w-[17rem] hover:scale-[1.01] ease-in-out duration-100 cursor-pointer' style={{ aspectRatio: 1 / 1.5 }} />
                                                <p className='mt-2 text-xl font-medium text-blue-500 hover:underline cursor-pointer'>{item.bookName}</p>
                                                <p>{item.author}</p>
                                                <p className='mt-[1rem]'>Rating: {item.rating}</p>
                                                <p>{item.genre}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Recommended