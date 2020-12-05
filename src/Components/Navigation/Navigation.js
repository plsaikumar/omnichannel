import React from "react";
import "./Navigation.css"
import { Link } from "react-router-dom"
const Navigation = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <Link className="navbar-brand" to="/"> <span className="text-warning">Omni Channel</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link active" id="navItem1" to="/home">
                                Home
                        <span className="sr-only">(current)</span>
                            </Link>
                            <Link className="nav-link" to="/products" id="navItem2">Products</Link>
                            <Link className="nav-link" to="/contactus" id="navItem3">Contact Us</Link>
                            <Link className="nav-link pl-2 pr-2 bg-warning" to="/login-signup" id="navItem4">Login & Signup</Link>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}

export default Navigation