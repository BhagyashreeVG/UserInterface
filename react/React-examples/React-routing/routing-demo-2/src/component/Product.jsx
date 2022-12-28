import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { products } from '../data';

export default function Product() {
    const { productId } = useParams();
    const product = products.find((product) => productId === product.productId)
  return (
    <>
      <h3>Product details</h3>
      <h4>{product.productId}</h4>
      <h4>{product.productName}</h4>
      <Link to='/products'>Go to products</Link>
    </>
  )
}
