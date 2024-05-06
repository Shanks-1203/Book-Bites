import React from 'react'
import DiscussionLoader from './DiscussionLoader';

const LoaderComponent = () => {

    const array = [1,2,3,4];

    return (
        <div className='w-[88%] flex mt-[9rem] items-center justify-between mx-auto'>
            {array.map((item)=>{
                return <DiscussionLoader/>
            })}
        </div>
    )
}

export default LoaderComponent