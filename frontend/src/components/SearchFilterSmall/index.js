import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

import "./SearchFilterSmall.css"

const SearchFilterSmall = () => {

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
    <form onSubmit={handleSubmit} className='filter-bar-small-form'>
            <div className='filter-bar-small-form-wrapper'>
                <input type="text" className='filter-bar-small-input' /*placeholder="Enter an address, city, or ZIP code" */ placeholder="Enter a Home Type or ZIP code"
                value={searchValue} 
                onChange={(e) => (setSearchValue(e.target.value))}/>
                <button id='filter-bar-small-btn'>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
  )
}

export default SearchFilterSmall