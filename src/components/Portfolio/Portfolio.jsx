import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import vid1 from "../../video/nexwave.mp4";
import vid2 from "../../video/Procube.mp4";
import vid3 from "../../video/linkedIn.mp4";
import Hoc from "../../img/hoc.png";
import "swiper/css";

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <video
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={vid1} type="video/mp4" />
          </video>
          <a className="clickHere" href="https://www.nexwave.cx" target="_blank" rel="noopener noreferrer">Click Here</a>
        </SwiperSlide>
        <SwiperSlide>
          <video
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={vid2} type="video/mp4" />
          </video>
          <a className="clickHere" href="https://procube.cx/" target="_blank" rel="noopener noreferrer">Click Here</a>
        </SwiperSlide>
        <SwiperSlide>
          <video
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={vid3} type="video/mp4" />
          </video>
          <a className="clickHere" href="https://linkedin-clone-react-23173.web.app/" target="_blank" rel="noopener noreferrer">Click Here</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
