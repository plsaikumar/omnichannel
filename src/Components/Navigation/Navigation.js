import React from "react";
import "./Navigation.css"
const Navigation = () => {

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
            <a className="navbar-brand" id="nav_brand" href="#"> OmniChannel </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-link active" id="navItem1" href="#">
                        Home
                        <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link" href="#" id="navItem2">Products</a>
                    <a className="nav-link" href="#" id="navItem3">Contact Us</a>
                    <a className="nav-link" href="#" id="navItem4">Login</a>
                    <a className="nav-link " href="#" id="navItem5">SignUp</a>


                </div>
            </div>
        </div>
    </nav>
    <div className="banner-section-bg-container d-flex justify-content-center flex-column">
        
    </div> 
     </div>
    )

}

export default Navigation