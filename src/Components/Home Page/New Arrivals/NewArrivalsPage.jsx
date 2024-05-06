import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import newArrivalsList from './newArrivalsList'

const NewArrivalsPage = () => {
  let [newArrivals, setNewArrivals] = useState(newArrivalsList.slice(0, 3))

  return (
    <div className='w-[88%] mx-auto flex h-[31rem]'>

      <div className='w-[30%] px-7 flex items-center'>
        <div className='flex flex-col h-[21rem] justify-between'>
          <p className='text-[4rem] font-bold'>Check <br /> out the <br /> <span className='text-blue-500'>New Arrivals.</span></p>
          <div className='text-blue-500 hover:underline hover:text-red-500 w-fit cursor-pointer flex items-center'>View More<span><IoIosArrowRoundForward /></span> </div>
        </div>
      </div>

      <div className='h-full w-[70%] flex justify-evenly items-center'>
        {newArrivals.map((item) => {
          return (
            <div className='bg-blue-100 h-[27rem] w-[20rem] rounded-xl p-[2rem] flex flex-col justify-between items-center'>
              <img src={item.bookImage} alt="BookImage" className='cursor-pointer w-[12rem] hover:scale-[1.02] ease-in-out duration-100' />
              <p className='text-xl text-blue-500 cursor-pointer hover:underline'>{item.bookName}</p>
              <p>{item.author}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default NewArrivalsPage