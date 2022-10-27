import React from 'react';
import { ScrollingElements } from './ScrollingElements';
import { About } from './About';

export const LandingPage = () => {
    
    return(
        <div>
            <section>
                <div className="projects-bg d-flex justify-content-center align-items-center">
                    <h1>neath</h1>
                </div>
                <div className='projects'>
                    <ScrollingElements/>
                </div>
            </section>
            <footer>
                <div style={{height: '200px'}}></div>
                <About/>    
                <div style={{height: '600px'}}></div>
            </footer>
        </div>
    )
}