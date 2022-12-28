import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data';
import './Products.css';

function Products() {
  return (
    <div className="products">
        { products.map((product) => {
            return (
                <>
                <div className="product">
                    <Link to={`/products/${product.productId}`}>
                        <img className="product-image" src={product.image} alt={product.productId}/>
                    </Link>
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Products