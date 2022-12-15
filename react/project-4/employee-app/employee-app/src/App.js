import logo from './logo.svg';
import './App.css';
import { empArr } from './service/data';
import Employees from './components/Employees'
import ListEmployees from './components/ListEmployees';

function App() {
  const em = empArr;
  /* const empArr = [
    {
      id: 100,
      name: "John",
      dept: "HR"
    },
    {
      id: 101,
      name: "Foo",
      dept: "IT"
    },
    {
      id: 102,
      name: "Bar",
      dept: "Admin"
    }
  ]; */
  return (
    <div>
      <Employees data={em} />
      <ListEmployees col="id"/>
      <ListEmployees />
    </div>
  );
}

export default App;
