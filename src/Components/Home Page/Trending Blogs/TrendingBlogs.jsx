import React from 'react'
import trendingBlogsList from './trendingBlogsList'

const TrendingBlogs = () => {
    return (
        <div className='w-[88%] mx-auto py-[3rem] px-6'>
            <p className='text-[2.1rem] font-medium'>Trending Blogs</p>

            <div className='w-full mt-[2rem] rounded-xl flex justify-between flex-wrap'>
                {trendingBlogsList.map((item) => {
                    return (
                        <div>
                            <div className='w-[23rem] h-[15rem] bg-blue-100 mt-6 py-3 px-3 rounded-xl hover:scale-[1.02] ease-in-out duration-100 flex flex-col justify-between'>
                                <p className='text-[1.6rem] font-medium'>{item.blogName}</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere alias, officiis ducimus voluptatem corrupti sint molestiae quo eos quod debitis repellat, ea quia dolores.</p>
                                <p>Published by: {item.blogAuthor}</p>
                            </div>
                            <p className='mt-2 ml-2'>{item.reactions} people reacted to this blog.</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default TrendingBlogs