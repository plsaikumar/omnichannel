import React from "react"
import SignUp from "../Forms/SignUp/SignUp";
import Login from "../Forms/Login/Login"
const Forms = () => {
    return (
        <div className="container">
            <div className="row m-4 ">
                <div className="col-12 col-md-6 col-lg-6 login-signup">
                    <SignUp />
                </div>
                <div className="col-12 col-md-6 col-lg-6 login-signup">
                    <Login />
                </div>
            </div>
        </div>
    )
}
export default Forms;