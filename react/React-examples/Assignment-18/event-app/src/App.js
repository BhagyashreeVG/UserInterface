import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header'
import { cardDetails } from './service/card-data';
import Card from './components/Card';

function App() {
  return (
  <div className="main">  
    <Navigation/>
    <Header/>
    <div class="card-div">
      { cardDetails.map(card => <Card data={card} />)}
    </div>
  </div>
  );
}

export default App;
