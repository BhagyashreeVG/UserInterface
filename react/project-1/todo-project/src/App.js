import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="myapp">
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
