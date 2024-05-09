import React from 'react'
import { Blogitem } from './Blogitem'

export const BlogList = ({ blogs }) => {
  return (
    <div className=' max-w-[1200px] mx-auto p-4 grid grid-cols-2 gap-6 lg:grid-cols-3'>

    {blogs.map((blog) => (
      <Blogitem key={blog.id} blog={blog} />
    ))}
  </div>
  )
}
