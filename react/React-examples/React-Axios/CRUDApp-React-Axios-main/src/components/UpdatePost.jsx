import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UpdatePost({ postForUpdate }) {
    const [name,setName] = useState('');

    const [desc,setDesc] = useState('');

    const baseUrl = "http://localhost:3001/posts";

    const submitHandler = (event)=>{
        event.preventDefault();
    }

    const fetchData = () => {
        axios.patch(`${baseUrl}/${postForUpdate.id}`, {name, desc}).then((response)=> {
            console.log(response)
        })
        console.log({name, desc})
    }

    /* useEffect(() => {
        fetchData();
    },[])  */

  return (
    <div>
        <form onSubmit={submitHandler}>
            <table>
                <tr>
                    <td>Title</td>
                    <td><input type="text" value={name} onChange={(event)=>{ console.log(event); setName(event.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input type="text" value={desc} onChange={(event)=>setDesc(event.target.value)}/></td>
                </tr>
                <tr>
                    <button type="submit" onClick={fetchData}>Update</button>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default UpdatePost