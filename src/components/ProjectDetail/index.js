import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import  { projects } from '../projects.js'
import { MainContent } from "./MainContent";
import { Description } from "./Description";
import { Details } from "./Details";
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
        <div className="d-flex flex-column align-items-center">
            <div className="details-grid">
                <Link to='/' className="logo-wrapper">
                    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.6}}>
                        <h3 className='f-meaculpa logo'>N</h3>
                    </m.div>
                </Link>
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
            <footer>
                <div className="toTop">
                    <p>top</p>
                </div>
                <h5 className="text-center f-prompt fw-light">Monineath Heng<br/>© 2022</h5>
            </footer>
        </div>
    )
}