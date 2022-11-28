import React, { useRef } from 'react';
import { projects } from '../projects.js';
import Element from './Element';
import {motion as m} from 'framer-motion';


export const ScrollingElements = () => {

    return(
        <div className='projects'>
            <m.div initial={{opacity:0}} animate={{opacity:1}} 
            transition={{duration:0.8}}
            className="neath-header text-center f-prompt">
                <h3>Designer + Developer</h3>
            </m.div>
            {projects.map((project) => <Element project={project}/>)}
        </div> 
    )
}