import React from 'react';
import projects from '../projects.json';
import { Link } from 'react-router-dom';



const projectsDiv = projects.map((project) => 

    // projects display on home page
    <Link className="home-project" to={`/${project.type_path}/${project.id}`}>
        <div > 
            {/* cover images */}
            <img src={project.cover_img} alt="" 
                data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-once="true"/>
            {/* details on hover */}
            <div className="hover-container d-flex flex-column align-items-center justify-content-center">
                <h4 className='f-syncopate'>{project.title}</h4>
                <p className='f-prompt'>{project.type}<br/>{project.date}</p>
            </div>
        </div>
    </Link>
);


export const ScrollingElements = () => {
    console.log(projectsDiv);

    return(
        <>
            <div className="neath-header text-center f-prompt">
                <h3>Designer + Developer</h3>
            </div>
            {/* <img src="https://source.unsplash.com/random/800x800" alt="" data-aos="zoom-in" data-aos-easing="ease-in-out"/> */}
            {projectsDiv}
        </> 
    )
}