import React from 'react'

export const Search = ({ formSubmit, value, handleSearchKey, clearSearch }) => {
  return (
    <div className='bg-white w-fit mt-6 mr-auto mb-16 ml-auto p-2 rounded-md'>
    <form className='flex items-center' onSubmit={formSubmit}>
      <input
        type='text'
        className=' bg-white outline-none  border-none'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span className='pr-2 cursor-pointer' onClick={clearSearch}>X</span>}
      <button className='outline-none border-none p-3 rounded-md bg-blue-700 '>Go</button>
    </form>
  </div>
  )
}
