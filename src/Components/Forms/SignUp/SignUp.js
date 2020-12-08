import React, { useState } from "react";
import {useHistory ,withRouter} from "react-router-dom"
import "./SignUp.css";
import {signup} from "../../../auth/index";

const Signup = () => {

    const history = useHistory()
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

    {success &&  
        setTimeout(() => {
            history.push("/")
        }, 5000)
    }

    return (

            <div>
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

    )
}

export default withRouter(Signup);