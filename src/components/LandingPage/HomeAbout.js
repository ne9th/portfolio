import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import {motion as m} from 'framer-motion';

export const HomeAbout = () => {

    let ref = useRef();

    return(
        <m.div 
        initial={{y: 100, opacity: 0}}
        whileInView={{ y: 0, opacity: 1, 
            transition: {
                duration: 1
            }
        }}
        viewport={{amount: 0.1}}
        
        className='home-about d-flex flex-column align-items-center justify-content-center'>
            <div ref = {ref} className="brief-about text-center f-prompt  d-flex align-items-center justify-content-center">
                <p>Hi! I'm Monineath Heng. I usually go by Neath! I'm a web developer, UX/UI designer, and graphic designer. I recently graduated with a BS in Computer Science and Design from Northeastern University. I have always been a creative, but it wasn't until college when I learned about the intersection of tech and design. Since then, creative coding has become my passion.</p>
            </div>
            <Link to="/about">
                <div className="secondary-btn-container">
                    <h3 className='f-pinyon secondary-btn m-0'>More About Me!</h3>
                </div>
            </Link>    
        </m.div>
    )
}