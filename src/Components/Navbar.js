import React from 'react'
import "../Styling/Navbar.css"

const Navbar = () => {
  return (
    <>
        <section className='navbar-main-section'>
            <nav>
                <div className='logo'>ADP Traders</div>
                <div className='menu-list'>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">Products</a> </li>
                        <li> <a href="#">Export/Import</a> </li>
                        <li> <a href="#abt">About Us</a> </li>
                        <li> <a href="#">Blogs</a> </li>
                        <li> <a href="#">Contact Us</a> </li>
                    </ul>
                    <div> Search </div>
                </div>
                <div> 
                    <button className='nav-btn'>Contact Us</button>
                </div>
            </nav>
        </section>
        
    </>
  )
}

export default Navbar
