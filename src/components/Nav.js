import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {

  const loc = useLocation();

  console.log('pathname', loc.pathname);
    

  return (
    <div className="nav-header d-flex justify-content-between fixed-top">
        
        <Link to="/" className={`${loc.pathname === "/" ? "opacity-0 no-pointer" : ""}`}>
            <h3 className='f-meaculpa logo'>N</h3>
        </Link>
        <div className="hanging-nav d-flex text-center me-5 pe-5">
            <Link to="/aboutme" className='nav-item-wrapper d-flex flex-column align-items-center'>
                <div className='vertical-line'/>
                <div className={`nav-item ${loc.pathname === "/aboutme" ? "active" : ""}`}>
                    <h5>A<br/>B<br/>O<br/>U<br/>T</h5>
                </div>
            </Link>
            <div className='nav-item-wrapper d-flex flex-column align-items-center'>
                <div className='vertical-line'/>
                <div className={`nav-item ${loc.pathname === "/hobbies" ? "active" : ""}`}>
                    <h5>H<br/>O<br/>B<br/>B<br/>I<br/>E<br/>S</h5> 
                </div>
            </div>
        </div>
    </div>
  )
}
