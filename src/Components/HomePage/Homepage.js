import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { getProducts } from "../../core/apiCore";
import Card from "../Card/Card";
import ModalComponent from "../Modal/Modal";
import "./HomePage.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <ModalComponent handleClose={handleClose} show={show} />
      <Layout title="HomePage" className="container-fluid">
        <div className="col-12">
          <h1 className="menu-section-heading">Products</h1>
        </div>

        <div className="row">
          {products.map((product, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
