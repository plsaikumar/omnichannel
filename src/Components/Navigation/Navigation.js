import React, { useEffect } from "react";
import "./Navigation.css"
import { Link, useHistory, withRouter } from "react-router-dom"
import { signout, isAuthenticated } from "../../auth/index"
import {itemTotal} from "../../core/cartHelper"


const Navigation = ({history}) => {


    const isActive = (history, path) => {
        if (history.location.pathname === path) {
            return { color: "#ff9900" }
        } else {
            return { color: "#000000" }
        }
    }
   
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <Link className="navbar-brand" to="/"> <img className="navbar_logo" alt="omnichannel" src="https://www.freelogodesign.org/file/app/client/thumb/3b951805-80f2-4474-b21c-114cac7ef88b_200x200.png?1607154050065" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
            {/*                 <div className="nav-item">

                            <Link className="nav-link active" id="navItem1" style={isActive(history, "/home")} to="/home">
                                Home
                            </Link>
                            </div> */}
                            <div className="nav-item">

                                <Link className="nav-link active" id="navItem1" style={isActive(history, "/homepage")} to="/homepage">
                                    Home
                                </Link>
                            </div>
                            <div className="nav-item">

                                <Link className="nav-link active" id="navItem1" style={isActive(history, "/cart")} to="/cart">
                                <i class="fas fa-shopping-cart pr-2"></i>
                                    <sup>
                                        <span>{itemTotal()}</span>
                                    </sup>
                                </Link>
                            </div>
                            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                    <div className="nav-item">
                                    <Link className="nav-link"  to="/user/dashboard" style={isActive(history, "/user/dashboard")}>
                                        Dashboard
                                    </Link>
                                </div>
                            )}
                                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <div className="nav-item">
                                    <Link className="nav-link"  to="/admin/dashboard" style={isActive(history, "/admin/dashboard")}>
                                        Dashboard
                                    </Link>
                                </div>
                            )}

                            {!isAuthenticated() && (
                                <div>
                                    <Link className="nav-link pl-2 pr-2 bg-warning" to="/login-signup" id="navItem4">Login & Signup</Link>

                                </div>
                            )}

                       

                            {isAuthenticated() && (

                                <div>
                                    <p className="nav-link active pl-2 pr-2 bg-warning" id="navItem4" style={{ cursor: "pointer" }} onClick={() => signout(() => {

                                        history.push('/')

                                    })}>SignOut
                                    </p>

                                </div>

                            )}



                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}

export default withRouter(Navigation)