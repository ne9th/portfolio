import React from 'react';
import { Nav } from '../Nav';
import { Footer } from '../Footer';
import images from './images.json';
import { motion as m } from 'framer-motion';

export const Hobbies = () => {

  return (
    <div>
        <Nav/>
        <div className="hobbies-title mt-5 pt-5">
            <h1 className="f-syncopate fw-bolder text-center">Hobbies</h1>
        </div>
        <m.div className="carousel-wrapper">
            <m.div className='inner-carousel'>
                {images.map((img) => 
                    <m.div className='hobby-item'>
                        <img src={img.src} alt={img.title}/>
                    </m.div>
                )}
            </m.div>
        </m.div>
        <Footer/>
    </div>
  )
}
