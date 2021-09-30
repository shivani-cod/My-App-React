import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';



export default function Navbar(props) {
    return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>
      <div class="mx-3">
  <label for="formGroupExampleInput" className="form-label" style={{color: props.mode === 'light' ? '#564102':'white'}}>Modes to Enable</label>
  </div>
     
      <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark':'light'}`}>
      <input id="btn2" className="toggle-round  toggle-round-blue mx-2" type="checkbox" onClick={props.toggleMode}  />
<label for="btn2"></label>
  </div>
  
  <div className="mx-2">
  <input id="cb_id" className="toggle-round  toggle-round-green " type="checkbox" onClick={props.greenMode}  />
<label for="cb_id"></label>
 </div>
 <div className="mx-2">
  <input id="btn" className="toggle-round  toggle-round-yellow mx-2 " type="checkbox" onClick={props.yellowMode}  ></input>
<label for="btn"></label>
 </div>
    </div>
  </div>
</nav>
        
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string
}

Navbar.defaultProps ={
    title:'set title',
    aboutText:'About Us'
};