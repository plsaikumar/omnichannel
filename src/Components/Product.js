import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { listRelated, read } from "../core/apiCore";
import Card from "../Components/Card/Card"

const Product = (props) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [relatedProducts, setRelatedProducts] = useState([])

    const loadSingleProduct = productId => {

        read(productId).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProduct(data)
                listRelated(data._id)
                    .then(data => {
                        if (data.error) {
                            setError(data.error)
                        } else {
                            setRelatedProducts(data)
                        }
                    })
            }
        })

    }
console.log(relatedProducts,"ekjwej")
    useEffect(() => {

        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [props])

    return (
        <Layout
            title={product && product.name}

            className="container-fluid"
        >

            <h2 className="mb-4">Single Product</h2>
            <div className="row">
                <div className="col-6 ">
                    {product && <Card product={product} showViewProduct={false} />}

                </div>
                <div className="col-5 offset-1">
                    <h4>Related Products</h4>
                    {relatedProducts.map((p, i) => (
                        <div className="mb-3">
                            <Card key={i} product={p} />
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )

}

export default Product;