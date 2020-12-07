import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginAndSignup.css"
const LoginAndSignup = () => {


    const [values, setValues] = useState({
        name: " ",
        email: " ",
        password: " ",
        error: false,
        success: false
    })
    const { name, email, password, error, success } = values

    const handleChange = name => event => {

        setValues({ ...values, error: false, [name]: event.target.value })

    }

    const signup = (user) => {
        return fetch("http://localhost:8000/api/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })

                } else {
                    setValues({ ...values, name: " ", email: " ", password: " ", error: false, success: true })
                }
            })
    }


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created
            
        </div>
    );


    return (
        <div className="container">
            <div className="row m-4 ">
                <div className="col-12 col-md-6 col-lg-6 login-signup">
                    <div className="col-12">
                        {showSuccess()}
                        {showError()}
                    </div>
                    <form>
                        <div className="col-12 signup_header">
                            <h3 >Sign Up</h3>
                        </div>
                        <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
                            <input type="text" className="form-control" placeholder="Name" onChange={handleChange("name")} />
                        </div>
                        <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
                            <input type="email" className="form-control" placeholder="Email" onChange={handleChange("email")} />
                        </div>
                        <div className="col-12 col-md-9 col-lg-9  col-xl-9 form-group">
                            <input type="password" className="form-control" placeholder="Password" onChange={handleChange("password")} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 text-center" >
                                <button type="reset" className="btn btn-secondary ml-4 pl-3 pr-3" >Reset</button>
                                <button type="submit" className="btn btn-warning ml-1 pl-3 pr-3" onClick={handleSubmit}>SignUp</button>
                        </div>
                    </form>
                </div>


                <div className="col-12 col-md-6 col-lg-6 login-signup">
                    <div className="d-flex flex-column justify-content-center">
                        <form>
                            <div className="col-12 login_header">
                                <h3 >Login </h3>
                            </div>

                            <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12" style={{float:"right"}}>
                                <Link to="/">Forget Password ?</Link>

                            </div>
                            <div className="col-12 col-md-12 col-lg-12 text-center" >
                                <button type="reset" className="btn btn-secondary ml-4 pl-3 pr-3" >Reset</button>
                                <button type="submit" className="btn btn-warning ml-1 pl-3 pr-3" >Login</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default LoginAndSignup;