import React, { useState } from 'react'
import './store.css'
import FilterOptionsComponent from './FilterOptionsComponent'
import { Pricing } from './FilterOptionsComponent'

const StoreSidebar = ({ filter, setFilter, minPrice, maxPrice, setMinPrice, setMaxPrice, languageFilter, setLanguageFilter, languageCheck }) => {


    const languages = ["English", "Tamil", "Hindi", "Swedish"];
    const binding = ["Paper Back", "Hard Cover", "E-Book"]

    return (
        <div className='h-fit w-[22%] rounded-xl bg-blue-100 flex flex-col py-[1.6rem] px-[2rem]'>

            <FilterOptionsComponent heading="Languages" languageCheck={languageCheck} languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} options={languages} filter={filter} setFilter={setFilter} />

            <div className='mt-[3rem]'><FilterOptionsComponent heading="Binding" options={binding} /></div>

            <div className='mt-[3rem]'>
                <p className='text-xl font-medium text-blue-500'>Price Range</p>

                <Pricing heading="Minimum price" Price={minPrice} onChange={setMinPrice} />
                <Pricing heading="Maximum price" Price={maxPrice} onChange={setMaxPrice} />

            </div>

        </div>
    )
}

export default StoreSidebar