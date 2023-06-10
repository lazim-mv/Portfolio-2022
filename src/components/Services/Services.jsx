import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Galsses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import {motion} from 'framer-motion'

function Services() {

  const transition = {duration:1,type:'spring'}

  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit amet
          consectetur adipisicing elit.
          <br />
          Neque dicta a porro, minima eos velit?
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div 
        whileInView={{left:'25rem'}}
        initial={{left:'25%'}}
        transition={transition}
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail={"Figma, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Galsses}
            heading="Developer"
            detail={"Html, Css, Javascript, Node, Express"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading="Database"
            detail={"MySQL,MongoDB,Microsoft SQL Server"}
          />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
}

export default Services;
