import React,{useState} from 'react'
import './AddPost.css';
import Axios from 'axios';

const AddPost = () => {

    const baseUrl = "http://localhost:3001/posts";

    const [name,setName] = useState('');

    const [desc,setDesc] = useState('');

    const submitHandler = (event)=>{
        event.preventDefault();
    }

    const addPostHandler = ()=>{

       // console.log(post.name);
        console.log(`Desc : ${desc}`);
        Axios.post(baseUrl,{name,desc}).then((response)=>{
            console.log(response);
            setName("");
            setDesc("");
            alert(response.data);
        }).catch((error)=>{
            console.log(error);
        });

    }

   

  return (

    <div className='addpost-div'>

        <h2>AddPost</h2>

        <form className='post-form' onSubmit={submitHandler}>

            <input type="text" placeholder='add title' value={name} onChange={(event)=>setName(event.target.value)}/>

            <input type="text" placeholder='add description' value={desc} onChange={(event)=>setDesc(event.target.value)}/>

            <button className='add-button' onClick={addPostHandler}>Add Post</button>

        </form>
        </div>

  )

}



export default AddPost