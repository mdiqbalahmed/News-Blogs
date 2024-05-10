import React from 'react'
import Chip from './common/Chip'
import { Link } from 'react-router-dom'

export const Blogitem = ({
    blog: {
      description,
      title,
      createdAt,
      authorName,
      authorAvatar,
      cover,
      category,
      id,
    },
  }) => {
  return (
    <div className=' flex flex-col mb-4'>
    <img className='w-fit h-60 object-cover rounded-2xl mb-2' src={cover} alt='cover' />
   <Chip label={category}></Chip>
    <h3 className='m-3 flex-1'>{title}</h3>
    <p className='relative max-h-12 overflow-hidden pr-3 text-sm '>{description.slice(0, 65)}...</p>
    <footer className='flex items-center mt-4 justify-between'>
      <div className='flex items-center'>
        <img className='w-10 h-10 rounded-box object-cover mr-2' src={authorAvatar} alt='avatar' />
        <div>
          <h6 className='text-sm'>{authorName}</h6>
          <p className='font-bold'>{createdAt}</p>
        </div>
      </div>
      <Link to={`/blog/${id}`}> <button className="btn btn-outline btn-primary">Detail <span>&#8594;</span> </button></Link>
    </footer>
  </div>
  )
}
