import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
  
const Navbar = (props) => {
  return (
    <>
    <nav className={`navbar mb-5 navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>       
      </ul>
      <div className="form-check form-switch">
        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>

</>
  )
}
export default Navbar;

Navbar.propTypes={
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title:"My title"
};