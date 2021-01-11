import React from "react";
import "./ViewCart.css";
import ShowImage from "../ShowImage";

const ViewCart = ({ product }) => {
  return (
    <div>
      <div className="row p-4 viewCart">
        <div className="col-2 ">
          <ShowImage item={product} url="product" />
        </div>
        <div className="col-3 pt-4 pl-5">
          <h6 class="cardTitle ">{product.name}</h6>
        </div>
        <div className="col-2 offset-1 pt-4">
          <div className=" quantity">
            <label className="label">Qty</label>
            <select className="dropDown " title="Qty">
              <option value="1" selected="">
                1
              </option>
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
        <div className="col-2  pt-4">
          <i class="fa fa-inr price">{product.price}</i>
        </div>
        <div className="col-2 pt-4">
          <i class="fa fa-trash-o deleteIcon" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
export default ViewCart;
