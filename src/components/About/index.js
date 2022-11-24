import React, { useRef } from 'react';
import profilePic from '../../images/neath.png';
import infoBg from '../../images/paper.png'
import { MyInfo } from './MyInfo';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { motion as m, useScroll, useTransform } from 'framer-motion';

export const About = () => {
    let ref = useRef();
    let {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    let y = useTransform(scrollYProgress, [0,1], ["0%", "250%"]);

  return (
    <div ref={ref} className='about-page'>

        {/*-------my image and name-------*/}
        <m.div style={{y}} className="img-name">
            <div className='first-name'>
                <h1 className='f-syncopate'>moni</h1>
                <h2 className='f-pinyon'>neath</h2>
            </div>
            <div className='neath-img'>
                <img src={profilePic} alt="neath"/>
            </div>
            <div className='last-name'>
                <h1 className='f-syncopate'>heng</h1>
                <h5 className='f-prompt'>(she/her)</h5>
            </div>
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
        
        
        
    </div>
  )
}
