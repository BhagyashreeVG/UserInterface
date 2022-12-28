import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './ServerProducts.css'

function ServerProducts( { setData }) {
  const [responseData, setResponseData] = useState([]);
  const url = "https://course-api.com/react-store-products";

  const fetchData = async () => {
    const response = await axios.get(url);
    setResponseData(response.data);
    setData(response.data);
    console.log(response);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="container">
      {
        responseData.map((data)=> {
          return (
            <div className="server-products">
              <Link to ={`/serverProduct/${data.id}`}>
                <img src={data.image}/>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default ServerProducts