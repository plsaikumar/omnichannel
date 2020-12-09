import React, { useState } from "react";
import { Link,useHistory ,withRouter } from "react-router-dom";
import "./Login.css";
import {signin , authenticate} from "../../../auth/index";

const Login = () => {
 const history =useHistory()

    const [values, setValues] = useState({
        email: " ",
        password: " ",
        error: false,
        loading:false,
        redirectToRefferar:false
    })
    const {  email, password, error,loading ,redirectToRefferar} = values

    const handleChange = name => event => {


        setValues({ ...values, error: false, [name]: event.target.value })

    }

   

    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false ,loading:true });
        signin({  email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })


                } else {
                    authenticate(data,()=>{
                        setValues({ ...values,   redirectToRefferar: true })
                    })
                }
            })
    }


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    
    const showLoading = () => (
      loading && (  
          < div className="alert alert-info" >
           <h2> Loading.... </h2> 
        </div>
        )
    );

    const redirectUser =()=>{

        if(redirectToRefferar){
            return  history.push("/")
        }
    }


    return (
             <div>
                <div>

                    {showLoading()}
                    {showError()}
                    {redirectUser()}
                </div>
                    <div className="d-flex flex-column justify-content-center">
                        <form>
                            <div className="col-12 login_header">
                                <h3 >Login </h3>
                            </div>

                            <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
                                <input type="email" className="form-control" placeholder="Email" onChange={handleChange("email")} />
                            </div>
                            <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange={handleChange("password")} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12" style={{float:"right"}}>
                                <Link to="/">Forget Password ?</Link>

                            </div>
                            <div className="col-12 col-md-12 col-lg-12 text-center" >
                                <button type="reset" className="btn btn-secondary ml-4 pl-3 pr-3" >Reset</button>
                                <button type="submit" className="btn btn-warning ml-1 pl-3 pr-3"  onClick={handleSubmit}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>

      


    )
}

export default withRouter(Login);