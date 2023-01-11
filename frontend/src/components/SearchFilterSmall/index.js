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
    <>
    <div> 
        <form onSubmit={handleSubmit} className='filter-bar-small-form'>
                <div className='filter-bar-small-form-wrapper'>
                    <input type="text" className='filter-bar-small-input'  placeholder="Enter a Home Type or ZIP code"
                    value={searchValue} 
                    onChange={(e) => (setSearchValue(e.target.value))}/>
                    <button id='filter-bar-small-btn'>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
        </form> 
    </div>

            <div className='filter-buttons'>
                    <select name="deal_type" id="">
                            <option value="" disabled selected>Deal type</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                    </select>

                    <select name="bedroom" id="">
                            <option value="" disabled selected>Beds</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                    </select>

                    <select name="bathroom" id="">
                            <option value="" disabled selected>Baths</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                    </select>

                    <select name="listing_type" id="">
                            <option value="" disabled selected>Home Type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                    </select>
             </div>



    </>
  )
}

export default SearchFilterSmall