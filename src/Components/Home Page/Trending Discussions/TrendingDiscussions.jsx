import React, { useState } from 'react'
import trendingDiscussionsList from './trendingDisscussionsList'

const TrendingDiscussions = () => {

    const [trendingDiscussions, setTrendingDiscussions] = useState(trendingDiscussionsList.slice(0, 4));

    return (
        <div className='w-[88%] mx-auto py-[3rem] px-6'>
            <p className='text-[2.1rem] font-medium'>Trending Discussions</p>

            <div className='w-full mt-[2rem] rounded-xl flex justify-between flex-wrap'>
                {trendingDiscussionsList.map((item) => {
                    return (
                            <div className='w-[23rem] h-[15rem] bg-blue-100 mt-6 py-3 px-3 rounded-xl hover:scale-[1.02] ease-in-out duration-100 flex flex-col justify-between'>
                                <p className='text-[1.6rem] font-medium'>{item.discussionsName}</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere alias, officiis ducimus voluptatem corrupti sint molestiae quo eos quod debitis repellat, ea quia dolores.</p>
                                <p>Created by: {item.creator}</p>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrendingDiscussions