import React from 'react'
import { Parallax } from 'react-parallax';
import "../Styling/Distribution.css"
import img1 from "../Assets/dis-1.png";
import img2 from "../Assets/dis-2.png";
import img3 from "../Assets/dis-3.png";
import img4 from "../Assets/dis-4.png";
import img5 from "../Assets/arrow-1.png"

const Distribution = () => {
  return (
    <>
        <Parallax
            blur={0}
            bgImage={'https://s3-alpha-sig.figma.com/img/7a08/4271/d600b6febad07f8e6cc9979aee7835ff?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KtHrwn67KBT1mpHPupC8ndIAhYkwPpJs9RE69~sZUbDOq6FpxDZqz5-VLXA6qQOuD~J1IVWt5CcDoq7AXQwEINLwMMlYxlAOkexagt83HPF4z2T1GyVacYCciT~kPbMMe~4sRuZX4aUflHcXmnQrM53-5FEF8hKHqW25oqtxLeZiMrV3oeZ-VchOHAwjQNlL096mKLEkA2242APPYUN9Hqijq3Wz~3ZcT~QCiyR54smxM~ga3kLLkERQF1VtBHyOBHTtw8Wc8SO7CgmA6lPlRJgCf0kP9WvIazznucT77hu3K3X1pWu5kok0AS0AOceXKVpKJ8lSHQ9vMmTuYLN3uA__'} // Path to your background image
            bgImageAlt="background"
            strength={900}
            className="parallax-container">
                <div className="content">
                        <div className='header-title'>
                            Distribution Of Products Overseas
                        </div>

                        <div className='header-para'>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>

                        <div className='header-btn'>
                            <button className='header-btn-enquiry'>Discover More</button>
                        </div>
                        

                        <div className='dis-flex'>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img1} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Explosure Your Requirements
                                </div>
                            </div>
                            <div className='dis-flex-2'>
                                <img className='dis-flex-2-img' src={img5} alt="img5" />
                            </div>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img2} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Arranging Your Requirements 
                                </div>
                            </div>
                            <div className='dis-flex-2'>
                                <img className='dis-flex-2-img' src={img5} alt="img5" />
                            </div>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img3} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Arrange Logistics For Product
                                </div>
                            </div>
                            <div className='dis-flex-2'>
                                <img className='dis-flex-2-img' src={img5} alt="img5" />
                            </div>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img4} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Adapt and Promote Through Shipment
                                </div>
                            </div>
                        </div>
                </div>
      
        </Parallax>
    </>
  )
}

export default Distribution
