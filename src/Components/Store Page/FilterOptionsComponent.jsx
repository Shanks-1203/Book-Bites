import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";

const FilterOptionsComponent = (props) => {

    // console.log(props.languageFilter?props.languageFilter:false);

    return (
        <div className='w-full'>
            <p className='text-xl font-medium text-blue-500'>{props.heading}</p>
            <ul className='mt-3 flex flex-col justify-between'>
                {
                    props.options.map((item,index) => {
                        return (
                            <li key={index} className='my-[0.3rem]'><input type="checkbox" checked={props.languageFilter?props.languageFilter.item:false} onChange={() => props.languageCheck(item)} className='checkbox' /><span className='ml-[10px]'>{item}</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const Pricing = (props) => {

    return (
        <div className='flex items-center my-[1rem]'>
            <p>{props.heading}</p>
            <div className='w-[7rem] ml-3 h-[2rem] bg-white rounded-xl flex items-center px-1'>
                <p className='flex items-center'><span className='text-md'><MdCurrencyRupee /></span><input value={props.MinPrice} type="number" className='w-full h-full outline-none pl-1 rounded-xl' onChange={(event) => props.onChange(event.target.value)} /></p>
            </div>
        </div>
    )
}

export default FilterOptionsComponent