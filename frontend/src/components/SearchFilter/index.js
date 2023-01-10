import React from 'react'
import { useEffect, useState } from 'react'

import './SearchFilter.css'
const SearchFilter = () => {

    const [searchValue, setSearchValue] = useState('')
    
    const handleSubmit = (e) =>{

    }
  return (
    <form onSubmit={handleSubmit} className='search-filter-form'>
            <div className='form-wrapper'>
                <input type="text" className='form-input' placeholder="Enter an address, city, or ZIP code" 
                value={searchValue} 
                onChange={(e) => (setSearchValue(e.target.value))}/>
                <button id='search-filter-btn'>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
  )
}

export default SearchFilter