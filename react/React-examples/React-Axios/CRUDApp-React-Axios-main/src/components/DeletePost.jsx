import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

function DeletePost() {
  const { postId } = useParams();
  const msg = '';
  const baseUrl = "http://localhost:3001/posts";
  
  const fetchData = () => {
    axios.delete(`${baseUrl}/${postId}`).then((response)=> {
        console.log(response)
    })
  }

  useEffect(()=> {
    fetchData();
  },[postId])

  return (
    <div>Successfully deleted the post</div>
  )
}

export default DeletePost