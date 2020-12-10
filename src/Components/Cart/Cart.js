import React from "react";
import "./Cart.css";
const Cart = () => {
    return (
        <div >
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-black section-head mb-lg-3 cart-header">Cart Details</h2>
                    </div>

                    <div className="cartDetails  col-12">
                        <div className="row">
                            <div className="p-3 mb-3 col-md-2">
                                <img
                                    src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/02/IMG_2387-354x252.jpg"
                                    className="cartImage ml-3"
                                />
                            </div>
                            <div className="col-md-10">
                                <h6 class="cardTitle mt-3">Stuck On You</h6>
                                <div className="mt-3 quantity">
                                <label className="label">Qty</label>
                                <select className="dropDown mr-5"  title="Qty" >
                                    <option value="1" selected="">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    </select>
                                    <div className="price mr-5 ">
                                    <i class="fa fa-inr" >900</i>
                                    </div>
                                    </div>                                   
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
                <div className=" row remove mb-5 pt-1">
                    <div className="col-12">
                <p className="cAlign">Remove</p>
                </div>
            </div>
            </div>
           
        </div>


    );
}
export default Cart;