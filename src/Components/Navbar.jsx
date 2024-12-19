import React from 'react'

function Navbar() {
  return (
    <div className='navbarContainer'>
        <span className='imgSpanNavbar'>
            <img src="Daniel_Gallego_tr-removebg-preview.png" alt="" className='logo'/>
        </span>
        <ul className='listNavbar'>
            <li>Home</li>
            <li>Contacts</li>
            <li>Support</li>
            <li>Location</li>
            <li>About us</li>
        </ul>

        <div className="loginSign">
            <button className="loginBtn">Login</button>
            <button className='signupBtn'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar