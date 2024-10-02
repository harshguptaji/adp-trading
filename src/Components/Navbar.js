import React, {useState,useEffect} from 'react'
import "../Styling/Navbar.css"
import icon1 from '../Assets/phone-icon.png';
import icon2 from '../Assets/menu-icon.png';
import icon3 from '../Assets/search.png'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen((prev) => !prev);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
          // Disable scrolling
          document.body.style.overflow = 'hidden';
        } else {
          // Enable scrolling
          document.body.style.overflow = 'auto';
        }
    
        // Cleanup function to ensure overflow is reset
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);

  return (
    <>
        <section className='navbar-main-section'>
            <nav className='nav-nav'>
                <div className='logo'>ADP Traders</div>
                <div className='menu-list'>
                    <ul>
                        <li> <a className='link-hover' href="#">Home</a> </li>
                        <li> <a className='link-hover' href="#">Products</a> </li>
                        <li> <a className='link-hover' href="#">Export/Import</a> </li>
                        <li> <a className='link-hover' href="#abt">About Us</a> </li>
                        <li> <a className='link-hover' href="#">Blogs</a> </li>
                        <li> <a className='link-hover' href="#">Contact Us</a> </li>
                    </ul>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className='nav-div-btn'> 
                    <button className='nav-btn'>Contact Us</button>
                </div>
            </nav>
        </section>
        <section className='mob-nav-section'>
            <nav>
                <div className='mob-logo'>
                    ADP Traders
                </div>
                <div className='mob-nav-section-2'>
                    <div className="circle">
                        <img src={icon1} alt="icon1" />
                    </div>
                    <div onClick={toggleMenu} className="circle">
                        <img src={icon2} alt="icon1" />
                    </div>
                </div>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <i className="fa fa-search"></i>
            </div>

            {isOpen && (
        <div className="navbar-menu" onClick={closeMenu}>
          <ul>
            <li><a className='link-hover' href="#">Home</a></li>
            <li><a className='link-hover' href="#">Products</a></li>
            <li><a className='link-hover' href="#">Export / Import</a></li>
            <li><a className='link-hover' href="#">About Us</a></li>
            <li><a className='link-hover' href="#">Blogs</a></li>
            <li><a className='link-hover' href="#">Contact Us</a></li>
          </ul>
        </div>
      )}
        </section>
        
        
    </>
  )
}

export default Navbar
