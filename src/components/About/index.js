import React, { useRef } from 'react';
import profilePic from '../../images/neath.webp';
import infoBg from '../../images/paper.webp'
import { MyInfo } from './MyInfo';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { motion as m, useScroll, useTransform } from 'framer-motion';

export const About = () => {
    let ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const scrollPos = useScroll().scrollYProgress;
    const y = useTransform(scrollYProgress, [0,1], ["0%", "250%"]);
    const x1 = useTransform(scrollPos, [0,1], ["0%", "300%"]);
    const x2 = useTransform(scrollPos, [0,1], ["0%", "-300%"]);
    const opa = useTransform(scrollPos, [0,0.5], ["100%", "0%"]);

  return (
    <m.div ref={ref} 
    initial={{opacity: 0}} 
    animate={{opacity:1}} 
    transition={{
        duration: 0.8
    }}
    className='about-page'>

        {/*-------my image and name-------*/}
        <m.div style={{y}} className="img-name">
            <m.div style={{x:x1, opacity:opa}} className='first-name'>
                <h1 className='f-syncopate'>moni</h1>
                <h2 className='f-pinyon'>neath</h2>
            </m.div>
            <div className='neath-img'>
                <img src={profilePic} alt="neath"/>
            </div>
            <m.div style={{x: x2, opacity:opa}} className='last-name'>
                <h1 className='f-syncopate'>heng</h1>
                <h5 className='f-prompt'>(she/her)</h5>
            </m.div>
        </m.div>

        <div className='position-relative'>
        {<Nav/>}
        {/*-------a little about me section-------*/}
        <div className="about-neath">
            <img src={infoBg} alt="paper background"/>
            <div className="info">
                {<MyInfo/>}
                {<Footer/>}
            </div>
        </div>

        </div>
        
        
        
    </m.div>
  )
}
