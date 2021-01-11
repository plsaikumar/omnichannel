import React from "react";
import "./ViewCart.css";
const Cart = () => {
    return (
        <div >
            <div className="container fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-black section-head mb-3 cart-header">Cart Details</h2>
                    </div>
                </div>   
                <div className="row p-3 viewCart"  >
                    <div className="col-2 ">
                                <img
                                    src="https://oyehappy.sgp1.digitaloceanspaces.com/wp-content/uploads/2019/02/IMG_2387-354x252.jpg"
                                    className="cartImage "
                                 />
                    </div>
                    <div className="col-3 pt-4">
                             <h6 class="cardTitle ">Stuck On You</h6>
                    </div>
                    <div className="col-2 offset-1 pt-4">
                           <div className=" quantity">
                                <label className="label">Qty</label>
                                <select className="dropDown "  title="Qty" >
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
                             </div>
                     </div>
                     <div className="col-2 offset-1 pt-4">
                             <i class="fa fa-inr price" >900</i>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-12 remove">
                        <button className="btn btn-primary btn-block"> Remove</button>

                    </div>
                </div>
            </div>     
        </div>


    );
}
export default Cart;