import React, { useRef } from 'react';
import { ScrollingElements } from './ScrollingElements';
import { HomeAbout } from './HomeAbout';
import { Footer } from '../Footer'
import { Nav } from '../Nav';
import {motion as m} from 'framer-motion'

export const LandingPage = () => {

    return(
        <div>
            <section>
                <m.div initial={{opacity:0}} animate={{opacity:1}} 
                transition={{duration: 0.8}}>
                    <h3 className='f-meaculpa logo'>N</h3>
                    {<Nav/>}
                </m.div>
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
                <HomeAbout/>
            </section>
            <footer>
                <Footer/>
            </footer>
                
        </div>
    )
}