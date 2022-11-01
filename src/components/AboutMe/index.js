import React from 'react';
import profilePic from '../../images/neath.png'
import { MyInfo } from './MyInfo';
import { Footer } from '../Footer';
import { Nav } from '../Nav';


export const AboutMe = () => {
  return (
    <div className='about-page'>
        {<Nav/>}

        {/*-------my image and name-------*/}
        <div className="img-name">
            <img src={profilePic} alt="neath"/>
            <h1 className='f-syncopate'>moni<span className='f-pinyon'>neath</span><br/>heng</h1>
            <h5 className='f-prompt'>(she/her)</h5>
        </div>
        
        {/*-------a little about me section-------*/}
        <div className="about-neath">
            {<MyInfo/>}
            {<Footer/>}
        </div>
        
    </div>
  )
}
