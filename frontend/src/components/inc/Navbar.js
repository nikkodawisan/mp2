import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
<nav className="navbar py-4 shadow navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mx-4">
    <Link to="/home" className="navbar-brand fw-bold">Candy Vault Salon & Spa</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarText">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/home" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/service" className="nav-link active">Services</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link active">Contact</Link>
        </li>
        <li className="nav-item">
        <Link to="/book" className="nav-link active">Book Now</Link>
        </li>
      </ul>
      
      <span className="navbar-text">
        <Link to="/signIn" className="nav-link active">Sign In</Link>
      </span>

    </div>

  </div>
</nav>
    );
}

export default Navbar;