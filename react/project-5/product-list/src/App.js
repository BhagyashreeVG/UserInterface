import logo from './logo.svg';
import './App.css';
import { productList } from './service/data';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Card Design HTML & CSS</h1>
      <ProductList data={productList}/>
    </div>
  );
}

export default App;
