import React from 'react'
import './ProductList.css';
import Product from './Product';

function ProductList(props) {
    const products = props.data;
  return (
    <div className="product-list">
        {products.map(product => <Product data={product}/>)}
    </div>
  )
}

export default ProductList