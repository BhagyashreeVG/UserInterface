import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

function App() {
  return (
    <div className="myapp">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
