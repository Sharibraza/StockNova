import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav class="navbar  p-3 navbar-expand-lg border-bottom bg-light " style={{ width: "100vw" }}>
            <div class="container ">
                <Link class="navbar-brand " to="/">
                    <img src="media/images/logo.svg" style={{ width: "25%", marginLeft: "2rem" }} alt="Logo" />
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item" >
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item" >
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item" >
                            <Link class="nav-link " to="/support" >Support</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link reg" to="/signup" style={{ color: "blue" }}>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link reg" to="/login" style={{ color: "blue" }}>Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;