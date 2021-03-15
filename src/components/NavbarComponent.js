import React from 'react';
import './css/NavbarComponent.css';

function NavbarComponent(){
    return(
        <div className = "navbar">
            <nav className = "navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className = "navbar-brand mb-0 h1">Quickfix</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className = "navbar-nav">
                            <li className="nav-item">
                                <a className = "nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className = "nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className = "nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent;