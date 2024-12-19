import React from 'react'
import Navbar from './Navbar'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";

function Header() {
  return (
    <div className='Header'>
        <Navbar/>

        <div className="headingAndDescriptionCont">
            
            <h1>Finding Your New <br /> Home Is Simple</h1>
            <p>Manage properties effortlessly with our Real Estate Management System, simplifying listings, sales, and tenant management.</p>
            <input type="text" name="" id="" placeholder='Search' /><HiMiniArrowLongRight className='arrowSearch'/>

        </div>

            
            <div className="categorialHeaderContainer">
                 <select name="" id="" className='selectCategory'>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option value="rent">Rent</option>
                 </select>
                 
                 <input type="text" name="" id="" placeholder='Enter city,Locality etc...' className='location'/>
                 {/* <span className='verticalLinespan'></span> */}

                 <input type="number" name="" id="" min={0} className='budgetInp' placeholder='Budget'/>
                 <FaRupeeSign className="inputBudgetIcon" />
                 
                 <button className="seacrhBtnLocation"><CiSearch className='ciSearch' /> Search</button>
            </div>
          
    
    </div>
  )
}

export default Header