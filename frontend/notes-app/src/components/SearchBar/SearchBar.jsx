import React, { useState } from 'react'
import { FaMagnifyingGlass, FaRegEye } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { Form } from 'react-router-dom';

function SearchBar({value, onChange, handleSearch, onClearSearch}) {

  return (
    <>
    <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
        <input 
            placeholder='Search'
            type='text'
            value={value}
            className='w-full text-xs bg-transparent py-[11px] outline-none'
            onChange={onChange}
             />
             

        {value && (<IoMdClose className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3' onClick={onClearSearch} />)}

        <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' onClick={handleSearch}/>
        
        </div>
    </>
  )
}

export default SearchBar