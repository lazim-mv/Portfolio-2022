import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

function Intro() {

  const transition = {duration : 2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
          <span> Lazim Latheef</span>
          <span>
            Frontend Developer with high level of eperience in web designing <br/> and
            development, producing the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
        <a href="">
            <img src={Github} alt="Github" />
        </a>
        <a href="">
            <img src={Linkedin} alt="Linkedin" />
        </a>
        <a href="">
            <img src={Instagram} alt="Instagram" />
        </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="Boy" />
        <motion.img 
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={Glassesimoji} alt="Glassesimoji" />
        <motion.div 
        initial={{top:"-4%",left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top:'-4%', left:'68%'}}>
            <FloatingDiv 
            image={Crown}
            txt1 = 'Web'
            txt2 = 'Developer'
            />
        </motion.div>
        <motion.div 
        initial={{left:'14rem' ,top:"18rem"}}
        whileInView={{left:'3rem'}}
        transition={transition}
        style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv 
            image={thumbup}
            txt1 = 'Best Design'
            txt2 = 'Award'
            />
        </motion.div>

        {/* Blur Divs */}
        <div className="blur" style={{backgroundColor:"rgb(238 210 255"}}></div>
        <div className="blur" style={{background:"#c1f5ff", top:"17rem", width:"21rem",height:"11rem", left:"-9rem"}}></div>
      </div>
    </div>
  );
}

export default Intro;
