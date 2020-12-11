import React from "react";
import "./Cart.css";
import { Form } from "react-bootstrap";
const Cart = () => {
    return (
        <div className="col-lg-8">
            <h2 className="text-black section-head mb-lg-3 cart-header">Cart Details</h2>
            <Form className="woocommerce-cart-form cart-form" action="https://www.oyehappy.com/cart/" method="post">

                <table className="table border-radius-5p cart-products-table mb-0 cart woocommerce-cart-form__contents" cellspacing="0">
                    <tbody>

                        <tr className="woocommerce-cart-form__cart-item cart_item">
                            <td className="product-thumbnail border-0 pr-0 pb-0 product-column-one w-50">
                                <div className="cart-product-block mb-3 position-relative">
                                    <div className="d-inline-block w-mob-change pt-3 pb-0 pl-3 pr-0 p-lg-3">
                                        <div className="d-inline-block align-top cart-product-image">
                                            <div className="cart-thumb">
                                                
                                                <a href="https://www.oyehappy.com/all-surprises/stuck-on-you/"> </a>  
                                                
                                                <img src=" " className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="picture"  width="354" height="252" >
                                                                                                   
                                            </div>
                                            
                                                <div className="d-none d-lg-block">
                                                    <div className="cart-product-delivery-types" style={{minHeight: "48px"}}>
                                                        <span>COD Available</span>
                                                    <div>
                                                            <span>Priority Delivery Available</span>                                                          
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block align-middle cart-product-title">
                                                    <h3><a className="font-weight-700" href="https://www.oyehappy.com/all-surprises/stuck-on-you/">Stuck On You</a></h3>
                                                    <div className="d-block d-lg-none">
                                                        <span className="text-red final-price"> <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">₹</span>990</bdi></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-inline-block select-qty-box">
                                        <div className="product-qty-price">
                                            <span>Qty</span>
                                            <select name="cart[c5d84b491de9533ab5043b62c3d41057][qty]" title="Qty" className="cw_qty"><option value="1" selected="">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select>                                                 </div>
                                    </div>
                                    <div className="d-block d-lg-none pl-3">
                                        <div className="cart-product-delivery-types pb-1" style={{minHeight: "52px"}}>
                                            <span>COD Available</span>
                                            <div>
                                                <span>Priority Delivery Available</span>                                                  
                                            </div>
                                        </div>
                                        <div className="clearfix">
                                            <div className="d-flex align-items-center justify-content-center text-center btn-remove position-relative" style="min-height: 32px;">
                                                <a data-gtm4wp_product_id="27089" data-gtm4wp_product_name="Stuck On You" data-gtm4wp_product_price="990" data-gtm4wp_product_cat="Gifts" data-gtm4wp_product_url="https://www.oyehappy.com/cart/" data-gtm4wp_product_variant="" data-gtm4wp_product_stocklevel="4" data-gtm4wp_product_brand="" href="https://www.oyehappy.com/cart/?remove_item=c5d84b491de9533ab5043b62c3d41057&amp;_wpnonce=388abadc39" className="remove" aria-label="Remove this item" data-product_id="27089" data-product_sku="SOY">Remove</a>                                               
                                                  </div>
                                            <div className="d-flex d-lg-none align-items-center justify-content-center justify-content-lg-end text-center btn-move-to-wishlist" style={{minHeight: "32px"}}>
                                                <a href="#" className="add-wishlist-btn" item-key="c5d84b491de9533ab5043b62c3d41057" rel="27089"><i className=""></i> Move to Wishlist</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-lg-table-cell border-0 pr-0 pb-0 w-50">
                                <div className="product-price-block mb-3 mb-lg-4">
                                    <div className="d-flex justify-content-end align-items-center p-3" style={{minHeight: "150px"}}>
                                        <div className="pr-3">
                                            <span className="text-red final-price"> <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">₹</span>990</bdi></span></span>
                                        </div>
                                    </div>

                                </div>
                            </td>
                        </tr>


                       

                    </tbody>
                </table>
            </Form>

           
        </div>


    );
}

export default Cart;