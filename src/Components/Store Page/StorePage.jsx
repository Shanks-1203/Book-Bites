import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import BooksPage from './BooksPage'
import Footer from '../Home Page/Footer/Footer'
import StoreLoader from '../Loader/Store Loader/StoreLoader'
import books from './booksList'

const StorePage = () => {

  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [languageFilter, setLanguageFilter] = useState({
    English: false,
    Tamil: false,
    Hindi: false,
    Swedish: false
  })

  const languageCheck = (lang) => {
    setLanguageFilter({
      ...languageFilter,
      [lang]: !languageFilter[lang]
    })
  }

  console.log(languageFilter);

  useEffect(() => {  // Sidebar language filter
    
  }, [languageFilter])



  useEffect(() => {  // Sidebar price filter
    if (minPrice === 0 && maxPrice === 99999) {
      setFilteredBooks(books)
    }
    else if (minPrice === "" || maxPrice === "") {
      if (minPrice === "") {
        setMinPrice(0);
      }
      else if (maxPrice === "") {
        setMaxPrice(99999);
      }
    }
    else {
      let displayBooks = books.filter((item) => item.price > minPrice && item.price < maxPrice)
      setFilteredBooks(displayBooks)
    }
  }, [minPrice, maxPrice])



  useEffect(() => {  // Type filter
    let typeFilterBooks = books.filter((item) => (item.type).includes(type))
    setFilteredBooks(typeFilterBooks)
  }, [type])



  useEffect(() => {  // Search bar
    let searched = books.filter((item) => (((item.bookName).toLowerCase()).includes(search.toLowerCase()) || ((item.author).toLowerCase()).includes(search.toLowerCase())))
    setFilteredBooks(searched)
  }, [search])



  setTimeout(() => {
    setLoading(false);
  }, 2000)



  {
    if (loading) {
      return <StoreLoader />
    }
    else {
      return (
        <div>
          <Header search={search} setSearch={setSearch} />
          <StoreHeader setType={setType} />
          <div className='w-[88%] mx-auto flex'>
            <StoreSidebar languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} languageCheck={languageCheck} minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <BooksPage books={filteredBooks} />
          </div>
          <Footer />
        </div>
      )
    }
  }

}

export default StorePage