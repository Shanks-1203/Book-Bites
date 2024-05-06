import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import NewArrivalsPage from './New Arrivals/NewArrivalsPage'
import TrendingDiscussions from './Trending Discussions/TrendingDiscussions'
import TrendingBlogs from './Trending Blogs/TrendingBlogs'
import Recommended from './Recommended/Recommended'
import Footer from './Footer/Footer'
import HomeLoader from '../Loader/Home Loader/HomeLoader'
import books from '../Store Page/booksList'
import trendingDiscussionsList from './Trending Discussions/trendingDisscussionsList'
import trendingBlogsList from './Trending Blogs/trendingBlogsList'
import HomeSearch from './HomeSearch/HomeSearch'
// import Loader from '../Loader/Loader'

const HomePage = () => {

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filteredDiscussions, setFilteredDiscussions] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);


  useEffect(() => {
    let filterBooks = books.filter((item) => ((item.bookName).toLowerCase()).includes(search.toLowerCase()) || (((item.author).toLowerCase()).includes(search.toLowerCase())))
    let filterDiscussion = trendingDiscussionsList.filter((item) => (((item.discussionsName).toLowerCase()).includes(search.toLowerCase())))
    let filterBlogs = trendingBlogsList.filter((item) => (((item.blogName).toLowerCase()).includes(search.toLowerCase())))

    setFilteredBooks(filterBooks);
    setFilteredDiscussions(filterDiscussion);
    setFilteredBlogs(filterBlogs)

  }, [search])


  setTimeout(() => {
    setLoading(false);
  }, 2000)

  {
    if (loading) {
      return <HomeLoader />
    }
    else {
      if (search) {
        return (
          <div>
            <Header search={search} setSearch={setSearch} />
            <HomeSearch filteredBooks={filteredBooks} filteredDiscussions={filteredDiscussions} filteredBlogs={filteredBlogs} />
          </div>
        )
      }
      else {
        return (
          <div>
            <Header search={search} setSearch={setSearch} />
            <NewArrivalsPage />
            <TrendingDiscussions />
            <TrendingBlogs />
            <Recommended />
            <Footer />
          </div>
        )
      }
    }
  }
}

export default HomePage