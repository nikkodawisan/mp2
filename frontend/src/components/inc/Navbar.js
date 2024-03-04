import React from 'react';
import {Link} from 'react-router-dom';
import T1 from '../images/icon4.png';

function Navbar() {
    return (
<nav className="navbar py-2 shadow navbar-expand-lg bg-body-tertiary fs-5">

  <div className="container-fluid mx-4">
  <Link to="/home" className="navbar-brand fw-bold fs-4"><img src={T1} alt="Service1" /></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarText">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/home" className="navBut nav-link active">Home</Link>
        </li>

        <li className="nav-item">
        <Link to="/service" className="navBut nav-link active">Services</Link>
        </li>

        <li className="nav-item">
        <Link to="/lounge" className="navBut nav-link active">Lounge Menu</Link>
        </li>

        <li className="nav-item">
        <Link to="/join" className="navBut nav-link active">Join Our Team</Link>
        </li>

        <li className="nav-item">
        <Link to="/contact" className="navBut nav-link active">Contact Us</Link>
        </li>
      </ul>

      <span className="navbar-text">
      <Link to="/book" className="navBut nav-link active fw-bold">Book Now!</Link>
        </span>
    </div>

  </div>
</nav>
    );
}

export default Navbar;