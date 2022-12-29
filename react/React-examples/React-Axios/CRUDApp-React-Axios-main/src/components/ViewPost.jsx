import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './ViewPost.css';

export default function ViewPost() {
    
   const { postId } = useParams();
   
   const baseUrl = "http://localhost:3001/posts";
   const [post, setPost] = useState({
    id: '',
    name: '',
    desc: '',
   });

   const fetchData = () => {
        axios.get(`${baseUrl}/${postId}`).then((response)=> {
           setPost(response.data);
           console.log(response.data.id)
        })
   }

   useEffect(()=> {
       fetchData();
   }, [postId])

  return (
    <>
        <table className="det-table">
            <tr>
                <th colSpan='2'></th>
            </tr>
            <tr>
                <td>Id</td>
                <td>{post.id}</td>
            </tr>
            <tr>
                <td>Title</td>
                <td>{post.name}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{post.desc}</td>
            </tr>
        </table>
    </>
  )
}
