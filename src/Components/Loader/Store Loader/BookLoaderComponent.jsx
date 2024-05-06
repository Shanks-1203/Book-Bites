import React from 'react'

const BookLoaderComponent = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center '>
            <div className='bg-gray-300 w-[70%] h-[21rem] relative overflow-hidden rounded-[3px]'>
                <div className='bg-white opacity-40 h-full w-[10rem] loadingLine2'></div>
            </div>
            <div className='w-[60%] h-[2rem] mt-4 bg-gray-300 rounded-[3px] relative overflow-hidden '>
                <div className='bg-white opacity-40 h-full w-[10rem] loadingLine2'></div>
            </div>
            <div className='w-[80%] h-[3rem] mt-2 bg-gray-300 rounded-[3px] relative overflow-hidden '>
                <div className='bg-white opacity-40 h-full w-[10rem] loadingLine2'></div>
            </div>
        </div>
    )
}

export default BookLoaderComponent