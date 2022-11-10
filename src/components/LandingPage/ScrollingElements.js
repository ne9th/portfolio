import React, { useRef } from 'react';
import { projects } from '../projects.js';
import Element from './Element';


export const ScrollingElements = () => {

    return(
        <div className='projects'>
            <div>
                        <h3 className='f-meaculpa logo'>N</h3>
                    </div>
            <div className="neath-header text-center f-prompt">
                <h3>Designer + Developer</h3>
            </div>
            {projects.map((project) => <Element project={project}/>)}
        </div> 
    )
}