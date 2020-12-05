import React from "react"
import "./Categories.css"
import {Link} from "react-router-dom"
const Categories = ()=>{

    return(
        
    <div className="explore-menu-section pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="menu-section-heading">Products</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="shadow menu-item-card p-3 mb-3" >
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2017/01/IMG_8877-2.jpg" alt="birthday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Birthday Gifts</h1>
                    <Link to="" className="menu-item-link">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
          
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/01/IMG_8587.jpg" alt="decorative" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Decorative Gifts</h1>
                    <Link className="menu-item-link" to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/10/IMG_0926.jpg" alt="diwali" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Diwali</h1>
                    <Link className="menu-item-link" to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/12/Tb-min-5.jpg" alt="christmas" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Christmas Gifts</h1>
                    <Link className="menu-item-link"  to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/06/optimized-7hpr-1.jpg"  alt="fathersday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Father's Day Gifts</h1>
                    <Link className="menu-item-link"  to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/10/IMG_5625.jpg" alt="mothersday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Mother's Day Gifts</h1>
                    <Link className="menu-item-link" to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
          
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/01/Untitled-design-40-3.jpg" alt="friednshipday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Friendship Day Gifts</h1>
                    <Link className="menu-item-link"  to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="shadow menu-item-card p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2017/07/2-1.jpg" alt="anniversaryday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Anniversary Gifts</h1>
                    <Link className="menu-item-link" to="#">
                        View All
                        <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

    )

}

export default Categories;