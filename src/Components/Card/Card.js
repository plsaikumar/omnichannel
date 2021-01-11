import React, { useState } from "react"
import ShowImage from "../ShowImage"
import { Link, Redirect } from "react-router-dom"
import "./Card.css"
import {addItem ,updateItem ,removeItem} from "../../core/cartHelper"
const Card = ({ product, showViewProduct = true, showAddToCartButton = true,  cartUpdate = false,showRemoveProductButton=false}) => {

    const [redirect,setRedirect] = useState(false)
    const [count, setCount] = useState(product.count);


    const showViewButton = (showViewProduct) => {
        return (
            showViewProduct && (
                <Link to={`/product/${product._id}`} className="m-2">
                    <button className="view-item m-auto " >
                        View Item
                     </button>
                </Link>

            )
        )
    }

    const addToCart=()=>{
        addItem(product, setRedirect(true));

    }


    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
          updateItem(productId, event.target.value);
        }
      }

    const showAddToCart = () => {
        return (
             showAddToCartButton && (

             <button onClick={addToCart} className="add-to-cart-item m-auto ">
                    Add To Cart
                </button>
             )
        )
    }
    const showCartUpdateOptions = cartUpdate => {
        return (
          cartUpdate && (
            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Adjust Quantity</span>
                </div>
                <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
              </div>
            </div>
          )
        );
      };
      const showRemoveButton = showRemoveProductButton => {
        return (
          showRemoveProductButton && (
            <button
              onClick={() => {
                removeItem(product._id);
              }}
              className="btn btn-outline-danger mt-2 mb-2"
            >
              Remove Product
            </button>
          )
        );
      };
  
    return (

        <div className="shadow menu-item-card p-3 mb-3"  >
            <ShowImage item={product} url="product" />
            <h1 className="menu-card-title">{product.name}</h1>
            <p style={{ color: "#fa4f34" }} ><i class="fas fa-rupee-sign"></i>{product.price}</p>
            {showViewButton(showViewProduct)}
            {showAddToCart(showAddToCartButton)}
          {/*   {showRemoveButton(showRemoveProductButton)}
            {showCartUpdateOptions(cartUpdate)} */}


        </div>
    )
}


export default Card