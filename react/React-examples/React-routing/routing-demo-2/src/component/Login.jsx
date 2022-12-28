import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Login.css';

export default function Login({ setUser }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName || !password) return;
    setUser({ name: userName, password: password});
    navigate('/dashboard');
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div class="element-container">
          <label>Username</label>
          <input type="text" value={userName} onChange={(event)=> {setUserName(event.target.value)}}/>
        </div>
        <div class="element-container">
          <label>Password</label>
          <input type="password" value={password} onChange={(event)=> {setPassword(event.target.value)}}/>
        </div>
        <div class="element-container">
          <input className="btn" type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}
