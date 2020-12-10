import React from "react";
import "./Navigation.css"
import { Link, useHistory, withRouter } from "react-router-dom"
import { signout, isAuthenticated } from "../../auth/index"



const Navigation = () => {

    const history = useHistory()
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
                            <Link className="nav-link active" id="navItem1" to="/home">
                                Home
                        <span className="sr-only">(current)</span>
                            </Link>
                            <Link to="/shoppingCart">
                            <span className="cart">
                                <svg  width="1.5em" height="1.5em" viewBox="0 0 16 16" class="sprite sprite-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </span>
                            </Link>

                            {!isAuthenticated() && (
                                <div>
                                    <Link className="nav-link pl-2 pr-2 bg-warning" to="/login-signup" id="navItem4">Login & Signup</Link>

                                </div>
                            )}

                            {isAuthenticated() && (
                                <div>
                                    <p className="nav-link pl-2 pr-2 ">
                                        Welcome {JSON.parse(localStorage.getItem("jwt")).user.name}
                                    </p>
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