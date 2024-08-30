import React from 'react'
import { Parallax } from 'react-parallax';
import "../Styling/Header.css"
const Distributors = () => {
  return (
    <Parallax
    blur={0}
    bgImage={'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg'} // Path to your background image
    bgImageAlt="background"
    strength={900}
    className="parallax-container">

      <div className="content">
              <div className='header-title'>
                  Distributors And Marketing Agents
              </div>

              <div className='header-para'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laudantium alias numquam commodi iure unde beatae officiis ratione optio aliquam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at voluptatem dicta fugiat quae consequatur sunt provident et asperiores beatae.
              </div>

              <div className='header-btn'>
                  <button className='header-btn-enquiry'>Check More</button>
              </div>
      </div>
    
  </Parallax>
  )
}

export default Distributors
