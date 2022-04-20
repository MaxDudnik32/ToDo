import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux'

function App() {
  let todos = useSelector(state=>state);
  console.log(todos);

  return (
    <div>
      <h1 className='m-5'>Todos ({todos.length})</h1>
      <div className="App m-5">
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
