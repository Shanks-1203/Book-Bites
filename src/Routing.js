import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home Page/HomePage'
import StorePage from './Components/Store Page/StorePage'
import DiscussionsPage from './Components/Discussions Page/DiscussionsPage'
import FeedsPage from './Components/Feeds Page/FeedsPage'
import BlogsPage from './Components/Blogs Page/BlogsPage';
import PodcastsPage from './Components/Podcasts Page/PodcastsPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/discussions" element={<DiscussionsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/podcasts" element={<PodcastsPage />} />
                <Route path="/feeds" element={<FeedsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing