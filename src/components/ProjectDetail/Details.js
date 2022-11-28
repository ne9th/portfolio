import React from 'react';

export const Details = ({project}) => {

  return (
    <>
      {(project.details_img) ? 
        <div className='details-div d-flex align-items-center'>
          {(project.link) ? 
            <div className="details-button secondary-btn m-0">
              <a href={project.link} target='_blank' rel="noreferrer">
                <h5 className='f-pinyon m-0 text-center'>Demo</h5>
              </a>
            </div>
          : <></>}
          <img src={project.details_img} alt={`${project.title}'s detailed images`}/>
        </div> : <></>
      }
      {(project.additional_img) ? 
        <img src={project.additional_img} alt={`${project.title}'s additional image`} id="mfa_gif"/> : <></>}
    </>
  )
}
