import React from 'react';
import './style.css';

const index = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div className="container-fluid d-flex justify-content-between">
                    <h5 className="navbar-brand">Company</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="/#" data-bs-toggle="dropdown"> ABOUT </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#"> HISTORY</a></li>
                                    <li><a className="dropdown-item" href="/#"> VISION MISION </a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/#"> OUR WORK </a></li>
                            <li className="nav-item"><a className="nav-link" href="/#"> OUR TEAM </a></li>
                            <li className="nav-item"><a className="nav-link" href="/#"> CONTACT </a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default index;
