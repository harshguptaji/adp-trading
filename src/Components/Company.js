import React from 'react'
import "../Styling/Comapany.css";
import img1 from "../Assets/tech.png"
import img2 from "../Assets/arrow.png"
const Company = () => {
  return (
    <>
        <main className='company-main'>
            <section className='company-main-section'>
                <section className='company-main-section-1'>
                    <div className='comapny-main-section-1-1'>
                        <div className='comapny-main-section-1-1-title'>
                            Company History,<br/> Present and the Future
                        </div>
                        <div className='comapny-main-section-1-1-para'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                    <div className='company-main-section-1-2'>
                        <div className='company-main-section-1-2-1'>
                            <div className='company-main-section-1-2-1-title'>
                                We Started In Year 1980
                            </div>
                            <div className='company-main-section-1-2-1-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </div>
                            <div className='company-main-section-1-2-1-flex'>
                                <div className='company-main-section-1-2-1-flex-1'>Read More</div>
                                <div className='company-main-section-1-2-1-flex-2'>
                                    <img className='company-main-section-1-2-1-flex-2-img' src={img2} alt="img2" />
                                </div>
                            </div>
                        </div>
                        <div className='company-main-section-1-2-2'>
                            <img className='company-main-section-1-2-2-img' src={img1} alt="img1" />
                        </div>
                    </div>
                </section>

                <section className='company-main-section-2'>
                    <div className='company-main-section-2-1'>
                            <div className='company-main-section-1-2-1-title'>
                                Our Mission is to Provide
                                Qaulity
                            </div>
                            <div className='company-main-section-1-2-1-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </div>
                            <div className='company-main-section-1-2-1-flex'>
                                <div className='company-main-section-1-2-1-flex-1'>Read More</div>
                                <div className='company-main-section-1-2-1-flex-2'>
                                    <img className='company-main-section-1-2-1-flex-2-img' src={img2} alt="img2" />
                                </div>
                            </div>
                    </div>

                    <div className='company-main-section-2-2'>
                        <div className='company-main-section-2-2-1'>
                            <div className='company-main-section-2-2-1-title'>100 + </div>
                            <div className='company-main-section-2-2-1-para'>Different Kind of Chemical Products</div>
                        </div>
                        <div className='company-main-section-2-2-2'>
                            <div className='company-main-section-2-2-2-title'>30 + </div>
                            <div className='company-main-section-2-2-2-para'>Different Industry Chemical Supply In Area</div>
                        </div>
                        <div className='company-main-section-2-2-3'>
                            <div className='company-main-section-2-2-3-title'>5 + </div>
                            <div className='company-main-section-2-2-para'>Different Country Exporting and Importing Products</div>
                        </div>
                    </div>
                </section>

            </section>
        </main>
    </>
  )
}

export default Company
