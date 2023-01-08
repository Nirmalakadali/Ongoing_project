import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';
import { images } from '../../constants';
const Header = () => {
  return (
    <div className="holder">
        <header className="header">
            <Navbar/>
            <div id="app">
  <div className="title">
    <div className="title-inner">
      <div className="cafe">
        <div className="cafe-inner">Magic Library</div>
      </div>
      <div className="mozart">
        <div className="mozart-inner">Find your fortune</div>
      </div>
      <div className="search">
      <SearchForm/>
      </div>
    </div>
  </div>
 
  <div className="image">
    <img src={images.library} alt="bg"/>
  </div>
  
</div>
            {/* <div className="header-content flex flex-c text-center text-white">
                <h2 className="header-title text-capitalize">Find your magic book</h2> 


             <p className="header-text fs-18 fw-3">Welcome to our magic library change your fortune here. If you have  any doubt come here nothing is impossible with magic</p>
                
            </div> */}
        </header>
    </div>
  )
}

export default Header