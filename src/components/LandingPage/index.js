import React from 'react';
import { ScrollingElements } from './ScrollingElements';
import { About } from './About';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    
    return(
        <div>
            <section>
                <div className="projects-bg d-flex justify-content-center align-items-center">
                    <h1>
                        <span id='n'>n</span>
                        <span className='cursive'>e</span>
                        <span className='reduce-kerning'>a</span>
                        t
                        <span className='cursive'>h</span>
                    </h1>
                </div>
                <div className='projects'>
                    <ScrollingElements/>
                </div>
            </section>
            <section>
                <div className='d-flex flex-column home-about align-items-center justify-content-center'>
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