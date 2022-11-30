import React from 'react';
import { Link } from 'react-router-dom';

// Details Header + Main Image
export const MainContent = ({project}) => {

  return (
    <>
      <div className='d-flex justify-content-between details-header text-center'>
        {(project.prev_project) ? 
          <Link to={project.prev_project}>
            <div className="prev"></div>
          </Link> : <div className="prev inactive"></div>}
        <h2 className='f-syncopate fw-bold m-0'>{project.title}</h2>
        {(project.next_project) ? 
          <Link to={project.next_project}>
            <div className="next"></div>
          </Link> : <div className="next inactive"></div>}
      </div>
      <h4 className='f-prompt fw-light text-center'>{project.date}</h4>
      <div className="d-flex justify-content-center main-img">
        <img src={project.main_img} alt={project.title}/>
      </div>
    </>
    
  )
}
