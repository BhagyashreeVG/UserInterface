import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServerProduct.css';

export default function ServerProduct({ data }) {
  const { serverPid }= useParams();
  const product = data.find((product) => product.id === serverPid)
  return (
    <div>
      <table>
        <tr>
          <th colSpan="2">
            Details
          </th>
        </tr>
        <tr>
          <td>Name</td>
          <td>{product.name}</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>{product.category}</td>
        </tr>
        <tr>
          <td>Company</td>
          <td>{product.company}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{product.price}</td>
        </tr>
      </table>
      <div>
        <Link to='/serverProduct'>Go to products</Link>
      </div>
    </div>
  )
}
