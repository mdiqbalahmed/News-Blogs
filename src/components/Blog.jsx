import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { blogList } from './data';
import { Link } from 'react-router-dom'
import EmptyList from './common/EmptyList';
import Chip from './common/Chip';

export const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    //console.log(id, blog)
  
    useEffect(() => {
      let blog = blogList.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    }, []);
    
  return (
    <div className='max-w-7xl m-auto p-4'>  <Link className='block mb-8 font-bold decoration-1 ' to='/'>
    <span> &#8592;</span> <span>Go Back</span>
  </Link>
  {blog ? (
    <div className='max-w-3xl m-auto'>
      <header>
        <p >Published {blog.createdAt}</p>
        <h1>{blog.title}</h1>
        <div className='flex justify-center gap-3'>
          {blog.subCategory.map((category, i) => (
            <div className='m-4' key={i}>
            <Chip label={category}></Chip>
            </div>
          ))}
        </div>
      </header>
      <img className='w-full' src={blog.cover} alt='cover' />
      <p className='blog-desc'>{blog.description}</p>
    </div>
  ) : (<EmptyList></EmptyList>)}</div>
  )
}
