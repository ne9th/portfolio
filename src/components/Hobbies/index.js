import React, { useRef } from 'react';
import { Nav } from '../Nav';
import { Footer } from '../Footer';
import { motion as m, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';

export const Hobbies = () => {

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(45, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 7 * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <m.div
      initial={{opacity: 0}} 
      animate={{opacity:1}} 
      transition={{
          duration: 0.8
      }}
    >
        <Nav/>
        <div className="hobbies-title mt-5 pt-5">
            <h1 className="f-syncopate fw-bolder text-center">Hobbies</h1>
        </div>
        <div className='construction-wrapper d-flex align-items-center'>
          <m.div style={{x}} className="d-flex justify-content-center under-construction">
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
            <h1 className='text-center f-prompt m-0'>under construction</h1>
          </m.div>
        </div>
        <div className='caption-wrapper d-flex justify-content-center mt-4'>
          <p className='caption text-center f-prompt'>please excuse the construction! the developer (neath) has been occupied with auntie/nanny duties for the past months. your understanding is appreciated!</p> 
          {/* temporary footer */}
          <div className='hobbies-footer'>
            <h6 className='text-center f-prompt fw-light'>ⓒ 2022 Monineath Heng</h6>
          </div>
        </div>
            
        
        
    </m.div>
  )
}
