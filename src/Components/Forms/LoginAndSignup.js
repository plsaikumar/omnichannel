import React from "react";
import { Link } from "react-router-dom";
import "./LoginAndSignup.css"
const LoginAndSignup= () => {
    return (
        <form>
            <div className="container">
                <div className="row m-4 ">
                    <div className="col-12 col-md-6 col-lg-6 login-signup">     
                    <div className="col-12 signup_header">
                         <h3 >Sign Up</h3>
                    </div> 
                    <div className="col-12 col-md-8 col-lg-8 form-group">
                        <input type="text" className="form-control" placeholder="Name" id="email" />
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 form-group">
                        <input type="email" className="form-control" placeholder="Email" id="email" />
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 form-group">
                        <input type="password" className="form-control" placeholder="Password" id="email" />
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password" id="email" />
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                    <button type="reset" className="btn btn-secondary ml-5 " >Reset</button>
                    <button type="submit" className="btn btn-warning ml-3" >SignUp</button>
                    </div>

                </div>


                <div className="col-12 col-md-6 col-lg-6 pt-5"> 
                <div className="d-flex flex-column justify-content-center">   
                    <div className="col-12 login_header">
                         <h3 >Login </h3>
                    </div> 
                   
                    <div className="col-12 col-md-8 col-lg-8 form-group">
                        <input type="email" className="form-control" placeholder="Email" id="email" />
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 form-group">
                        <input type="password" className="form-control" placeholder="Password" id="email" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-12" style={{float:"right"}}>
                    <Link>Forget Password ?</Link>
                    <button type="reset" className="btn btn-secondary ml-4 pl-3 pr-3" >Reset</button>
                    <button type="submit" className="btn btn-warning ml-1 pl-3 pr-3" >Login</button>
                    </div>
                    </div> 
                </div>

                </div>
            </div>
        </form>


    )
}

export default LoginAndSignup;