import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {motion as m, } from 'framer-motion';

export const Nav = () => {
    const ref = useRef();

    const loc = useLocation();
    console.log('pathname', loc.pathname);

    const onHover = { y:20,
        transition:{
            type:"linear",
            duration:0.3,
            ease:"backOut"
    }};

    

  return (
    <div className="nav-header d-flex justify-content-between fixed-top">
        
        <Link to="/" className={`${loc.pathname === "/" ? "opacity-0 no-pointer" : ""}`}>
            <h3 className='f-meaculpa logo logo-margin'>N</h3>
        </Link>
        <m.div 
        initial={{ y: -130}} animate={{y:-50}} 
        transition={{ 
            type:"spring",
            damping: 4, 
            duration: 1,
            ease: "easeOut"
        }}
        className="hanging-nav d-flex text-center me-5 pe-5">
            <Link to="/aboutme" >
                <m.div 
                    whileHover={onHover}
                    className='nav-item-wrapper d-flex flex-column align-items-center'>
                    <div className='vertical-line'/>
                    <div ref={ref} className={`nav-item ${loc.pathname === "/aboutme" ? "active" : ""}`}>
                        <h5>A<br/>B<br/>O<br/>U<br/>T</h5>
                    </div>
                </m.div>
            </Link>
            <Link to="/hobbies">
                <m.div 
                    whileHover={onHover} 
                    className='nav-item-wrapper d-flex flex-column align-items-center'>
                    <div className='vertical-line'/>
                    <div ref={ref} className={`nav-item ${loc.pathname === "/hobbies" ? "active" : ""}`}>
                        <h5>H<br/>O<br/>B<br/>B<br/>I<br/>E<br/>S</h5> 
                    </div>
                </m.div>
            </Link>
        </m.div>
    </div>
  )
}
