import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../../assets/slider/slider1.webp"
import slider2 from "../../assets/slider/slider2.webp"
import slider3 from "../../assets/slider/slider3.webp"
import { Link } from 'react-router-dom';

const Carousal = () => {
    return (
        <Link to='/shop'>
            <div className='z-[-1] relative'>
                <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showStatus={true} showIndicators={false} stopOnHover={false}>
                    <div>
                        <img src={slider1} alt='images' />
                    </div>
                    <div>
                        <img src={slider2} alt='images' />
                    </div>
                    <div>
                        <img src={slider3} alt='images' />
                    </div>
                </Carousel>
            </div>
        </Link>
    )
}

export default Carousal