import React from 'react'
import BookLoaderComponent from './BookLoaderComponent';

const BookLoader = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='w-full h-screen flex flex-wrap'>
            {array.map((item,index) => {
                return (
                    <div key={index} className='w-[24.39%] m-1 h-[32rem] relative'>
                        <BookLoaderComponent/>
                    </div>
                )
            })}
        </div>
    )
}

export default BookLoader