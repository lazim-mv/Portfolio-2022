import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {motion} from 'framer-motion'

function Works() {
  return (
    <div className="works">
      {/* Left side */}
      <div className="awesome">
        <span>Works for all these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit amet dicta a porro
          <br style={{padding:"5px 0px"}}/>
          Neque dicta a porro, minima eos velit?
          <br style={{padding:"5px 0px"}}/>
          Neque dicta a porro, minima eos velit?
          <br style={{padding:"5px 0px"}}/>
          Lorem ipsum dolor sit amet consectetur
        </span>
          <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{rotate:360}}
          whileInView={{rotate:0}}
          viewport={{margin:"-40px"}}
          transition={{duration:5.5,type:'spring'}}
         className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="Upwork" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="Fiverr" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="Amazon" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="Shopify" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="Facebook" />
            </div>
        </motion.div>
        {/* Background blue yellow Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
