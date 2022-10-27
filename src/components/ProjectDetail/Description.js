import React from 'react'

export const Description = ({project}) => {
  return (
    <div className='des-grid'>
      <div className="project-type">
        <h2 className='f-syncopate fw-bold'>Project Type</h2>
        <h4 className='f-prompt fw-light'>{project.type}</h4>
      </div>
      <div className="project-tools">
        <h2 className='f-syncopate fw-bold'>Tools</h2>
        <h4 className='f-prompt fw-light'>{project.tools}</h4>
      </div>
      <div className="project-des">
        <h2 className='f-syncopate fw-bold'>Description</h2>
        <h4 className='f-prompt fw-light'>{project.description}</h4>
      </div>
      <div className="project-lesson">
        <h2 className='f-syncopate fw-bold'>Main Lesson I learned</h2>
        <h4 className='f-prompt fw-light'>{project.lesson}</h4>
      </div>
    </div>
  )
}

