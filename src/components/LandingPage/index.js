import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollingElements } from './ScrollingElements';
import { About } from './About';

export const LandingPage = () => {
    let navigate = useNavigate();
    
    return(
        <div className='main-container'>
            <section>
                <div className="projects-bg d-flex justify-content-center align-items-center">
                    <h1>neath</h1>
                </div>
                {/* <div >
                    <h1 className="text-center" >scrolling elements</h1>
                    <h1 className="text-center" >scrolling elements</h1>
                    <h1 className="text-center" >scrolling elements</h1>
                    <div style={{height: '200px'}}></div>
                    <h1 className="text-center" >scrolling elements</h1>
                    <h1 className="text-center" >scrolling elements</h1>
                    <div style={{height: '800px'}}></div>
                    <h1 className="text-center" >scrolling elements</h1>
                </div> */}
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