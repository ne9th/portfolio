import React from 'react'

export const Nav = () => {
  return (
    <div className="nav-header">
        <div className="logo">
            <h3 className='f-pinyon'>N</h3>
        </div>
        <div className="hanging-nav">
            <div className="about-nav">
                {/* line */}
                <h5>ABOUT</h5>
            </div>
            <div className="hobby-nav">
                {/* line */}
                <h5>HOBBY</h5>
            </div>
        </div>
    </div>
  )
}
