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