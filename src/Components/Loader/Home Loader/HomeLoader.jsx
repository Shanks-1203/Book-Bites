import React from 'react'
import Header from '../../Header/Header'
import '../loader.css'
import LoaderComponent from './LoaderComponent'

const HomeLoader = () => {
  return (
    <div>
        <Header/>

        <div className='w-[88%] h-[28rem] mt-[3rem] mx-auto bg-gray-300 relative overflow-hidden rounded-xl'>
            <div className='bg-white opacity-40 h-full w-[10rem] loadingLine'></div>
        </div>

        <LoaderComponent/>

        <LoaderComponent/>
    </div>
  )
}

export default HomeLoader