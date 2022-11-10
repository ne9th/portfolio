import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import  { projects } from '../projects.js'
import { MainContent } from "./MainContent";
import { Description } from "./Description";
import { Details } from "./Details";

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
                <Link to='/'>
                    <div className="neath-logo f-syncopate">
                        <h4>neath</h4>
                    </div>
                </Link>
                <div className="mainContent w-100">
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