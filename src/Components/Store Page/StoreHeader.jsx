import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './store.css'

const StoreHeader = ({setType}) => {

    const storeType = (type) =>{
        setType(type)
    }

  return (
    <div className='w-[88%] px-6 mx-auto py-7 flex justify-between'>
        <div className='w-[50%]'>
            <ul className='flex justify-between genreOptions'>
                <li onClick={()=>storeType("")}>All</li>
                <li onClick={()=>storeType("new")}>New Arrivals</li>
                <li onClick={()=>storeType("best")}>Best Sellers</li>
                <li onClick={()=>storeType("fiction")}>Fiction books</li>
                <li onClick={()=>storeType("nonFiction")}>Non-Fiction Books</li>
                <li onClick={()=>storeType("author")}>Bestselling Authors</li>
            </ul>
        </div>
        <div className='w-[12%]'>
            <ul className='flex justify-between storeOptions'>
                <li className='hover:text-orange-500 '><span><FaShoppingCart/></span> Cart</li>
                <li className='hover:text-red-500'><span><FaHeart/></span>Wishlist</li>
            </ul>
        </div>
    </div>
  )
}

export default StoreHeader