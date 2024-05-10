import React, { useState } from 'react'
import { Blogitem } from './Blogitem'

export const BlogList = ({ blogs }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <div className=' max-w-[1200px] mx-auto p-4 grid grid-cols-2 gap-6 lg:grid-cols-3'>

{ 
    toggle ? blogs.slice(0, 6).map( blog => 
  <Blogitem key={blog.id} blog={blog} />) : blogs.map( blog => 
    <Blogitem key={blog.id} blog={blog} />)

}


</div>

<div className="text-center my-9 ">
                <button onClick={() => setToggle(!toggle)} className="btn btn-outline btn-primary">{toggle ? "SEE MORE" : "SEE LESS"}</button>
            </div>

    </div>
  
  )
}
