import React , {useState} from "react";
import { Link } from "react-router-dom";
import "./LoginAndSignup.css"
const LoginAndSignup = () => {


    const [values , setValues] = useState({
        name:" ",
        email:" ",
        password :" ",
        confirmPassword:" ",
        error:" ",
        success:false
    })

    const handleChange = name => event =>{

        setValues({...values , error:false , [name]:event.target.value})

    }
    const handleSubmit =(event) =>{
        event.preventDefault()
        fetch("http://localhost:8000/api/signup",{
            method:"POST",
            headers:{
                Accept :"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name:values.name,email:values.email,password:values.password,confirmPassword:values.confirmPassword})
        })
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log("error")
        })

    }

    return (
        <div className="container">
            <div className="row m-4 ">
                <div className="col-12 col-md-6 col-lg-6 login-signup">
                    <form>
                        <div className="col-12 signup_header">
                            <h3 >Sign Up</h3>
                        </div>
                        <div className="col-12 col-md-8 col-lg-8 form-group">
                            <input type="text" className="form-control" placeholder="Name" id="name" onChange={handleChange("name")} />
                        </div>
                        <div className="col-12 col-md-8 col-lg-8 form-group">
                            <input type="email" className="form-control" placeholder="Email" id="email" onChange={handleChange("email")} />
                        </div>
                        <div className="col-12 col-md-8 col-lg-8 form-group">
                            <input type="password" className="form-control" placeholder="Password" id="password" onChange={handleChange("password")}/>
                        </div>
                        <div className="col-12 col-md-8 col-lg-8 form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password" id="confirmPassword" onChange={handleChange("confirmPassword")}/>
                        </div>
                        <div className="col-12 col-md-8 col-lg-8">
                            <button type="reset" className="btn btn-secondary ml-5 " >Reset</button>
                            <button type="submit" className="btn btn-warning ml-3" onClick={handleSubmit} >SignUp</button>
                        </div>
                    </form>
                </div>


                <div className="col-12 col-md-6 col-lg-6 pt-5">
                    <div className="d-flex flex-column justify-content-center">
                        <form>
                            <div className="col-12 login_header">
                                <h3 >Login </h3>
                            </div>

                            <div className="col-12 col-md-8 col-lg-8 form-group">
                                <input type="email" className="form-control" placeholder="Email" id="email" />
                            </div>
                            <div className="col-12 col-md-8 col-lg-8 form-group">
                                <input type="password" className="form-control" placeholder="Password" id="email" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-12" style={{ float: "right" }}>
                                <Link>Forget Password ?</Link>
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