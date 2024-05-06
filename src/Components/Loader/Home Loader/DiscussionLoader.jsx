import React from 'react'

const DiscussionLoader = () => {
  return (
    <div className='w-[23rem] rounded-xl h-[15rem] bg-gray-300 relative overflow-hidden'>
        <div className='bg-white opacity-40 h-full w-[10rem] loadingLine2'></div>
    </div>
  )
}

export default DiscussionLoader