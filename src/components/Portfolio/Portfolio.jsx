import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerse from "../../img/ecommerce.png"
import Hoc from "../../img/hoc.png"
import MusicaApp from "../../img/musicapp.png"
import 'swiper/css'

function Portfolio() {
  return (
    <div className='portfolio'>
        {/* Heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerse} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicaApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio