import React from 'react';
import { Parallax } from 'react-parallax';
import "../Styling/Header.css"

const Header = () => {
  return (
    <Parallax
      blur={0}
      bgImage={'https://s3-alpha-sig.figma.com/img/df6d/0355/7aa499c9d84b38e54234229cea8660ce?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhBKdSkl1sz23QwKerm6Ada01Rlj86QO9xfRAE90TqpQ0s6K-FE1vc8WwDn3SlNkl1fpKFCzIH4oGwCRqBua9DCCd4yAzQ1Gl4i-HZwnKHClIUAFPRSpBDcUc-HSVAmFhHdUyI2W8GdG4c8YtxlFphw8dlTyO4rIIb2VQvkcFfw1TLrQOE3tbN2Ta6Hn7jLLP3ZTpRpjvE9ZUiJVwMbuCfyMpG82agXPzrCk5AxRMoTkl4EL2MO4ibeAoA2h7LvAHZj3-jAcgkyqeYCehqwLvsCKUyoWfjJ8I-LkKH8~ls3-R97NJw7UESwpzW0xy0j-G4zrA0cdOszHU5Xc-fxcxA__'} // Path to your background image
      bgImageAlt="background"
      strength={900}
      className="parallax-container">

        <div className="content">
                <div className='header-title'>
                    Serving The Entire Chemical Supply Chain's Distribution Business
                </div>

                <div className='header-para'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laudantium alias numquam commodi iure unde beatae officiis ratione optio aliquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at voluptatem dicta fugiat quae consequatur sunt provident et asperiores beatae.
                </div>

                <div className='header-btn'>
                    <button className='header-btn-enquiry'>Place Enquiry Now</button>
                </div>
        </div>
      
    </Parallax>
  );
};

export default Header;