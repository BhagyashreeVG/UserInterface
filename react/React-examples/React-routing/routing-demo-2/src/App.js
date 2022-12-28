import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import SharedLayout from './component/SharedLayout';
import Home from './component/Home';
import About from './component/About';
import Products from './component/Products';
import Login from './component/Login';
import SharedProductLayout from './component/SharedProductLayout';
import Product from './component/Product';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './component/ProtectedRoute'
import SharedServerLayout from './component/SharedServerLayout';
import ServerProducts from './component/ServerProducts';
import ServerProduct from './component/ServerProduct';

function App() {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/products" element={<SharedProductLayout/>}>
              <Route index element={<Products/>}/>
              <Route path=":productId" element={<Product/>}/>
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login setUser={setUser}/>}/>
            <Route path="/dashboard" element={
              <ProtectedRoute user={user}>
                <Dashboard user={user}/>
              </ProtectedRoute>
            }/>
            <Route path="/serverProduct" element={<SharedServerLayout/>}>
              <Route index element={<ServerProducts setData={ setData }/>}/>
              <Route path=":serverPid" element={<ServerProduct data = {data}/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
