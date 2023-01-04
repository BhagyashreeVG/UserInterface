import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import DeleteToDo from './components/DeleteToDo';
import ViewToDo from './components/ViewToDo';
import CompleteTodo from './components/CompleteTodo';
import PendingToDo from './components/PendingToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do App
      </header>
      <div className="task-container">
        <AddToDo/>
        <ViewToDo/>
        <DeleteToDo/>
        <CompleteTodo/>
        <PendingToDo/>
      </div>
    </div>
  );
}

export default App;
