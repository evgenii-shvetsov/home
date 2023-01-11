import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

import './SearchFilter.css'
const SearchFilter = () => {

    const [searchValue, setSearchValue] = useState('');
    const history = useHistory()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push({
            pathname: '/search',
            state: {searchValue}
        })
        setSearchValue('')
    }
  return (
    <form onSubmit={handleSubmit} className='search-filter-form'>
            <div className='form-wrapper'>
                <input type="text" className='form-input' /*placeholder="Enter an address, city, or ZIP code" */ placeholder="Enter a Home Type or ZIP code"
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