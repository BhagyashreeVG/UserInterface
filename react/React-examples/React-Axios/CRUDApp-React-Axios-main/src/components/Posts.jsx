import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router';
import './Posts.css';

const Posts = ( { setPostForUpdate }) => {
const baseUrl = "http://localhost:3001/posts";
const [postArr,setPostArr] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
    Axios.get(baseUrl).then((response)=>{
        setPostArr(response.data);
    });
},[]);

const handleUpdate = (post) => {
    setPostForUpdate(post);
    navigate(`update/${post.id}`);
}

if(postArr.length===0) return "<h1>There is No Data</h1>";
return (
    <div>
        <h1>All Post ({postArr.length})</h1>
        <div className="container">
            <table>
            {postArr.map((post)=>
            { 
                return (
                <tr>
                    <td>{post.name}</td>
                    <td><button><Link to={`view/${post.id}`}>View</Link></button></td>
                    <td><button className="delete-btn"><Link to={`delete/${post.id}`}>Delete</Link></button></td>
                    <td><button onClick={ () => handleUpdate(post) } className="update-btn">Update</button></td>
                </tr>
                )
            })}
            </table>
            <div class="details">
                <Outlet/>
            </div>
        </div>
      </div>
  )
}

export default Posts;
