import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projects from '../projects.json'
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
        <div className="main-container">
            <div className="details-grid">
                <Link to='/'>
                    <div className="neath-logo">
                        <h4>neath</h4>
                    </div>
                </Link>
                <div className="mainContent">
                    {<MainContent/>}
                </div>
                <div className="description">
                    {<Description/>}
                </div>
                <div className="details">
                    {<Details/>}
                </div>
                <footer>
                    Monineath Heng
                </footer>
            </div>
        </div>
    )
}