import React from 'react'
import { Parallax } from 'react-parallax';
import "../Styling/Header.css"
const Distributors = () => {
  return (
    <Parallax
    blur={0}
    bgImage={'https://s3-alpha-sig.figma.com/img/65ad/6e02/90d05b5de3c27e1bd7966e039dfc075a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bp2f3MGic535FYNFo6yGCrw9N-us5Z4JdtXRYmOYmf6AFbo1c8ucTV-zCZVuWnWRcnhZYER7LxImji8wOX0NPoAJxByBVSTpBGdGXtifXs2JMfsx6p5fjzYeEECDYOfrWESCwDFgCpyiGLzkNHMhJSrIP7h0xW~gRkJdqSPPpbEh6-aRqt~zIs1iEEa2rBVQzQe85U80iM23ZDWW1OEOpjxtkdP9kPq6R8XhfI8LVht2wr5ivz4L066zBR8FxpcbHnxzvts9~0xMHWTjE2WmDTxz5n1JI2BdStHNZn63gxZADPJnenaQCgqcJijaZ3MmAYqyJwNck8VESEg4-4-60w__'} // Path to your background image
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
