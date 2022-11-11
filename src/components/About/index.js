import React from 'react';
import profilePic from '../../images/neath.png';
import infoBg from '../../images/paper.png'
import { MyInfo } from './MyInfo';
import { Footer } from '../Footer';
import { Nav } from '../Nav';


export const About = () => {
  return (
    <div className='about-page'>
        {<Nav/>}

        {/*-------my image and name-------*/}
        <div className="img-name">
            <div className='first-name'>
                <h1 className='f-syncopate'>moni</h1>
                <h2 className='f-pinyon'>neath</h2>
            </div>
            <div className='neath-img'>
                <img src={profilePic} alt="neath"/>
            </div>
            <div className='last-name'>
                <h1 className='f-syncopate'>heng</h1>
                <h5 className='f-prompt'>(she/her)</h5>
            </div>
        </div>
        
        {/*-------a little about me section-------*/}
        <div className="about-neath">
            <img src={infoBg} alt="paper background"/>
            <div className="info">
                {<MyInfo/>}
                {<Footer/>}
            </div>

        </div>
        
    </div>
  )
}
