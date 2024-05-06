import React from 'react'
import Header from '../../Header/Header'
import StoreHeader from '../../Store Page/StoreHeader'
import StoreSidebar from '../../Store Page/StoreSidebar'
import BookLoader from './BookLoader'

const StoreLoader = () => {
  return (
    <div>
        <Header/>
        <StoreHeader/>
        <div className='flex w-[88%] mx-auto'>
            <StoreSidebar/>
            <BookLoader/>
        </div>
    </div>
  )
}

export default StoreLoader