import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

 function Navbar(props) {
  
  
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.item}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"></a>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to='/Home' >Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to='/about'>AboutUs</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">{props.action}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault " onClick={props.oggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">green mode</label>
 </div> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault " onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark mode</label>
 </div>
  
    </div>
  </div>
  
</nav>
    </>
  )
}

Navbar.propTypes = {
  item:PropTypes.string.isRequired,
  actioon:PropTypes.string
 
  

}
Navbar.defaultProps={
  title:"hello",
  actioon:"world"
 
};
export default Navbar


