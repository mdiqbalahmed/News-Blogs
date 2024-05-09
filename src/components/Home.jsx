import React, { useState } from 'react'
import { Search } from './Search'
import EmptyList from './common/EmptyList';
import { BlogList } from './BlogList';
import { blogList } from './data';


export const Home = () => {

   const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
        <Search  value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}></Search>

 {!blogs.length ? <EmptyList></EmptyList>  :<BlogList blogs={blogs}></BlogList> }  


    </div>
  )
}
