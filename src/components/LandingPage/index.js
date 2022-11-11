import React, { useRef } from 'react';
import { ScrollingElements } from './ScrollingElements';
import { HomeAbout } from './HomeAbout';
import { Nav } from '../Nav';

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
                <HomeAbout/>
            </section>
            <footer>
                <h4 className='f-syncopate fw-bold text-center'>Monineath Heng</h4>
            </footer>
                
        </div>
    )
}