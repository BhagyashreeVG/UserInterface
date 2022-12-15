import React from 'react'
import './Product.css';

function Product({data}) {
  return (
    <div className="product-card">
        <img src={data.image}/>
        <h2>{data.name}</h2>    
        <p>{data.description}</p>
        <div className="footer"></div>
    </div>
  )
}

export default Product