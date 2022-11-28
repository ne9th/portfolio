import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import  { projects } from '../projects.js'
import { MainContent } from "./MainContent";
import { Description } from "./Description";
import { Details } from "./Details";
import { Footer } from "../Footer"
import {motion as m} from 'framer-motion';

export const ProjectDetail = () => {

    let { id } = useParams();

    const [project, setProject] = useState({});

    useEffect(() => {
        const project = projects.find((_project) => _project.id === id);   
        if (project) {
          setProject(project);
        }
      }, [id]);

    return(
        <m.div 
        initial={{opacity: 0}} animate={{opacity:1}} 
        transition={{ duration: 0.5}}>
            <Link to='/' className="logo-wrapper">
                <h3 className='f-meaculpa logo'>N</h3>
            </Link>
            <div className="d-flex flex-column align-items-center">
                <div className="details-grid">
                    <div className="mainContent">
                        {<MainContent project={project}/>}
                    </div>
                    <div className="description">
                        {<Description project={project}/>}
                    </div>
                </div>
                <div className="details">
                    {<Details project={project}/>}
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </m.div>
    )
}