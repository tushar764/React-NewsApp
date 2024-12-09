import React from 'react';
import { Link } from "react-router-dom";  // Correct import for Link
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar=()=>{
 
    return (
      <nav className="navbar  fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <link className="navbar-brand" href="#"></link> {/* Use href for non-Router links */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Homefaltu</Link> Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link> {/* Corrected Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link> {/* Corrected Link */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}


export default Navbar;
