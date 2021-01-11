import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Modal.css";
const ModalComponent = ({ handleClose, show }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Header closeButton>
          <Modal.Title className="h6">Your Shopping Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center pt-3 ">
            <div className="mb-3">
              <span className="d-block">Order Total</span>
              <span className="d-block ">
                {" "}
                <i class="fa fa-inr pr-2"></i>999
              </span>
            </div>
            <div className="mb-2 mt-2">
              <Link to="/cart" className="checkout-bag" onClick={handleClose}>
                Review Bag and Checkout
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/homepage" className="shopping">
                {" "}
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
