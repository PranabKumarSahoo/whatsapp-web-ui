import React, { useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import './SearchBar.css';

const SearchBar = () => {
    const [focus, setFocus] = useState(false);

    return (
        <div className='chat-list-input'>
            <div className='input-icon'>
                {focus ? <IoArrowBackOutline className='arrow-icon' /> : <IoMdSearch className='search-icon' />}
            </div>
            <div className='input-bar'>
                <input
                    type="text"
                    placeholder='Search'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </div>
        </div>
    );
};

export default SearchBar;