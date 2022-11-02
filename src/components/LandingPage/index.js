import React, { useRef } from 'react';
import { ScrollingElements } from './ScrollingElements';
import { About } from './About';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import {motion as m, useScroll, useTransform} from 'framer-motion';

export const LandingPage = () => {

    return(
        <div>
            <section>
                <div>
                    {<Nav/>}
                </div>
                <div className="projects-bg d-flex justify-content-center align-items-center">
                    <h1>
                        <span id='n'>n</span>
                        <span className='cursive'>e</span>
                        <span className='reduce-kerning'>a</span>
                        t
                        <span className='cursive'>h</span>
                    </h1>
                </div>
                <ScrollingElements/>
            </section>

            <section>
                <div className='d-flex flex-column home-about align-items-center justify-content-center'
                data-aos="fade-up" data-aos-duration="1000"
                data-aos-anchor-placement="bottom bottom">
                    <About/> 
                    <Link to="/aboutme">
                        <div className="secondary-btn-container">
                            <h3 className='f-pinyon secondary-btn m-0'>Read More</h3>
                        </div>
                    </Link>  
                </div>
            </section>
            <footer>
                <h4 className='f-syncopate fw-bold text-center'>Monineath Heng</h4>
            </footer>
                
        </div>
    )
}