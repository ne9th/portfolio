import React from 'react';

export const Details = ({project}) => {

  return (
    <>
      <img src={project.details_img} alt={`${project.title}'s detailed images`}/>
    </>
  )
}
