import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className="conrainer">
        <div className="search-form-content">
          <div className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder='Expecto Patronum
.......' />
<button type="submit" className='flex flex-c'>
  <FaSearch className="text-purple" size={32}/>
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm