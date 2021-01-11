import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { getCart } from "../../core/cartHelper";
import Card from "../Card/Card";
import ViewCart from "../ViewCart/ViewCart";
import ShippingDetails from "../ShipingDetails";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, [items]);

  const showItems = (items) => {
    return (
      <div>
        <h4 className="pb-2">Your cart has {`${items.length}`} items</h4>
        {/*  {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                       
                    />
                ))} */}
        {items.map((product, i) => (
          <ViewCart key={i} product={product} showRemoveProductButton={true} />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br />
    </h2>
  );

  return (
    <Layout title="Shopping Cart" className="container-fluid">
      <div className="row">
        <div className="col-5">
          <ShippingDetails />
        </div>
        <div className="col-7">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
