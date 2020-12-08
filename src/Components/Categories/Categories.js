import React from "react"
import "./Categories.css"


const Categories = ()=>{
<<<<<<< HEAD
    const categoryList=[
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2017/01/IMG_8877-2.jpg",
            title:"Birthday Gift",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2018/07/IMG_3839-1.jpg",
            title:"Decorative Gift",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/10/IMG_0926.jpg",
            title:"Diwali",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/12/Tb-min-5.jpg",
            title:"Christmas Gift",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/06/optimized-7hpr-1.jpg",
            title:"Father's Day Gift",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/10/IMG_5625.jpg",
            title:"Mother's Day Gift",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/01/Untitled-design-40-3.jpg",
            title:"Friendship Day Gift",
            price:"",
           
        },
        {
            image:"https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2017/07/2-1.jpg",
            title:"Anniversary Gift",
            price:"",
           
        }
    ]
=======




     
 
     


>>>>>>> dbc4a6e270843651694b340d05c7a501f9aa713b
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
                   <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 450</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
          
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2018/07/IMG_3839-1.jpg" alt="decorative" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Decorative Gifts</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 650</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/10/IMG_0926.jpg" alt="diwali" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Diwali</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 800</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/12/Tb-min-5.jpg" alt="christmas" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Christmas Gifts</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 599</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/06/optimized-7hpr-1.jpg"  alt="fathersday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Father's Day Gifts</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i>290</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/10/IMG_5625.jpg" alt="mothersday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Mother's Day Gifts</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 350</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
          
            <div className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/01/Untitled-design-40-3.jpg" alt="friednshipday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Friendship Day Gifts</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 950</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="shadow menu-item-card p-3 mb-3">
                    <img src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2017/07/2-1.jpg" alt="anniversaryday" className="menu-item-image w-100" />
                    <h1 className="menu-card-title">Anniversary Gifts</h1>
                    <p style={{color:"#fa4f34"}} ><i class="fas fa-rupee-sign"></i> 1150</p>
                    <button className="menu-item-link m-auto">
                        Add To Cart               
                    </button>  
                </div>
            </div>
        </div>
    </div>
</div>

    )

}

export default Categories;