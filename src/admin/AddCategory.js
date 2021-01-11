import React ,{useState} from "react";
import Layout from "../Components/Layout"
import { isAuthenticated } from "../auth"
import {createCategory} from "./apiAdmin"
import {Link} from "react-router-dom"

const AddCategory = () => {

    const [name,setName] = useState("")
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const {user , token} = isAuthenticated()

    const handleChange =(e) =>{
            setError("")
            setName(e.target.value)
    }
    const clickSubmit =(e)=>{
            e.preventDefault()
            setError("")
            setSuccess(false)
            console.log(user)
            createCategory(user.id,token,{name})
            .then(data=>{
                if(data.error){
                    setError(data.error)
                }
                else{
                    setError("");
                    setSuccess(true)
                }
            })
    }


    const showSuccess = () =>{
        if(success){
            return <h3 className="text-success">Category created</h3>
        }
    }
    const showError = () =>{
        if(error){
            return <h3 className="text-danger">Category already exists. It should be unique</h3>
        }
    }

    const goBack =()=>(
        <div className="mt-5 mb-2">
            <Link to="/admin/dashboard" className="text-warning">
                <button className="btn btn-secondary">
                Back 
                </button>
            </Link>
        </div>
    )


    const newCategoryForm =()=>(
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={name} autoFocus required/>
            </div>
            <button className="btn btn-primary">Create Category</button>
        </form>
    )
    return (
        <Layout title="Add a new Category"  className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {showError()}
                        {showSuccess()}
                        {newCategoryForm()}
                        {goBack()}
                    </div>
                </div>
        </Layout>
    )
}

export default AddCategory